// src/components/ui/Checkbox.tsx

import { InputHTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const Checkbox = ({ 
  label, 
  checked, 
  onCheckedChange, 
  className,
  ...props 
}: CheckboxProps) => {
  return (
    <label className={cn("flex items-start space-x-3 cursor-pointer", className)}>
      <div className="relative mt-1">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckedChange(e.target.checked)}
          className="sr-only"
          {...props}
        />
        <div className={cn(
          "w-5 h-5 rounded border-2 border-white/50 backdrop-blur-sm transition-all duration-200",
          checked ? "bg-green-500/80 border-green-400" : "bg-white/10"
        )}>
          {checked && <Check className="w-3 h-3 text-white m-0.5" />}
        </div>
      </div>
      <span className="text-white/90">
        {label}
      </span>
    </label>
  );
};