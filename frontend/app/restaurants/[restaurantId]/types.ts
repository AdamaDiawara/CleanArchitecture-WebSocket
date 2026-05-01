import type { MenuItemDto } from "../../auth/services/menu/menuService";

export type SelectedOptionValue = {
  optionId:   string;
  optionName: string;
  valueId:    string;
  valueName:  string;
  extraPrice: number;
};

export type CartEntry = {
  cartId:          string;
  item:            MenuItemDto;
  selectedOptions: SelectedOptionValue[];
  notes:           string;
  quantity:        number;
};

export type OptionSelection = Record<string, string[]>;

export const cartEntryTotal = (entry: CartEntry) =>
  (entry.item.price + entry.selectedOptions.reduce((sum, opt) => sum + opt.extraPrice, 0)) * entry.quantity;
