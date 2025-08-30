// src/components/reservation/ReservationPoliciesCard.tsx

import { Info } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { ReservationPolicy } from '@/types/reservation';

interface ReservationPoliciesCardProps {
  policies: ReservationPolicy[];
}

interface PolicyItemProps {
  policy: ReservationPolicy;
}

const PolicyItem = ({ policy }: PolicyItemProps) => (
  <div className="flex items-start space-x-3">
    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
    <p className="text-white/90">
      <strong>{policy.title}:</strong> {policy.description}
    </p>
  </div>
);

export const ReservationPoliciesCard = ({ policies }: ReservationPoliciesCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle icon={<Info className="w-6 h-6 text-white" />}>
          Reservation Policies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {policies.map((policy, index) => (
            <PolicyItem key={index} policy={policy} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};