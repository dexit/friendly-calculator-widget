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

export interface CalculationResult {
  children: Array<{
    ageGroup: string;
    baseAllowance: number;
    ageRelatedElement: number;
    specialCareAmount: number;
    totalAllowance: number;
  }>;
  weeklyTotal: number;
  monthlyTotal: number;
  yearlyTotal: number;
}