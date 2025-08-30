import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('rounded-lg border border-gray-200 bg-white shadow-sm', className)}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn('px-4 py-3 border-b border-gray-200', className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div className={cn('px-4 py-3', className)}>
      {children}
    </div>
  );
}