import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TermsCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const TermsCheckbox = ({ checked, onCheckedChange }: TermsCheckboxProps) => {
  return (
    <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-warm border border-border/50">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-0.5 border-terracotta data-[state=checked]:bg-terracotta data-[state=checked]:border-terracotta"
      />
      <Label 
        htmlFor="terms" 
        className="text-sm leading-relaxed cursor-pointer text-foreground"
      >
        I agree to the{" "}
        <span className="text-terracotta font-medium hover:underline cursor-pointer">
          terms and conditions
        </span>
        , understand the cancellation policy, and acknowledge that a credit card is required to secure this reservation.
      </Label>
    </div>
  );
};