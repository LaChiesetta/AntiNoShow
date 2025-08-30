// src/types/reservation.ts

export interface ClientInfo {
  name: string;
  phone: string;
  email: string;
}

export interface ReservationDetails {
  id: string;
  restaurant: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  client: ClientInfo;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface ReservationPolicy {
  title: string;
  description: string;
}

export interface ReservationData {
  reservation: ReservationDetails;
  policies: ReservationPolicy[];
  events: Event[];
}