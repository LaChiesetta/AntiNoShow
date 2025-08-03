'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserDetailsCard } from "@/app/booking/[id]/components/UserDetailsCard";
import { BookingInfoCard } from "@/app/booking/[id]/components/BookingInfoCard";
import { NoShowPolicyCard } from "@/app/booking/[id]/components/NoShowPolicyCard";
import { PromotionsCarousel } from "@/app/booking/[id]/components/PromotionsCarousel";
import { TermsCheckbox } from "@/app/booking/[id]/components/TermsCheckbox";
import { ArrowRight, CheckCircle } from "lucide-react";
import restaurantBg from "@/assets/restaurant-bg.jpg";

const BookingConfirmation = () => {
  const [user, setUser] = useState({
    name: "Sarah Johnson",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@email.com"
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const booking = {
    date: "Saturday, March 16, 2024",
    time: "7:30 PM",
    guests: 4,
    specialRequests: "Birthday celebration - could we have a corner table with a view? Also, one guest has a gluten allergy."
  };

  const handleContinue = () => {
    // Handle continue to payment/confirmation
    console.log("Proceeding to payment...");
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${restaurantBg.src})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      
      <div className="relative z-10 min-h-screen p-4 max-w-md mx-auto">
        {/* Header */}
        <div className="text-center py-6 mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Confirm Your Reservation
          </h1>
          <p className="text-muted-foreground">
            Please review your booking details below
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <UserDetailsCard user={user} onUpdate={setUser} />
          
          <BookingInfoCard booking={booking} />
          
          <NoShowPolicyCard />
          
          <PromotionsCarousel />
          
          <TermsCheckbox 
            checked={termsAccepted} 
            onCheckedChange={setTermsAccepted} 
          />
          
          {/* Continue Button */}
          <div className="sticky bottom-4 pt-4">
            <Button
              onClick={handleContinue}
              disabled={!termsAccepted}
              variant="elegant"
              size="lg"
              className="w-full py-4 text-base font-semibold"
            >
              {termsAccepted ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Continue to Payment
                </>
              ) : (
                <>
                  Accept Terms to Continue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default BookingConfirmation;