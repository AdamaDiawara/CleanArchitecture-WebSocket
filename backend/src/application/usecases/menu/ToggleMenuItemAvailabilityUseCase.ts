import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import type { IMenuItemRepository } from "../../ports/IMenuItemRepository.js";
import type { MenuItem } from "../../menu/types.js";
import { MenuItemNotFoundError, MenuItemNotOwnedError } from "../../../domain/errors/MenuErrors.js";

export type ToggleMenuItemAvailabilityCommand = {
  restaurantId: string;
  itemId:       string;
  isAvailable:  boolean;
};

type ToggleError = MenuItemNotFoundError | MenuItemNotOwnedError;

export class ToggleMenuItemAvailabilityUseCase
  implements UseCase<ToggleMenuItemAvailabilityCommand, MenuItem, ToggleError>
{
  constructor(
    private readonly menuCategoryRepository: IMenuCategoryRepository,
    private readonly menuItemRepository:     IMenuItemRepository,
  ) {}

  async execute(command: ToggleMenuItemAvailabilityCommand): Promise<Result<MenuItem, ToggleError>> {
    const item = await this.menuItemRepository.findById(command.itemId);
    if (!item) return failure(new MenuItemNotFoundError());

    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }

    const updated = await this.menuItemRepository.update(command.itemId, {
      isAvailable: command.isAvailable,
    });
    return ok(updated);
  }
}
