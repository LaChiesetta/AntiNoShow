// app/booking/[id]/components/UserInfo.tsx

'use client';

import { FC } from 'react';
import type { UserInfoProps } from '@/types/components';

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
  return (
    <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">Your Information</h2>

      <div className="text-sm text-gray-600">
        <div className="flex justify-between">
          <span className="font-medium">Name</span>
          <span>{user.name}</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="font-medium">Email</span>
          <span>{user.email}</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="font-medium">Phone</span>
          <span>{user.phone}</span>
        </div>
      </div>
    </section>
  );
};