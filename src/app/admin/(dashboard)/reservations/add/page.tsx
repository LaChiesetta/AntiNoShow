'use client';

import { AddReservationForm } from '@/components/admin/reservations/add-reservation-form';
import { Reservation } from '@/types';

export default function AddReservationPage() {
  const handleAddReservation = (reservation: Omit<Reservation, 'id'>) => {
    // In a real app, this would make an API call
    console.log('New reservation:', reservation);
    
    // For now, just log it. In production, you'd:
    // 1. Send to your API
    // 2. Update your global state/cache
    // 3. Show success message
    alert('Reservation added successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-900">Add Reservation</h1>
      </div>

      <AddReservationForm onSubmit={handleAddReservation} />
    </div>
  );
}