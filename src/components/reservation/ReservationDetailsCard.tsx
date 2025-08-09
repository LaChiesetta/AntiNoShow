// src/components/reservation/ReservationDetailsCard.tsx

import { Calendar, Clock, Users, Info } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { ReservationDetails } from '@/types/reservation';

interface ReservationDetailsCardProps {
  reservation: ReservationDetails;
}

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const DetailItem = ({ icon, label, value }: DetailItemProps) => (
  <div className="flex items-center space-x-3">
    <div className="text-white/70">
      {icon}
    </div>
    <div>
      <p className="text-white/70 text-sm">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
);

export const ReservationDetailsCard = ({ reservation }: ReservationDetailsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle icon={<Calendar className="w-6 h-6 text-white" />}>
          Reservation Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <DetailItem
              icon={<Calendar className="w-5 h-5" />}
              label="Date"
              value={reservation.date}
            />
            <DetailItem
              icon={<Clock className="w-5 h-5" />}
              label="Time"
              value={reservation.time}
            />
            <DetailItem
              icon={<Users className="w-5 h-5" />}
              label="Number of Guests"
              value={`${reservation.guests} people`}
            />
          </div>
          {reservation.specialRequests && (
            <div>
              <div className="flex items-start space-x-3">
                <div className="text-white/70 mt-1">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Special Requests</p>
                  <p className="text-white font-medium">{reservation.specialRequests}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};