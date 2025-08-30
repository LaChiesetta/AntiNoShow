import { StatsCard } from '@/components/admin/dashboard/stats-card';
import { ReservationList } from '@/components/admin/dashboard/reservation-list';
import { mockStats, mockReservations } from '@/lib/mock-data';

export default function DashboardPage() {
  const recentReservations = mockReservations.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatsCard
            title="Total Reservations"
            value={mockStats.totalReservations}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Today's Bookings"
            value={mockStats.todayReservations}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Pending"
            value={mockStats.pendingReservations}
            subtitle="Awaiting confirmation"
          />
          <StatsCard
            title="Revenue"
            value={`$${mockStats.revenue.toLocaleString()}`}
            subtitle="This month"
            trend={{ value: 5, isPositive: true }}
          />
        </div>
      </div>

      <ReservationList 
        reservations={recentReservations}
        showHeader={true}
      />
    </div>
  );
}