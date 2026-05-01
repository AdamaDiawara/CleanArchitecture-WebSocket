import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import type { IMenuItemRepository } from "../../ports/IMenuItemRepository.js";
import { MenuItemNotFoundError, MenuItemNotOwnedError } from "../../../domain/errors/MenuErrors.js";

export type DeleteMenuItemCommand = { restaurantId: string; itemId: string };
type DeleteMenuItemError = MenuItemNotFoundError | MenuItemNotOwnedError;

export class DeleteMenuItemUseCase
  implements UseCase<DeleteMenuItemCommand, void, DeleteMenuItemError>
{
  constructor(
    private readonly menuCategoryRepository: IMenuCategoryRepository,
    private readonly menuItemRepository:     IMenuItemRepository,
  ) {}

  async execute(command: DeleteMenuItemCommand): Promise<Result<void, DeleteMenuItemError>> {
    const item = await this.menuItemRepository.findById(command.itemId);
    if (!item) return failure(new MenuItemNotFoundError());

    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }

    await this.menuItemRepository.remove(command.itemId);
    return ok(undefined);
  }
}
