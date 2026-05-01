import type { DriverProfile, AvailableDelivery, ActiveDelivery } from "../driver/types.js";

export type CreateDriverProfileInput = {
  userId:        string;
  name:          string;
  email:         string;
  phone:         string;
  transportType: "bike" | "scooter" | "car";
};

export interface IDriverRepository {
  findByUserId(userId: string): Promise<DriverProfile | null>;
  createProfile(input: CreateDriverProfileInput): Promise<DriverProfile>;
  toggleOnlineStatus(driverId: string, isOnline: boolean): Promise<DriverProfile>;
  getAvailableDeliveries(): Promise<AvailableDelivery[]>;
  acceptDelivery(orderId: string, driverId: string): Promise<{ accepted: boolean }>;
  getActiveDelivery(driverId: string): Promise<ActiveDelivery | null>;
  pickupDelivery(orderId: string, driverId: string): Promise<{ success: boolean; message?: string }>;
  completeDelivery(orderId: string, driverId: string): Promise<{ success: boolean; message?: string }>;
}
