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
import { siteConfig } from "@/config/site";

export const Calculator = () => {
  const [age, setAge] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [allowance, setAllowance] = useState<number | null>(null);

  const calculateAllowance = () => {
    const ageNum = parseInt(age);
    let baseAmount = 0;

    if (ageNum < 5) {
      baseAmount = 100;
    } else if (ageNum < 11) {
      baseAmount = 150;
    } else if (ageNum < 16) {
      baseAmount = 200;
    } else {
      baseAmount = 250;
    }

    const locationMultiplier = location === "london" ? 1.2 : 1;
    setAllowance(baseAmount * locationMultiplier);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-sm border border-[#E2E8F0]">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#2D3748]">
        {siteConfig.calculator.title}
      </h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="age" className="text-[#4A5568]">Child's Age</Label>
          <Input
            id="age"
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border-[#E2E8F0] focus:ring-[#00BCD4] focus:border-[#00BCD4]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-[#4A5568]">Location</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="border-[#E2E8F0] focus:ring-[#00BCD4] focus:border-[#00BCD4]">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="london">London</SelectItem>
              <SelectItem value="outside_london">Outside London</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full bg-[#00BCD4] hover:bg-[#00ACC1] text-white"
          onClick={calculateAllowance}
          disabled={!age || !location}
        >
          Calculate Allowance
        </Button>

        {allowance !== null && (
          <div className="mt-6 p-4 bg-[#F7FAFC] rounded-md border border-[#E2E8F0]">
            <p className="text-center text-lg font-semibold text-[#2D3748]">
              Estimated Weekly Allowance: £{allowance.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};