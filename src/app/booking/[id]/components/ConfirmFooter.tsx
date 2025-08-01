'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils'; // optional classNames helper

type ConfirmFooterProps = {
  bookingId: string;
};

export const ConfirmFooter: React.FC<ConfirmFooterProps> = ({ bookingId }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleConfirm = async () => {
    if (!termsAccepted) return;

    setLoading(true);

    // simulate API call or route change
    setTimeout(() => {
      router.push(`/booking/${bookingId}/success`);
    }, 1200);
  };

  return (
    <footer className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 p-4 z-50">
      <div className="max-w-md mx-auto flex flex-col items-center gap-3">
        <label className="flex items-center text-sm text-gray-700">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mr-2 accent-blue-600"
          />
          I agree to the <a href="/terms" className="underline ml-1">terms and conditions</a>
        </label>

        <button
          onClick={handleConfirm}
          disabled={!termsAccepted || loading}
          className={cn(
            'w-full py-3 rounded-xl font-semibold transition text-white',
            termsAccepted
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-300 cursor-not-allowed'
          )}
        >
          {loading ? 'Processing...' : 'Confirm and Proceed'}
        </button>
      </div>
    </footer>
  );
};
