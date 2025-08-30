'use client';

import { Reservation } from '@/types';
import { useState, useMemo } from 'react';
import Calendar from 'react-calendar';
import { Card, CardHeader, CardContent } from '@/components/admin/ui/card';
import { cn } from '@/lib/utils';
import 'react-calendar/dist/Calendar.css';

interface ReservationCalendarProps {
  reservations: Reservation[];
  showHeader?: boolean;
  onDateSelect?: (date: Date, dayReservations: Reservation[]) => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export function ReservationCalendar({ 
  reservations, 
  showHeader = true,
  onDateSelect 
}: ReservationCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  // Group reservations by date for easy lookup
  const reservationsByDate = useMemo(() => {
    const grouped = new Map<string, Reservation[]>();
    
    reservations.forEach(reservation => {
      const dateKey = new Date(reservation.date).toDateString();
      if (!grouped.has(dateKey)) {
        grouped.set(dateKey, []);
      }
      grouped.get(dateKey)!.push(reservation);
    });
    
    return grouped;
  }, [reservations]);

  // Get reservations for selected date
  const selectedDateReservations = useMemo(() => {
    if (!selectedDate || Array.isArray(selectedDate)) return [];
    const dateKey = selectedDate.toDateString();
    return reservationsByDate.get(dateKey) || [];
  }, [selectedDate, reservationsByDate]);

  const handleDateChange = (value: Value) => {
    setSelectedDate(value);
    
    if (value && !Array.isArray(value) && onDateSelect) {
      const dateKey = value.toDateString();
      const dayReservations = reservationsByDate.get(dateKey) || [];
      onDateSelect(value, dayReservations);
    }
  };

  // Custom tile content to show reservation indicators
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;
    
    const dateKey = date.toDateString();
    const dayReservations = reservationsByDate.get(dateKey);
    
    if (!dayReservations || dayReservations.length === 0) return null;
    
    const confirmedCount = dayReservations.filter(r => r.status === 'confirmed').length;
    const pendingCount = dayReservations.filter(r => r.status === 'pending').length;
    
    return (
      <div className="flex justify-center mt-1">
        <div className="flex space-x-1">
          {confirmedCount > 0 && (
            <div className="w-2 h-2 bg-green-500 rounded-full" title={`${confirmedCount} confirmed`} />
          )}
          {pendingCount > 0 && (
            <div className="w-2 h-2 bg-yellow-500 rounded-full" title={`${pendingCount} pending`} />
          )}
        </div>
      </div>
    );
  };

  // Custom tile class name for styling
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return '';
    
    const dateKey = date.toDateString();
    const dayReservations = reservationsByDate.get(dateKey);
    
    if (!dayReservations || dayReservations.length === 0) return '';
    
