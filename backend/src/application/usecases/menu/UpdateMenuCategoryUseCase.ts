import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import type { MenuCategory, UpdateMenuCategoryInput } from "../../menu/types.js";
import { MenuCategoryNotFoundError, MenuCategoryNotOwnedError } from "../../../domain/errors/MenuErrors.js";

export type UpdateMenuCategoryCommand = {
  restaurantId: string;
  categoryId:   string;
  input:        UpdateMenuCategoryInput;
};

type UpdateMenuCategoryError = MenuCategoryNotFoundError | MenuCategoryNotOwnedError;

export class UpdateMenuCategoryUseCase
  implements UseCase<UpdateMenuCategoryCommand, MenuCategory, UpdateMenuCategoryError>
{
  constructor(private readonly menuCategoryRepository: IMenuCategoryRepository) {}

  async execute(command: UpdateMenuCategoryCommand): Promise<Result<MenuCategory, UpdateMenuCategoryError>> {
    const category = await this.menuCategoryRepository.findById(command.categoryId);
    if (!category)                                         return failure(new MenuCategoryNotFoundError());
    if (category.restaurantId !== command.restaurantId)    return failure(new MenuCategoryNotOwnedError());

    const updated = await this.menuCategoryRepository.update(command.categoryId, command.input);
    return ok(updated);
  }
}
