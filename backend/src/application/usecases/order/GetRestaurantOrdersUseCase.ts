import type { IOrderRepository, RestaurantOrder } from "../../ports/IOrderRepository.js";
import type { IRestaurantRepository } from "../../ports/IRestaurantRepository.js";

export class GetRestaurantOrdersUseCase {
  constructor(
    private readonly orderRepository:      IOrderRepository,
    private readonly restaurantRepository: IRestaurantRepository,
  ) {}

  async execute(userId: string): Promise<RestaurantOrder[]> {
    const restaurants = await this.restaurantRepository.findAllByOwnerId(userId);
    if (restaurants.length === 0) return [];

    const allOrders: RestaurantOrder[] = [];
    for (const restaurant of restaurants) {
      const orders = await this.orderRepository.findAllByRestaurantId(restaurant.id);
      allOrders.push(...orders);
    }

    return allOrders.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }
}
