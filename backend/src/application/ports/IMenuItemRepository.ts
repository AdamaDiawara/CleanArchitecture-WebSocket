import type {
  MenuItem,
  MenuItemOption,
  CreateMenuItemInput,
  UpdateMenuItemInput,
  CreateMenuItemOptionInput,
} from "../menu/types.js";

export interface IMenuItemRepository {
  findById(id: string, withOptions?: boolean): Promise<MenuItem | null>;
  findByCategoryId(categoryId: string): Promise<MenuItem[]>;
  create(input: CreateMenuItemInput): Promise<MenuItem>;
  update(id: string, input: UpdateMenuItemInput): Promise<MenuItem>;
  remove(id: string): Promise<void>;
  updatePhotoUrl(id: string, photoUrl: string): Promise<MenuItem>;
  decrementStock(id: string): Promise<MenuItem>;
  createOption(input: CreateMenuItemOptionInput): Promise<MenuItemOption>;
  removeOption(optionId: string): Promise<void>;
}
