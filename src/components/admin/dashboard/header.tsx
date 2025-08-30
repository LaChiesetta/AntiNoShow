'use client';

import { useAuth } from '@/hooks/use-auth';
import { Button } from '../ui/button';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Admin Panel</h1>
          <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
        </div>
        
        <Button variant="ghost" size="sm" onClick={logout}>
          Sign Out
        </Button>
      </div>
    </header>
  );
}