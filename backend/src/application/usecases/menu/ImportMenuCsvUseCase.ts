import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import type { IMenuItemRepository } from "../../ports/IMenuItemRepository.js";
import type { MenuAvailability } from "../../menu/types.js";
import { InvalidMenuCsvError } from "../../../domain/errors/MenuErrors.js";

const VALID_AVAILABILITY: MenuAvailability[] = ["always", "lunch", "dinner", "weekend"];

type ImportResult = { categoriesCreated: number; itemsCreated: number };

export class ImportMenuCsvUseCase {
  constructor(
    private readonly menuCategoryRepository: IMenuCategoryRepository,
    private readonly menuItemRepository:     IMenuItemRepository,
  ) {}

  async execute(
    restaurantId: string,
    csvContent:   string,
  ): Promise<Result<ImportResult, InvalidMenuCsvError>> {
    const lines = csvContent.trim().split("\n").filter(Boolean);
    if (lines.length < 2) return failure(new InvalidMenuCsvError("Le fichier CSV est vide"));

    const [header, ...dataLines] = lines;
    const columns = header?.split(",").map((column) => column.trim().toLowerCase()) ?? [];

    const required = ["categorie", "nom", "prix"];
    for (const field of required) {
      if (!columns.includes(field)) {
        return failure(new InvalidMenuCsvError(`Colonne manquante : ${field}`));
      }
    }

    const categoryCache = new Map<string, string>();
    let categoriesCreated = 0;
    let itemsCreated      = 0;

    for (const line of dataLines) {
      const values  = this.parseCsvLine(line);
      const get     = (field: string) => values[columns.indexOf(field)] ?? "";

      const categoryName   = get("categorie").trim();
      const availability   = (get("disponibilite").trim() || "always") as MenuAvailability;
      const itemName       = get("nom").trim();
      const priceRaw       = parseFloat(get("prix").replace(",", "."));
      const isAvailable    = get("disponible") !== "0";
      const isPopular      = get("populaire") === "1";
      const stockRaw       = get("stock_journalier").trim();
      const dailyStock     = stockRaw !== "" ? parseInt(stockRaw) : null;

      if (!categoryName || !itemName || isNaN(priceRaw)) continue;
      if (!VALID_AVAILABILITY.includes(availability)) continue;

      let categoryId = categoryCache.get(categoryName);
      if (!categoryId) {
        const category = await this.menuCategoryRepository.create({
          restaurantId,
          name:         categoryName,
          availability: availability as MenuAvailability,
        });
        categoryId = category.id;
        categoryCache.set(categoryName, categoryId);
        categoriesCreated++;
      }

      await this.menuItemRepository.create({
        categoryId,
        name:        itemName,
        description: get("description").trim() || undefined,
        price:       priceRaw,
        isAvailable,
        isPopular,
        ...(dailyStock !== null && { dailyStock }),
      });
      itemsCreated++;
    }

    return ok({ categoriesCreated, itemsCreated });
  }

  private parseCsvLine(line: string): string[] {
    const result: string[] = [];
    let current  = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
        else inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        result.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  }
}
