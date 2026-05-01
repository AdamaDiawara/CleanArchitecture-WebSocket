import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IRestaurantRepository } from "../../ports/IRestaurantRepository.js";
import type { Restaurant } from "../../restaurant/types.js";
import { OpeningHours } from "../../../domain/value-objects/OpeningHours.js";
import type { OpeningHoursMap } from "../../../domain/value-objects/OpeningHours.js";
import {
  RestaurantNotFoundError,
  RestaurantNotOwnedError,
  InvalidOpeningHoursError,
} from "../../../domain/errors/RestaurantErrors.js";

export type UpdateOpeningHoursCommand = {
  ownerId:       string;
  restaurantId:  string;
  openingHours:  OpeningHoursMap;
};

type UpdateOpeningHoursError =
  | RestaurantNotFoundError
  | RestaurantNotOwnedError
  | InvalidOpeningHoursError;

export class UpdateOpeningHoursUseCase
  implements UseCase<UpdateOpeningHoursCommand, Restaurant, UpdateOpeningHoursError>
{
  constructor(private readonly restaurantRepository: IRestaurantRepository) {}

  async execute(command: UpdateOpeningHoursCommand): Promise<Result<Restaurant, UpdateOpeningHoursError>> {
    const restaurant = await this.restaurantRepository.findById(command.restaurantId);

    if (!restaurant) return failure(new RestaurantNotFoundError());
    if (restaurant.ownerId !== command.ownerId) return failure(new RestaurantNotOwnedError());

    try {
      const validatedHours = OpeningHours.create(command.openingHours);
      const updated = await this.restaurantRepository.updateOpeningHours(
        command.restaurantId,
        validatedHours.toPlainObject(),
      );
      return ok(updated);
    } catch (error) {
      if (error instanceof InvalidOpeningHoursError) return failure(error);
      throw error;
    }
  }
}