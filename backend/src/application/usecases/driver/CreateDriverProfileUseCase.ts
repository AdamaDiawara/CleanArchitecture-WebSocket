import type { IDriverRepository } from "../../ports/IDriverRepository.js";
import type { DriverProfile } from "../../driver/types.js";

export class CreateDriverProfileUseCase {
  constructor(private readonly driverRepository: IDriverRepository) {}

  async execute(
    userId:        string,
    name:          string,
    email:         string,
    phone:         string,
    transportType: "bike" | "scooter" | "car",
  ): Promise<DriverProfile> {
    return this.driverRepository.createProfile({ userId, name, email, phone, transportType });
  }
}
