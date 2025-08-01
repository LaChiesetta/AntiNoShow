// app/booking/[id]/page.tsx

import { BookingDetails } from './components/BookingDetails';
import { UserInfo } from './components/UserInfo';
import { BookingRules } from './components/BookingRules';
import { TermsAgreement } from './components/TermsAgreement';
import { ConfirmFooter } from './components/ConfirmFooter';

import type { User, BookingDetailsProps } from '@/types/components';

import { notFound } from 'next/navigation';

const user: User = {
    name: "paolo",
    email:"email@email.com",
    phone: "344343434"
};

//export default async function BookingPage({ params }: BookingPageProps) {
export default async function BookingPage() {
  const booking: BookingDetailsProps = {
    details: {
    date: new Date("01/01/2025").toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),         
    time: "10:00",    
    guests: 2,
  },
  id: "222",
  user: user
}//;await getBookingById(params.id);

  if (!booking) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 py-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">Review Your Booking</h1>

      <div className="space-y-6 w-full">
        <UserInfo user={booking.user} />
        <BookingDetails details={booking} />
        <BookingRules />
        <TermsAgreement />
      </div>

      <ConfirmFooter bookingId={booking.id}/>
    </main>
  );
}