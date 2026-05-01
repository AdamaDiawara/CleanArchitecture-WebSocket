import { DomainError } from "./DomainError.js";

export class DifferentRestaurantError extends DomainError {
  readonly code = "CART_DIFFERENT_RESTAURANT";
  constructor() {
    super("Un panier ne peut contenir des articles que d'un seul restaurant à la fois.");
  }
}

export class EmptyCartError extends DomainError {
  readonly code = "CART_EMPTY";
  constructor() { super("Impossible de commander avec un panier vide."); }
}

export class OutOfStockError extends DomainError {
  readonly code = "OUT_OF_STOCK";
  constructor(itemName: string) {
    super(`"${itemName}" n'est plus disponible (stock épuisé).`);
  }
}
