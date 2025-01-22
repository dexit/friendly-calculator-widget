import { AgeGroup } from "./calculator";

export interface WeekInterval {
  startWeek: number;
  endWeek: number;
}

export interface ChildFormData {
  id: string;
  ageGroup: AgeGroup;
  isSpecialCare: boolean;
  weekIntervals: WeekInterval[];
}