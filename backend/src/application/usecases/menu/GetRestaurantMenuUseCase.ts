import type { MenuCategory } from "../../menu/types.js";
import type { IMenuCategoryRepository } from "../../ports/IMenuCategoryRepository.js";

export class GetRestaurantMenuUseCase {
  constructor(private readonly menuCategoryRepository: IMenuCategoryRepository) {}

  async execute(restaurantId: string): Promise<MenuCategory[]> {
    return this.menuCategoryRepository.findAllByRestaurantId(restaurantId);
  }
}
