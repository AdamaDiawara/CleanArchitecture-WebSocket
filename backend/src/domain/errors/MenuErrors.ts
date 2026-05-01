import { DomainError } from "./DomainError.js";

export class MenuCategoryNotFoundError extends DomainError {
  readonly code = "MENU_CATEGORY_NOT_FOUND";
  constructor() { super("Menu category not found"); }
}

export class MenuCategoryNotOwnedError extends DomainError {
  readonly code = "MENU_CATEGORY_NOT_OWNED";
  constructor() { super("This menu category does not belong to your restaurant"); }
}

export class MenuItemNotFoundError extends DomainError {
  readonly code = "MENU_ITEM_NOT_FOUND";
  constructor() { super("Menu item not found"); }
}

export class MenuItemNotOwnedError extends DomainError {
  readonly code = "MENU_ITEM_NOT_OWNED";
  constructor() { super("This menu item does not belong to your restaurant"); }
}

export class MenuItemOptionNotFoundError extends DomainError {
  readonly code = "MENU_ITEM_OPTION_NOT_FOUND";
  constructor() { super("Menu item option not found"); }
}

export class InvalidMenuCsvError extends DomainError {
  readonly code = "INVALID_MENU_CSV";
  constructor(message: string) { super(message); }
}

export class OutOfStockError extends DomainError {
  readonly code = "MENU_ITEM_OUT_OF_STOCK";
  constructor(itemName: string) { super(`${itemName} est en rupture de stock`); }
}
