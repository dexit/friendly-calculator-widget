import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export const Calculator = () => {
  const [age, setAge] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [allowance, setAllowance] = useState<number | null>(null);

  const calculateAllowance = () => {
    const ageNum = parseInt(age);
    let baseAmount = 0;

    // Basic age-based calculation
    if (ageNum < 5) {
      baseAmount = 100;
    } else if (ageNum < 11) {
      baseAmount = 150;
    } else if (ageNum < 16) {
      baseAmount = 200;
    } else {
      baseAmount = 250;
    }

    // Location adjustment
    const locationMultiplier = location === "london" ? 1.2 : 1;
    setAllowance(baseAmount * locationMultiplier);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Foster Care Allowance Calculator</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="age">Child's Age</Label>
          <Input
            id="age"
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <select
            id="location"
            className="w-full p-2 border rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select location</option>
            <option value="london">London</option>
            <option value="outside_london">Outside London</option>
          </select>
        </div>

        <Button 
          className="w-full"
          onClick={calculateAllowance}
          disabled={!age || !location}
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