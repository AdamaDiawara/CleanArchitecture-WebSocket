import type { IDriverRepository } from "../../ports/IDriverRepository.js";
import type { ActiveDelivery } from "../../driver/types.js";
import { DriverNotFoundError } from "./ToggleDriverStatusUseCase.js";
import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";

export class GetActiveDeliveryUseCase {
  constructor(private readonly driverRepository: IDriverRepository) {}

  async execute(userId: string): Promise<Result<ActiveDelivery | null, DriverNotFoundError>> {
    const driver = await this.driverRepository.findByUserId(userId);
    if (!driver) return failure(new DriverNotFoundError());

    const delivery = await this.driverRepository.getActiveDelivery(driver.id);
    return ok(delivery);
  }
}
