// src/components/reservation/ReservationHeader.tsx

'use client';

import { ReservationDetails } from '@/types/reservation';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ReservationHeaderProps {
  reservation: ReservationDetails;
  logoUrl?: string;
}

export const ReservationHeader = ({ reservation, logoUrl }: ReservationHeaderProps) => {
  const isScrolled = useScrollHeader();

  const getRestaurantInitials = (name: string): string => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-2" : "py-6"
    )}>
      <div className="max-w-4xl mx-auto px-4">
        <div className={cn(
          "backdrop-blur-lg bg-white/20 rounded-2xl border border-white/30 shadow-xl transition-all duration-300",
          isScrolled ? "p-4" : "p-6"
        )}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={cn(
                "bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center transition-all duration-300",
                isScrolled ? "w-12 h-12" : "w-16 h-16"
              )}>
                {logoUrl ? (
                  <Image 
                    src={logoUrl}
                    alt={`${reservation.restaurant} logo`}
                    fill
                    className="object-cover rounded-full"
                />
                ) : (
                  <span className={cn(
                    "text-white font-bold transition-all duration-300",
                    isScrolled ? "text-lg" : "text-xl"
                  )}>
                    {getRestaurantInitials(reservation.restaurant)}
                  </span>
                )}
              </div>
              <div>
                <h1 className={cn(
                  "text-white font-bold transition-all duration-300",
                  isScrolled ? "text-lg" : "text-2xl"
                )}>
                  {reservation.restaurant}
                </h1>
                <p className={cn(
                  "text-white/80 transition-all duration-300",
                  isScrolled ? "text-sm" : "text-base"
                )}>
                  Reservation Review
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={cn(
                "text-white font-semibold transition-all duration-300",
                isScrolled ? "text-sm" : "text-base"
              )}>
                ID: {reservation.id}
              </p>
              <p className={cn(
                "text-white/80 transition-all duration-300",
                isScrolled ? "text-xs" : "text-sm"
              )}>
                {reservation.date} at {reservation.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};