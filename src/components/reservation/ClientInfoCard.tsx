// src/components/reservation/ClientInfoCard.tsx

import { User, Phone, Mail } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { ClientInfo } from '@/types/reservation';

interface ClientInfoCardProps {
  client: ClientInfo;
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoItem = ({ icon, label, value }: InfoItemProps) => (
  <div className="flex items-center space-x-3">
    <div className="text-white/70">
      {icon}
    </div>
    <div>
      <p className="text-white/70 text-sm">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
);

export const ClientInfoCard = ({ client }: ClientInfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle icon={<User className="w-6 h-6 text-white" />}>
          Guest Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoItem
            icon={<User className="w-5 h-5" />}
            label="Name"
            value={client.name}
          />
          <InfoItem
            icon={<Phone className="w-5 h-5" />}
            label="Phone"
            value={client.phone}
          />
          <InfoItem
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            value={client.email}
          />
        </div>
      </CardContent>
    </Card>
  );
};