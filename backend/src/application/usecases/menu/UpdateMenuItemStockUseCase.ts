import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import type { IMenuItemRepository } from "../../ports/IMenuItemRepository.js";
import type { MenuItem } from "../../menu/types.js";
import { MenuItemNotFoundError, MenuItemNotOwnedError } from "../../../domain/errors/MenuErrors.js";

export type UpdateMenuItemStockCommand = {
  restaurantId: string;
  itemId:       string;
  dailyStock:   number | null;
};

type UpdateStockError = MenuItemNotFoundError | MenuItemNotOwnedError;

export class UpdateMenuItemStockUseCase
  implements UseCase<UpdateMenuItemStockCommand, MenuItem, UpdateStockError>
{
  constructor(
    private readonly menuCategoryRepository: IMenuCategoryRepository,
    private readonly menuItemRepository:     IMenuItemRepository,
  ) {}

  async execute(command: UpdateMenuItemStockCommand): Promise<Result<MenuItem, UpdateStockError>> {
    const item = await this.menuItemRepository.findById(command.itemId);
    if (!item) return failure(new MenuItemNotFoundError());

    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }

    const isAvailable = command.dailyStock === null || command.dailyStock > 0;

    const updated = await this.menuItemRepository.update(command.itemId, {
      dailyStock:  command.dailyStock,
      isAvailable,
    });
    return ok(updated);
  }
}
