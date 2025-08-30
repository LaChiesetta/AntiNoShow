'use client';

import { useState } from 'react';
import { ReservationCalendar } from '@/components/admin/dashboard/reservation-calendar';
import { mockReservations } from '@/lib/mock-data';
import { Reservation } from '@/types';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Confirmed', value: 'confirmed' },
  { label: 'Pending', value: 'pending' },
  { label: 'Cancelled', value: 'cancelled' },
];

export default function ReservationsPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredReservations = mockReservations.filter((reservation: Reservation) => {
    if (filter === 'all') return true;
    return reservation.status === filter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Reservations</h1>
        
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <ReservationCalendar
              showHeader={true} reservations={[]}      />
    </div>
  );
}
