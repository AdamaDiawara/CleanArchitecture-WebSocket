import type { Result } from "../../../shared/Result.js";
import { ok } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";
import type { MenuCategory, CreateMenuCategoryInput } from "../../menu/types.js";

export class CreateMenuCategoryUseCase
  implements UseCase<CreateMenuCategoryInput, MenuCategory, never>
{
  constructor(private readonly menuCategoryRepository: IMenuCategoryRepository) {}

  async execute(input: CreateMenuCategoryInput): Promise<Result<MenuCategory, never>> {
    const category = await this.menuCategoryRepository.create(input);
    return ok(category);
  }
}
