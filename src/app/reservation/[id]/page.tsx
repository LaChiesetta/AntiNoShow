// src/app/reservation/[id]/page.tsx

import { ReservationReviewClient } from './ReservationReviewClient';
import { ReservationData } from '@/types/reservation';

interface ReservationReviewPageProps {
  params: Promise<{
    id: string;
  }>;
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

export default async function ReservationReviewPage({ params }: ReservationReviewPageProps) {
  const { id } = await params;
  
  // In a real app, fetch data based on id
  const data = mockReservationData;

  return <ReservationReviewClient reservationId={id} data={data} />;
}