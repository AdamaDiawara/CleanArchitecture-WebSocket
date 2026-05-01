import { DomainError } from "./DomainError.js";

export class EmailAlreadyInUseError extends DomainError {
  readonly code = "EMAIL_ALREADY_IN_USE";
  constructor() { super("Cette adresse e-mail est déjà utilisée."); }
}

export class PhoneAlreadyInUseError extends DomainError {
  readonly code = "PHONE_ALREADY_IN_USE";
  constructor() { super("Ce numéro de téléphone est déjà utilisé."); }
}

export class InvalidCredentialsError extends DomainError {
  readonly code = "INVALID_CREDENTIALS";
  constructor() { super("Identifiants incorrects."); }
}

export class InvalidTokenError extends DomainError {
  readonly code = "INVALID_TOKEN";
  constructor() { super("Token invalide ou expiré."); }
}

export class UserNotFoundError extends DomainError {
  readonly code = "USER_NOT_FOUND";
  constructor() { super("Utilisateur introuvable."); }
}

export class InvalidEmailError extends DomainError {
  readonly code = "INVALID_EMAIL";
  constructor(email: string) { super(`"${email}" n'est pas une adresse e-mail valide.`); }
}
