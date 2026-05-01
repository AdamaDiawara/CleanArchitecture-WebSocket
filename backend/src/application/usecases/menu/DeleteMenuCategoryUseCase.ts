import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import { MenuCategoryNotFoundError, MenuCategoryNotOwnedError } from "../../../domain/errors/MenuErrors.js";

export type DeleteMenuCategoryCommand = { restaurantId: string; categoryId: string };
type DeleteMenuCategoryError = MenuCategoryNotFoundError | MenuCategoryNotOwnedError;

export class DeleteMenuCategoryUseCase
  implements UseCase<DeleteMenuCategoryCommand, void, DeleteMenuCategoryError>
{
  constructor(private readonly menuCategoryRepository: IMenuCategoryRepository) {}

  async execute(command: DeleteMenuCategoryCommand): Promise<Result<void, DeleteMenuCategoryError>> {
    const category = await this.menuCategoryRepository.findById(command.categoryId);
    if (!category)                                       return failure(new MenuCategoryNotFoundError());
    if (category.restaurantId !== command.restaurantId)  return failure(new MenuCategoryNotOwnedError());

    await this.menuCategoryRepository.remove(command.categoryId);
    return ok(undefined);
  }
}
