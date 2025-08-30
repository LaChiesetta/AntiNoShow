export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager';
}

export interface Reservation {
  id: string;
  customerName: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  table?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}