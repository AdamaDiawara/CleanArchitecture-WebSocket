import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IRestaurantRepository } from "../../ports/IRestaurantRepository.js";
import type { Restaurant } from "../../restaurant/types.js";
import { RestaurantNotFoundError, RestaurantNotOwnedError } from "../../../domain/errors/RestaurantErrors.js";

export type ToggleRestaurantStatusCommand = {
  ownerId:      string;
  restaurantId: string;
  isActive:     boolean;
};

type ToggleRestaurantStatusError = RestaurantNotFoundError | RestaurantNotOwnedError;

export class ToggleRestaurantStatusUseCase
  implements UseCase<ToggleRestaurantStatusCommand, Restaurant, ToggleRestaurantStatusError>
{
  constructor(private readonly restaurantRepository: IRestaurantRepository) {}

  async execute(command: ToggleRestaurantStatusCommand): Promise<Result<Restaurant, ToggleRestaurantStatusError>> {
    const restaurant = await this.restaurantRepository.findById(command.restaurantId);

    if (!restaurant) return failure(new RestaurantNotFoundError());
    if (restaurant.ownerId !== command.ownerId) return failure(new RestaurantNotOwnedError());

    const updated = await this.restaurantRepository.updateStatus(command.restaurantId, command.isActive);
    return ok(updated);
  }
}