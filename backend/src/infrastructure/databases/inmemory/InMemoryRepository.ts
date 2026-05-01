/**
 * Classe abstraite générique — adaptateur in-memory réutilisable.
 *
 * Principe ouvert/fermé (OCP) : les sous-classes héritent du stockage et des
 * méthodes CRUD de base sans les réécrire, et étendent uniquement ce dont elles
 * ont besoin (méthodes de recherche spécifiques).
 *
 * T doit posséder un champ `id: string` pour être stocké dans la Map.
 */
export abstract class InMemoryRepository<T extends { id: string }> {
  protected readonly store = new Map<string, T>();

  protected save(entity: T): T {
    this.store.set(entity.id, entity);
    return entity;
  }

  protected getById(id: string): T | null {
    return this.store.get(id) ?? null;
  }

  /** Retourne le premier élément vérifiant le prédicat, ou null. */
  protected findWhere(predicate: (entity: T) => boolean): T | null {
    for (const entity of this.store.values()) {
      if (predicate(entity)) return entity;
    }
    return null;
  }

  /** Retourne tous les éléments vérifiant le prédicat. */
  protected filterWhere(predicate: (entity: T) => boolean): T[] {
    return [...this.store.values()].filter(predicate);
  }

  protected deleteById(id: string): void {
    this.store.delete(id);
  }

  get size(): number {
    return this.store.size;
  }
}
