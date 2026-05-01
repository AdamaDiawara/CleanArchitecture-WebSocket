import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IRestaurantRepository } from "../../ports/IRestaurantRepository.js";
import type { Restaurant, UpdateRestaurantProfileInput } from "../../restaurant/types.js";
import { RestaurantNotFoundError, RestaurantNotOwnedError } from "../../../domain/errors/RestaurantErrors.js";

export type UpdateRestaurantProfileCommand = {
  ownerId:       string;
  restaurantId:  string;
  input:         UpdateRestaurantProfileInput;
};

type UpdateRestaurantProfileError = RestaurantNotFoundError | RestaurantNotOwnedError;

export class UpdateRestaurantProfileUseCase
  implements UseCase<UpdateRestaurantProfileCommand, Restaurant, UpdateRestaurantProfileError>
{
  constructor(private readonly restaurantRepository: IRestaurantRepository) {}

  async execute(command: UpdateRestaurantProfileCommand): Promise<Result<Restaurant, UpdateRestaurantProfileError>> {
    const restaurant = await this.restaurantRepository.findById(command.restaurantId);

    if (!restaurant) return failure(new RestaurantNotFoundError());
    if (restaurant.ownerId !== command.ownerId) return failure(new RestaurantNotOwnedError());

    const updated = await this.restaurantRepository.updateProfile(command.restaurantId, command.input);
    return ok(updated);
  }
}