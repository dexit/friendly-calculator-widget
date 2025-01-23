import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { siteConfig } from "@/config/site";

const Embed = () => {
  const [age, setAge] = useState<AgeGroup>("0-4");
  const [isSpecialCare, setIsSpecialCare] = useState(false);
  const [allowance, setAllowance] = useState<number | null>(null);

  const calculateAllowance = () => {
    const result = calculateAllowanceForChild(age, isSpecialCare);
    setAllowance(result.totalAllowance);
  };

  const config = siteConfig.calculator;

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#2D3748]">
        {config.title}
      </h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="age" className="text-[#4A5568]">{config.labels.age}</Label>
          <Select value={age} onValueChange={(value) => setAge(value as AgeGroup)}>
            <SelectTrigger className="border-[#00BCD4] focus:ring-[#00BCD4]">
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
          <Label htmlFor="careType" className="text-[#4A5568]">{config.labels.careType}</Label>
          <Select 
            value={isSpecialCare ? "special" : "standard"} 
            onValueChange={(value) => setIsSpecialCare(value === "special")}
          >
            <SelectTrigger className="border-[#00BCD4] focus:ring-[#00BCD4]">
              <SelectValue placeholder="Select care type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Care</SelectItem>
              <SelectItem value="special">Special Care</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className={`w-full ${config.buttons.calculate.color} ${config.buttons.calculate.hoverColor}`}
          onClick={calculateAllowance}
        >
          {config.buttons.calculate.text}
        </Button>

        {allowance !== null && (
          <div className={`mt-6 p-4 ${config.results.backgroundColor} rounded-md`}>
            <p className="text-center text-lg font-semibold text-[#2D3748]">
              {config.results.title}: £{allowance.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Embed;