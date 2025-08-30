// src/app/reservation/[id]/ReservationReviewClient.tsx

'use client';

import { useScrollHeader } from '@/hooks/useScrollHeader';
import { ReservationHeader } from '@/components/reservation/ReservationHeader';
import { ClientInfoCard } from '@/components/reservation/ClientInfoCard';
import { ReservationDetailsCard } from '@/components/reservation/ReservationDetailsCard';
import { ReservationPoliciesCard } from '@/components/reservation/ReservationPoliciesCard';
import { EventsCard } from '@/components/reservation/EventsCard';
import { TermsAndContinue } from '@/components/reservation/TermsAndContinue';
import { ReservationData } from '@/types/reservation';

interface ReservationReviewClientProps {
  reservationId: string;
  data: ReservationData;
}

export function ReservationReviewClient({ reservationId, data }: ReservationReviewClientProps) {
  const isScrolled = useScrollHeader();

  const handleConfirmReservation = () => {
    console.log('Confirming reservation:', reservationId);
    // Handle reservation confirmation
    alert('Reservation confirmed!');
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1920 1080\"><defs><linearGradient id=\"bg\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:%23667eea;stop-opacity:1\" /><stop offset=\"100%\" style=\"stop-color:%23764ba2;stop-opacity:1\" /></linearGradient></defs><rect width=\"1920\" height=\"1080\" fill=\"url(%23bg)\"/><circle cx=\"400\" cy=\"200\" r=\"300\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"1500\" cy=\"800\" r=\"400\" fill=\"%23ffffff\" opacity=\"0.08\"/><circle cx=\"800\" cy=\"600\" r=\"200\" fill=\"%23ffffff\" opacity=\"0.12\"/></svg>')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Header */}
      <ReservationHeader reservation={data.reservation} />

      {/* Main Content */}
      <main 
        className="relative z-10 pb-8" 
        style={{ paddingTop: isScrolled ? '100px' : '140px' }}
      >
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <ClientInfoCard client={data.reservation.client} />
          
          <ReservationDetailsCard reservation={data.reservation} />
          
          <ReservationPoliciesCard policies={data.policies} />
          
          <EventsCard events={data.events} initialExpanded={false} />
          
          <TermsAndContinue onContinue={handleConfirmReservation} />
        </div>
      </main>
    </div>
  );
}