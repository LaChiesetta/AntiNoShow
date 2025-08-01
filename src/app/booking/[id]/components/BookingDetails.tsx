// app/booking/[id]/components/BookingDetails.tsx

'use client';

import { FC } from 'react';
import {
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  StickyNoteIcon,
} from 'lucide-react'; // or any icon library you prefer

import type { BookingDetailsProps } from '@/types/components';

export const BookingDetails: FC<BookingDetailsProps> = ({details}) => {
  const formattedDate = new Date(details.date).toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-3">
      <h2 className="text-lg font-semibold text-gray-800">Booking Details</h2>

      <div className="flex items-center text-sm text-gray-700">
        <CalendarIcon className="w-4 h-4 mr-2 text-gray-500" />
        <span>{formattedDate}</span>
      </div>

      <div className="flex items-center text-sm text-gray-700">
        <ClockIcon className="w-4 h-4 mr-2 text-gray-500" />
        <span>{details.time}</span>
      </div>

      <div className="flex items-center text-sm text-gray-700">
        <UsersIcon className="w-4 h-4 mr-2 text-gray-500" />
        <span>{details.guests} {details.guests === 1 ? 'guest' : 'guests'}</span>
      </div>

      {details.notes && (
        <div className="flex items-start text-sm text-gray-700">
          <StickyNoteIcon className="w-4 h-4 mr-2 text-gray-500 mt-0.5" />
          <span className="whitespace-pre-line">{details.notes}</span>
        </div>
      )}
    </section>
  );
};
