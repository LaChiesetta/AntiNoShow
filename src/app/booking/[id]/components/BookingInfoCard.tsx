import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, MessageCircle } from "lucide-react";

interface BookingInfo {
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

interface BookingInfoCardProps {
  booking: BookingInfo;
}

export const BookingInfoCard = ({ booking }: BookingInfoCardProps) => {
  return (
    <Card className="w-full bg-card shadow-card border-border/50 animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Calendar className="w-5 h-5 text-terracotta" />
          Booking Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-warm">
            <Calendar className="w-5 h-5 text-terracotta" />
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-semibold">{booking.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-warm">
            <Clock className="w-5 h-5 text-terracotta" />
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-semibold">{booking.time}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-warm">
          <Users className="w-5 h-5 text-terracotta" />
          <div>
            <p className="text-sm text-muted-foreground">Guests</p>
            <p className="font-semibold">{booking.guests} {booking.guests === 1 ? 'person' : 'people'}</p>
          </div>
        </div>

        {booking.specialRequests && (
          <div className="flex gap-3 p-4 rounded-lg bg-gradient-warm">
            <MessageCircle className="w-5 h-5 text-terracotta mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Special Requests</p>
              <p className="text-sm leading-relaxed">{booking.specialRequests}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};