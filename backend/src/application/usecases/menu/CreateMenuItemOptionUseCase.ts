import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import type { IMenuItemRepository } from "../../ports/IMenuItemRepository.js";
import type { MenuItemOption, CreateMenuItemOptionInput } from "../../menu/types.js";
import { MenuItemNotFoundError, MenuItemNotOwnedError } from "../../../domain/errors/MenuErrors.js";

export type CreateMenuItemOptionCommand = {
  restaurantId: string;
  input:        CreateMenuItemOptionInput;
};

type CreateOptionError = MenuItemNotFoundError | MenuItemNotOwnedError;

export class CreateMenuItemOptionUseCase
  implements UseCase<CreateMenuItemOptionCommand, MenuItemOption, CreateOptionError>
{
  constructor(
    private readonly menuCategoryRepository: IMenuCategoryRepository,
    private readonly menuItemRepository:     IMenuItemRepository,
  ) {}

  async execute(command: CreateMenuItemOptionCommand): Promise<Result<MenuItemOption, CreateOptionError>> {
    const item = await this.menuItemRepository.findById(command.input.itemId);
    if (!item) return failure(new MenuItemNotFoundError());

    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }

    const option = await this.menuItemRepository.createOption(command.input);
    return ok(option);
  }
}
