export type DayOfWeek =
  | "monday" | "tuesday" | "wednesday" | "thursday"
  | "friday" | "saturday" | "sunday";

export type TimeSlot = {
  open:  string;
  close: string;
};

export type OpeningHoursMap = Partial<Record<DayOfWeek, TimeSlot | null>>;

export const DAY_LABELS: Record<DayOfWeek, string> = {
  monday:    "Lundi",
  tuesday:   "Mardi",
  wednesday: "Mercredi",
  thursday:  "Jeudi",
  friday:    "Vendredi",
  saturday:  "Samedi",
  sunday:    "Dimanche",
};

export const ALL_DAYS: DayOfWeek[] = [
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
];
