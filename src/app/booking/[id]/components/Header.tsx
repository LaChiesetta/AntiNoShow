'use client';

import Image from 'next/image';
import restaurantLogo from "@/assets/restaurant-logo.png";

export const Header = () => {
  return (  
    <header className="backdrop-blur-sm header sticky z-50 bg-card shadow-card border-border/50 flex items-center justify-between p-6 w-full animate-fade-in top-2 mb-6">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src={restaurantLogo}
          alt="Restaurant Logo"
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      {/* Page Title */}
      <div className="text-right max-w-xl">
        <h1 className="text-2xl font-bold text-gray-900 leading-snug">
          Confirm Your Reservation
        </h1>
        <p className="text-sm text-gray-600">
          Please review your booking details below
        </p>
      </div>
    </header>
  );
};
