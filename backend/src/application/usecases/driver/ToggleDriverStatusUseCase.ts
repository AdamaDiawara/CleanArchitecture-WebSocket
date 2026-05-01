import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { IDriverRepository } from "../../ports/IDriverRepository.js";
import type { DriverProfile } from "../../driver/types.js";
import { DomainError } from "../../../domain/errors/DomainError.js";

export class DriverNotFoundError extends DomainError {
  readonly code = "DRIVER_NOT_FOUND";
  constructor() { super("Driver profile not found"); }
}

export class ToggleDriverStatusUseCase {
  constructor(private readonly driverRepository: IDriverRepository) {}

  async execute(userId: string, isOnline: boolean): Promise<Result<DriverProfile, DriverNotFoundError>> {
    const driver = await this.driverRepository.findByUserId(userId);
    if (!driver) return failure(new DriverNotFoundError());

    const updated = await this.driverRepository.toggleOnlineStatus(driver.id, isOnline);
    return ok(updated);
  }
}
