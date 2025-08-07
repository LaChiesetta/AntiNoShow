// src/app/reservation/[id]/page.tsx

'use client';

import { useScrollHeader } from '@/hooks/useScrollHeader';
import { ReservationHeader } from '@/components/reservation/ReservationHeader';
import { ClientInfoCard } from '@/components/reservation/ClientInfoCard';
import { ReservationDetailsCard } from '@/components/reservation/ReservationDetailsCard';
import { ReservationPoliciesCard } from '@/components/reservation/ReservationPoliciesCard';
import { EventsCard } from '@/components/reservation/EventsCard';
import { TermsAndContinue } from '@/components/reservation/TermsAndContinue';
import { ReservationData } from '@/types/reservation';

interface ReservationReviewPageProps {
  params: {
    id: string;
  };
}

// Mock data - replace with actual data fetching
const mockReservationData: ReservationData = {
  reservation: {
    id: "RSV-2024-001234",
    restaurant: "Bella Vista",
    date: "March 15, 2024",
    time: "7:30 PM",
    guests: 4,
    specialRequests: "Window table preferred, celebrating anniversary",
    client: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@email.com"
    }
  },
  policies: [
    {
      title: "Cancellation Policy",
      description: "Reservations can be cancelled up to 24 hours before your booking time without charge."
    },
    {
      title: "No-Show Policy", 
      description: "No-shows or cancellations within 24 hours may incur a $25 per person charge."
    },
    {
      title: "Late Arrival",
      description: "Tables are held for 15 minutes past reservation time. Late arrivals may result in reduced dining time."
    },
    {
      title: "Party Size",
      description: "Any changes to party size must be made at least 2 hours in advance and are subject to availability."
    }
  ],
  events: [
    {
      id: "1",
      title: "Wine Tasting Night",
      date: "March 20, 2024",
      description: "Join us for an exclusive wine tasting featuring Italian selections",
      image: "🍷"
    },
    {
      id: "2",
      title: "Chef's Special Menu",
      date: "March 25, 2024",
      description: "Experience our seasonal menu with fresh spring ingredients",
      image: "👨‍🍳"
    }
  ]
};

export default function ReservationReviewPage({ params }: ReservationReviewPageProps) {
  const isScrolled = useScrollHeader();
  
  // In a real app, fetch data based on params.id
  const data = mockReservationData;

  const handleConfirmReservation = () => {
    console.log('Confirming reservation:', params.id);
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