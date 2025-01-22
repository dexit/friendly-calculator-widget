import { WeekInterval } from "@/lib/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plus, Trash2 } from "lucide-react";

interface WeekIntervalInputProps {
  intervals: WeekInterval[];
  onChange: (intervals: WeekInterval[]) => void;
}

export function WeekIntervalInput({ intervals, onChange }: WeekIntervalInputProps) {
  const addInterval = () => {
    onChange([...intervals, { startWeek: 1, endWeek: 52 }]);
  };

  const removeInterval = (index: number) => {
    onChange(intervals.filter((_, i) => i !== index));
  };

  const updateInterval = (index: number, field: keyof WeekInterval, value: number) => {
    const newIntervals = intervals.map((interval, i) => {
      if (i === index) {
        return { ...interval, [field]: value };
      }
      return interval;
    });
    onChange(newIntervals);
  };

  return (
    <div className="space-y-2">
      {intervals.map((interval, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            type="number"
            min={1}
            max={52}
            value={interval.startWeek}
            onChange={(e) => updateInterval(index, "startWeek", parseInt(e.target.value))}
            className="w-20"
          />
          <span>to</span>
          <Input
            type="number"
            min={1}
            max={52}
            value={interval.endWeek}
            onChange={(e) => updateInterval(index, "endWeek", parseInt(e.target.value))}
            className="w-20"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={() => removeInterval(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={addInterval}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Interval
      </Button>
    </div>
  );
}