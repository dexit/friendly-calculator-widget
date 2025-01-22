export const AGE_GROUPS = [
  "0-4",
  "5-10",
  "11-15",
  "16-17",
  "18+"
] as const;

export type AgeGroup = typeof AGE_GROUPS[number];