    return 'has-reservations';
  };

  const formatSelectedDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        {showHeader && (
          <CardHeader>
            <h3 className="font-semibold text-gray-900">Reservations Calendar</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Confirmed</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span>Pending</span>
              </div>
            </div>
          </CardHeader>
        )}
        <CardContent>
          <div className="reservation-calendar">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={tileContent}
              tileClassName={tileClassName}
              className="w-full"
              locale="en-US"
              minDetail="month"
              prev2Label={null}
              next2Label={null}
              showNeighboringMonth={false}
            />
          </div>
        </CardContent>
      </Card>

      {/* Selected Date Details */}
      {selectedDate && !Array.isArray(selectedDate) && (
        <Card>
          <CardHeader>
            <h4 className="font-medium text-gray-900">
              {formatSelectedDate(selectedDate)}
            </h4>
            <p className="text-sm text-gray-600">
              {selectedDateReservations.length} reservation{selectedDateReservations.length !== 1 ? 's' : ''}
            </p>
          </CardHeader>
          {selectedDateReservations.length > 0 && (
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200">
                {selectedDateReservations.map((reservation) => (
                  <div key={reservation.id} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-gray-900">
                        {reservation.customerName}
                      </h5>
                      <span className={cn(
                        'px-2 py-1 text-xs font-medium rounded-full',
                        reservation.status === 'confirmed' && 'text-green-600 bg-green-50',
                        reservation.status === 'pending' && 'text-yellow-600 bg-yellow-50',
                        reservation.status === 'cancelled' && 'text-red-600 bg-red-50'
                      )}>
                        {reservation.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>{reservation.time}</span>
                        <span>{reservation.guests} guests</span>
                      </div>
                      {reservation.table && (
                        <p className="text-blue-600">{reservation.table}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      )}

      <style jsx global>{`
        .reservation-calendar {
          /* Mobile-first responsive calendar */
        }
        
        .reservation-calendar .react-calendar {
          width: 100%;
          background: transparent;
          border: none;
          font-family: inherit;
          line-height: 1.125em;
        }
        
        .reservation-calendar .react-calendar--selectRange .react-calendar__tile--hover {
          background-color: #f3f4f6;
        }
        
        .reservation-calendar .react-calendar__tile {
          max-width: 100%;
          padding: 0.75rem 0.25rem;
          background: transparent;
          text-align: center;
          line-height: 1.5;
          font-size: 0.875rem;
          border-radius: 0.375rem;
          border: none;
          transition: all 0.2s;
          position: relative;
          min-height: 3rem;
        }
        
        .reservation-calendar .react-calendar__tile:enabled:hover,
        .reservation-calendar .react-calendar__tile:enabled:focus {
          background-color: #f3f4f6;
        }
        
        .reservation-calendar .react-calendar__tile--now {
          background: #dbeafe;
          color: #1d4ed8;
          font-weight: 500;
        }
        
        .reservation-calendar .react-calendar__tile--active {
          background: #3b82f6 !important;
          color: white;
          font-weight: 600;
        }
        
        .reservation-calendar .react-calendar__tile.has-reservations {
          font-weight: 500;
        }
        
        .reservation-calendar .react-calendar__navigation {
          display: flex;
          height: 2.75rem;
          margin-bottom: 1rem;
        }
        
        .reservation-calendar .react-calendar__navigation button {
          min-width: 2.75rem;
          background: transparent;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          transition: all 0.2s;
        }
        
        .reservation-calendar .react-calendar__navigation button:enabled:hover,
        .reservation-calendar .react-calendar__navigation button:enabled:focus {
          background-color: #f3f4f6;
          border-color: #d1d5db;
        }
        
        .reservation-calendar .react-calendar__navigation button:disabled {
          background-color: #f9fafb;
          color: #9ca3af;
        }
        
        .reservation-calendar .react-calendar__navigation__label {
          flex-grow: 1;
          font-weight: 600;
          color: #111827;
        }
        
        .reservation-calendar .react-calendar__navigation__arrow {
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: 2.75rem;
        }
        
        .reservation-calendar .react-calendar__month-view__weekdays {
          text-align: center;
          text-transform: uppercase;
          font-weight: 500;
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }
        
        .reservation-calendar .react-calendar__month-view__weekdays__weekday {
          padding: 0.5rem;
        }
        
        .reservation-calendar .react-calendar__month-view__days__day--weekend {
          color: #ef4444;
        }
        
        .reservation-calendar .react-calendar__month-view__days__day--neighboringMonth {
          color: #9ca3af;
        }
        
        .reservation-calendar .react-calendar__tile:disabled {
          background-color: #f9fafb;
          color: #d1d5db;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .reservation-calendar .react-calendar__tile {
            padding: 0.5rem 0.125rem;
            font-size: 0.75rem;
            min-height: 2.5rem;
          }
          
          .reservation-calendar .react-calendar__navigation {
            height: 2.5rem;
            margin-bottom: 0.75rem;
          }
          
          .reservation-calendar .react-calendar__navigation button {
            min-width: 2.5rem;
            font-size: 0.75rem;
          }
          
          .reservation-calendar .react-calendar__month-view__weekdays__weekday {
            padding: 0.25rem;
            font-size: 0.625rem;
          }
        }
      `}</style>
    </div>
  );
}