import type { Result } from "../../../shared/Result.js";
import { ok } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IRestaurantRepository } from "../../ports/IRestaurantRepository.js";
import type { Restaurant, CreateRestaurantInput } from "../../restaurant/types.js";

export class CreateRestaurantUseCase
  implements UseCase<CreateRestaurantInput, Restaurant, never>
{
  constructor(private readonly restaurantRepository: IRestaurantRepository) {}

  async execute(input: CreateRestaurantInput): Promise<Result<Restaurant, never>> {
    const restaurant = await this.restaurantRepository.create(input);
    return ok(restaurant);
  }
}
