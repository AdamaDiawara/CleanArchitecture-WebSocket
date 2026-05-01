import { InvalidOpeningHoursError } from "../errors/RestaurantErrors.js";

export type DayOfWeek =
  | "monday" | "tuesday" | "wednesday" | "thursday"
  | "friday" | "saturday" | "sunday";

export type TimeSlot = {
  open:  string; // "HH:mm"
  close: string; // "HH:mm"
};

export type OpeningHoursMap = Partial<Record<DayOfWeek, TimeSlot | null>>;

export const ALL_DAYS: DayOfWeek[] = [
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
];

export class OpeningHours {
  private constructor(private readonly value: OpeningHoursMap) {}

  static create(raw: OpeningHoursMap): OpeningHours {
    for (const [day, slot] of Object.entries(raw)) {
      if (!slot) continue;
      OpeningHours.validateTimeSlot(day as DayOfWeek, slot);
    }
    return new OpeningHours(raw);
  }

  private static validateTimeSlot(day: DayOfWeek, slot: TimeSlot): void {
    const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

    if (!timePattern.test(slot.open)) {
      throw new InvalidOpeningHoursError(
        `Heure d'ouverture invalide pour ${day} : ${slot.open}`,
      );
    }
    if (!timePattern.test(slot.close)) {
      throw new InvalidOpeningHoursError(
        `Heure de fermeture invalide pour ${day} : ${slot.close}`,
      );
    }
    if (slot.open >= slot.close) {
      throw new InvalidOpeningHoursError(
        `L'heure d'ouverture doit être avant la fermeture pour ${day}`,
      );
    }
  }

  toPlainObject(): OpeningHoursMap {
    return { ...this.value };
  }
}