// src/components/reservation/EventsCard.tsx

'use client';

import { useState } from 'react';
import { Gift, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { Event } from '@/types/reservation';

interface EventsCardProps {
  events: Event[];
  initialExpanded?: boolean;
}

interface EventItemProps {
  event: Event;
}

const EventItem = ({ event }: EventItemProps) => (
  <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
    <div className="flex items-start space-x-4">
      <div className="text-3xl">{event.image}</div>
      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg">{event.title}</h3>
        <p className="text-white/70 text-sm mb-2">{event.date}</p>
        <p className="text-white/90">{event.description}</p>
      </div>
    </div>
  </div>
);

export const EventsCard = ({ events, initialExpanded = false }: EventsCardProps) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <Card>
      <CardHeader>
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleExpanded}
          role="button"
          aria-expanded={isExpanded}
          aria-controls="events-content"
        >
          <CardTitle icon={<Gift className="w-6 h-6 text-white" />}>
            Upcoming Events
          </CardTitle>
          <button
            type="button"
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label={isExpanded ? "Collapse events" : "Expand events"}
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-white/70" />
            ) : (
              <ChevronDown className="w-5 h-5 text-white/70" />
            )}
          </button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div id="events-content">
          {isExpanded ? (
            <div className="space-y-4">
              {events.map((event) => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-white/70 text-sm">
              Click to see {events.length} upcoming events and special offers
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};