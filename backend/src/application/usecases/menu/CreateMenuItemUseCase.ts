import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import type { IMenuItemRepository } from "../../ports/IMenuItemRepository.js";
import type { MenuItem, CreateMenuItemInput } from "../../menu/types.js";
import { MenuCategoryNotFoundError, MenuCategoryNotOwnedError } from "../../../domain/errors/MenuErrors.js";

export type CreateMenuItemCommand = {
  restaurantId: string;
  input:        CreateMenuItemInput;
};

type CreateMenuItemError = MenuCategoryNotFoundError | MenuCategoryNotOwnedError;

export class CreateMenuItemUseCase
  implements UseCase<CreateMenuItemCommand, MenuItem, CreateMenuItemError>
{
  constructor(
    private readonly menuCategoryRepository: IMenuCategoryRepository,
    private readonly menuItemRepository:     IMenuItemRepository,
  ) {}

  async execute(command: CreateMenuItemCommand): Promise<Result<MenuItem, CreateMenuItemError>> {
    const category = await this.menuCategoryRepository.findById(command.input.categoryId);
    if (!category)                                       return failure(new MenuCategoryNotFoundError());
    if (category.restaurantId !== command.restaurantId)  return failure(new MenuCategoryNotOwnedError());

    const item = await this.menuItemRepository.create(command.input);
    return ok(item);
  }
}
