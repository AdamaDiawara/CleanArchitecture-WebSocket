/**
 * Port générique de lecture pour toute entité identifiable.
 * Les ports spécifiques (IUserRepository, etc.) étendent cette interface,
 * ce qui garantit que findById est toujours disponible sans répétition.
 */
export interface IRepository<T extends { id: string }> {
  findById(id: string): Promise<T | null>;
}
