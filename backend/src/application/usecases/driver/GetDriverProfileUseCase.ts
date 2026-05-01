import type { IDriverRepository } from "../../ports/IDriverRepository.js";
import type { DriverProfile } from "../../driver/types.js";

export class GetDriverProfileUseCase {
  constructor(private readonly driverRepository: IDriverRepository) {}

  async execute(userId: string): Promise<DriverProfile | null> {
    return this.driverRepository.findByUserId(userId);
  }
}
