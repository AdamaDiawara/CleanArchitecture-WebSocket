import type { Result } from "../../../shared/Result.js";
import { ok } from "../../../shared/Result.js";
import type { IOrderRepository, CreateOrderInput, OrderSummary } from "../../ports/IOrderRepository.js";

export class CreateOrderUseCase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async execute(input: CreateOrderInput): Promise<Result<OrderSummary, never>> {
    const order = await this.orderRepository.create(input);
    return ok(order);
  }
}
