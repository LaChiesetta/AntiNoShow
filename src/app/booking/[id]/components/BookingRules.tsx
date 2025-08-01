'use client';

import { useState } from 'react';
import { Info, Clock, Shield } from 'lucide-react';

const rules = [
  {
    icon: <Clock className="h-4 w-4 text-blue-500" />,
    text: 'Please arrive within 15 minutes of your reserved time.',
  },
  {
    icon: <Shield className="h-4 w-4 text-yellow-500" />,
    text: 'Cancellations allowed up to 3 hours before your booking.',
  },
  {
    icon: <Info className="h-4 w-4 text-red-500" />,
    text: 'No-shows may result in a charge as per our policy.',
  },
];

export function BookingRules() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Booking Rules</h2>

      <ul className="space-y-3 text-sm text-gray-700">
        {rules.slice(0, expanded ? rules.length : 2).map((rule, index) => (
          <li key={index} className="flex items-start gap-3">
            <span>{rule.icon}</span>
            <p className="leading-snug">{rule.text}</p>
          </li>
        ))}
      </ul>

      {rules.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-sm text-blue-600 hover:underline"
        >
          {expanded ? 'Show less' : 'Read all rules'}
        </button>
      )}
    </section>
  );
}
