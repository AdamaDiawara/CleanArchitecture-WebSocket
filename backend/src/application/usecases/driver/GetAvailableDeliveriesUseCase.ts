import type { AvailableDelivery } from "../../driver/types.js";
import type { IDriverRepository } from "../../ports/IDriverRepository.js";

export class GetAvailableDeliveriesUseCase {
  constructor(private readonly driverRepository: IDriverRepository) {}

  async execute(): Promise<AvailableDelivery[]> {
    return this.driverRepository.getAvailableDeliveries();
  }
}
