import { Reservation } from '@/types';

export const mockReservations: Reservation[] = [
  {
    id: '1',
    customerName: 'John Doe',
    email: 'john@example.com',
    date: '2024-08-31',
    time: '19:00',
    guests: 4,
    status: 'confirmed',
    table: 'Table 5',
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    email: 'jane@example.com',
    date: '2024-08-31',
    time: '20:30',
    guests: 2,
    status: 'pending',
  },
  {
    id: '3',
    customerName: 'Mike Johnson',
    email: 'mike@example.com',
    date: '2024-09-01',
    time: '18:00',
    guests: 6,
    status: 'confirmed',
    table: 'Table 12',
  },
];

export const mockStats = {
  totalReservations: 156,
  todayReservations: 12,
  pendingReservations: 8,
  revenue: 4200,
};