// src/components/ui/Button.tsx

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  fullWidth = false,
  disabled,
  ...props 
}: ButtonProps) => {
  const baseStyles = "font-semibold rounded-xl transition-all duration-200 active:scale-95";
  
  const variants = {
    primary: disabled 
      ? "bg-white/20 text-white/50 cursor-not-allowed"
      : "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105",
    secondary: "backdrop-blur-lg bg-white/15 border border-white/30 text-white hover:bg-white/20"
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-3 px-6 text-lg"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};