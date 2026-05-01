import { DomainError } from "./DomainError.js";

export class RestaurantNotFoundError extends DomainError {
  readonly code = "RESTAURANT_NOT_FOUND";
  constructor() { super("Restaurant not found"); }
}

export class RestaurantNotOwnedError extends DomainError {
  readonly code = "RESTAURANT_NOT_OWNED";
  constructor() { super("This restaurant does not belong to you"); }
}

export class InvalidOpeningHoursError extends DomainError {
  readonly code = "INVALID_OPENING_HOURS";
  constructor(message: string) { super(message); }
}
