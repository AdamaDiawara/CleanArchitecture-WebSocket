import type { MenuCategory, CreateMenuCategoryInput, UpdateMenuCategoryInput } from "../menu/types.js";

export interface IMenuCategoryRepository {
  findAllByRestaurantId(restaurantId: string): Promise<MenuCategory[]>;
  findById(id: string): Promise<MenuCategory | null>;
  create(input: CreateMenuCategoryInput): Promise<MenuCategory>;
  update(id: string, input: UpdateMenuCategoryInput): Promise<MenuCategory>;
  remove(id: string): Promise<void>;
  reorder(restaurantId: string, orderedIds: string[]): Promise<void>;
}
