import { Money } from "../value-objects/Money.js";
import { DifferentRestaurantError, OutOfStockError } from "../errors/CartErrors.js";

export type CartItemProps = {
  menuItemId: string;
  restaurantId: string;
  name: string;
  unitPrice: Money;
  quantity: number;
  dailyStock: number;
};

export class CartItem {
  readonly menuItemId: string;
  readonly restaurantId: string;
  readonly name: string;
  readonly unitPrice: Money;
  readonly quantity: number;
  readonly dailyStock: number;

  constructor(props: CartItemProps) {
    if (props.dailyStock === 0) throw new OutOfStockError(props.name);
    this.menuItemId   = props.menuItemId;
    this.restaurantId = props.restaurantId;
    this.name         = props.name;
    this.unitPrice    = props.unitPrice;
    this.quantity     = props.quantity;
    this.dailyStock   = props.dailyStock;
  }

  get subtotal(): Money {
    return this.unitPrice.multiply(this.quantity);
  }

  withQuantity(quantity: number): CartItem {
    return new CartItem({ ...this, quantity });
  }
}

/**
 * Entité Cart — règle métier : un seul restaurant à la fois.
 * Si on tente d'ajouter un article d'un autre restaurant, une
 * DifferentRestaurantError est levée (le client décide de vider ou annuler).
 */
export class Cart {
  private _items: CartItem[] = [];
  private _restaurantId: string | null = null;

  /** Ajoute un article. Lève DifferentRestaurantError si restaurant différent. */
  addItem(item: CartItem): void {
    if (this._restaurantId && this._restaurantId !== item.restaurantId) {
      throw new DifferentRestaurantError();
    }
    this._restaurantId = item.restaurantId;

    const existing = this._items.find((cartItem) => cartItem.menuItemId === item.menuItemId);
    if (existing) {
      this._items = this._items.map((cartItem) =>
        cartItem.menuItemId === item.menuItemId
          ? cartItem.withQuantity(cartItem.quantity + item.quantity)
          : cartItem,
      );
    } else {
      this._items.push(item);
    }
  }

  removeItem(menuItemId: string): void {
    this._items = this._items.filter((cartItem) => cartItem.menuItemId !== menuItemId);
    if (this._items.length === 0) this._restaurantId = null;
  }

  /** Vide le panier (utilisé quand le client choisit de changer de restaurant). */
  clear(): void {
    this._items        = [];
    this._restaurantId = null;
  }

  get total(): Money {
    return this._items.reduce((sum, cartItem) => sum.add(cartItem.subtotal), Money.zero());
  }

  get isEmpty(): boolean {
    return this._items.length === 0;
  }

  get restaurantId(): string | null {
    return this._restaurantId;
  }

  get items(): readonly CartItem[] {
    return [...this._items];
  }
}
