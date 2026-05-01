import type { IDocumentRepository } from "../../ports/IDocumentRepository.js";
import type { IUserRepository } from "../../ports/IUserRepository.js";
import type { IRestaurantRepository } from "../../ports/IRestaurantRepository.js";

export type AdminStats = {
  documents: {
    pending:  number;
    approved: number;
    rejected: number;
  };
  users: {
    total:            number;
    clients:          number;
    restaurantOwners: number;
    drivers:          number;
  };
  restaurants: {
    total:  number;
    active: number;
  };
};

export class GetAdminStatsUseCase {
  constructor(
    private readonly documentRepository:   IDocumentRepository,
    private readonly userRepository:        IUserRepository,
    private readonly restaurantRepository:  IRestaurantRepository,
  ) {}

  async execute(): Promise<AdminStats> {
    const [documentStats, userStats, restaurantStats] = await Promise.all([
      this.documentRepository.getStatsByStatus(),
      this.userRepository.getStatsByRole(),
      this.restaurantRepository.getStats(),
    ]);

    return {
      documents:   documentStats,
      users:       userStats,
      restaurants: restaurantStats,
    };
  }
}
