import type { Restaurant } from "../../restaurant/types.js";
import type { IRestaurantRepository } from "../../ports/IRestaurantRepository.js";

export class GetOwnerRestaurantsUseCase {
  constructor(private readonly restaurantRepository: IRestaurantRepository) {}

  async execute(ownerId: string): Promise<Restaurant[]> {
    return this.restaurantRepository.findAllByOwnerId(ownerId);
  }
}
