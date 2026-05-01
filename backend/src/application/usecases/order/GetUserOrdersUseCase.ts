import type { Result } from "../../../shared/Result.js";
import { ok } from "../../../shared/Result.js";
import type { IOrderRepository, OrderDetail } from "../../ports/IOrderRepository.js";

export class GetUserOrdersUseCase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async execute(userId: string): Promise<Result<OrderDetail[], never>> {
    const orders = await this.orderRepository.findAllByUserId(userId);
    return ok(orders);
  }
}
