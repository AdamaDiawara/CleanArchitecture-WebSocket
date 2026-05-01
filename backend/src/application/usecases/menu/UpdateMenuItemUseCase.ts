import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import type { IMenuItemRepository } from "../../ports/IMenuItemRepository.js";
import type { MenuItem, UpdateMenuItemInput } from "../../menu/types.js";
import { MenuItemNotFoundError, MenuItemNotOwnedError } from "../../../domain/errors/MenuErrors.js";

export type UpdateMenuItemCommand = {
  restaurantId: string;
  itemId:       string;
  input:        UpdateMenuItemInput;
};

type UpdateMenuItemError = MenuItemNotFoundError | MenuItemNotOwnedError;

export class UpdateMenuItemUseCase
  implements UseCase<UpdateMenuItemCommand, MenuItem, UpdateMenuItemError>
{
  constructor(
    private readonly menuCategoryRepository: IMenuCategoryRepository,
    private readonly menuItemRepository:     IMenuItemRepository,
  ) {}

  async execute(command: UpdateMenuItemCommand): Promise<Result<MenuItem, UpdateMenuItemError>> {
    const item = await this.menuItemRepository.findById(command.itemId);
    if (!item) return failure(new MenuItemNotFoundError());

    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }

    const updated = await this.menuItemRepository.update(command.itemId, command.input);
    return ok(updated);
  }
}
