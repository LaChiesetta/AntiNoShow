
import { Reservation } from '@/types';
import { Card, CardHeader, CardContent } from '../ui/card';
import { formatDate } from '@/lib/utils';

interface ReservationListProps {
  reservations: Reservation[];
  showHeader?: boolean;
}

export function ReservationList({ reservations, showHeader = true }: ReservationListProps) {
  const getStatusColor = (status: Reservation['status']) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  if (reservations.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <p className="text-gray-500">No reservations found</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      {showHeader && (
        <CardHeader>
          <h3 className="font-semibold text-gray-900">Recent Reservations</h3>
        </CardHeader>
      )}
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">
                  {reservation.customerName}
                </h4>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(reservation.status)}`}>
                  {reservation.status}
                </span>
              </div>
              
              <div className="text-sm text-gray-600 space-y-1">
                <p>{reservation.email}</p>
                <div className="flex items-center justify-between">
                  <span>{formatDate(reservation.date)} at {reservation.time}</span>
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
    </Card>
  );
}