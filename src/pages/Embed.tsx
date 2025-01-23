import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { calculateAllowanceForChild } from "@/lib/calculator";
import type { AgeGroup } from "@/lib/calculator";

const Embed = () => {
  const [age, setAge] = useState<AgeGroup>("0-4");
  const [isSpecialCare, setIsSpecialCare] = useState(false);
  const [allowance, setAllowance] = useState<number | null>(null);

  const calculateAllowance = () => {
    const result = calculateAllowanceForChild(age, isSpecialCare);
    setAllowance(result.totalAllowance);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Foster Care Allowance Calculator</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="age">Child's Age Group</Label>
          <Select value={age} onValueChange={(value) => setAge(value as AgeGroup)}>
            <SelectTrigger>
              <SelectValue placeholder="Select age group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-4">0-4 years</SelectItem>
              <SelectItem value="5-10">5-10 years</SelectItem>
              <SelectItem value="11-15">11-15 years</SelectItem>
              <SelectItem value="16-17">16-17 years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="careType">Care Type</Label>
          <Select value={isSpecialCare ? "special" : "standard"} onValueChange={(value) => setIsSpecialCare(value === "special")}>
            <SelectTrigger>
              <SelectValue placeholder="Select care type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Care</SelectItem>
              <SelectItem value="special">Special Care</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full"
          onClick={calculateAllowance}
        >
          Calculate Allowance
        </Button>

        {allowance !== null && (
          <div className="mt-6 p-4 bg-green-50 rounded-md">
            <p className="text-center text-lg font-semibold">
              Estimated Weekly Allowance: £{allowance.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Embed;