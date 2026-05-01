import { DomainError } from "./DomainError.js";

export class InvalidOrderTransitionError extends DomainError {
  readonly code = "INVALID_ORDER_TRANSITION";
  constructor(from: string, to: string) {
    super(`Transition de statut invalide : "${from}" → "${to}".`);
  }
}

export class OrderNotFoundError extends DomainError {
  readonly code = "ORDER_NOT_FOUND";
  constructor() { super("Commande introuvable."); }
}

export class OrderAlreadyAcceptedError extends DomainError {
  readonly code = "ORDER_ALREADY_ACCEPTED";
  constructor() { super("Cette commande a déjà été acceptée."); }
}

export class UnauthorizedOrderActionError extends DomainError {
  readonly code = "UNAUTHORIZED_ORDER_ACTION";
  constructor() { super("Vous n'êtes pas autorisé à effectuer cette action sur cette commande."); }
}
