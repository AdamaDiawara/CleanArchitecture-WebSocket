import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";

const CSV_HEADER = "categorie,disponibilite,nom,description,prix,disponible,populaire,stock_journalier";

export class ExportMenuCsvUseCase {
  constructor(private readonly menuCategoryRepository: IMenuCategoryRepository) {}

  async execute(restaurantId: string): Promise<string> {
    const categories = await this.menuCategoryRepository.findAllByRestaurantId(restaurantId);

    const rows: string[] = [CSV_HEADER];

    for (const category of categories) {
      for (const item of category.items) {
        const row = [
          this.escape(category.name),
          category.availability,
          this.escape(item.name),
          this.escape(item.description ?? ""),
          item.price.toFixed(2),
          item.isAvailable ? "1" : "0",
          item.isPopular   ? "1" : "0",
          item.dailyStock !== null ? String(item.dailyStock) : "",
        ].join(",");
        rows.push(row);
      }
    }

    return rows.join("\n");
  }

  private escape(value: string): string {
    if (value.includes(",") || value.includes('"') || value.includes("\n")) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }
}
