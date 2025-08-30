// src/components/ui/Card.tsx

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn(
      "backdrop-blur-lg bg-white/15 rounded-2xl border border-white/30 shadow-xl p-6",
      className
    )}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }: CardContentProps) => {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, icon }: CardTitleProps) => {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {icon}
      <h2 className="text-xl font-semibold text-white">{children}</h2>
    </div>
  );
};