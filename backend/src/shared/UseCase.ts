import type { Result } from "./Result.js";
import type { DomainError } from "../domain/errors/DomainError.js";

/**
 * Contrat générique pour tous les Use Cases.
 * TInput  : données d'entrée du cas d'usage.
 * TOutput : données de sortie en cas de succès.
 * TError  : erreur domaine possible (extends DomainError).
 *
 * Chaque Use Case est une classe avec une seule méthode publique → SRP garanti.
 */
export interface UseCase<
  TInput,
  TOutput,
  TError extends DomainError = DomainError,
> {
  execute(input: TInput): Promise<Result<TOutput, TError>>;
}
