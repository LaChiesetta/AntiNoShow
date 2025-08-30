'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/admin/ui/button';
import { Input } from '@/components/admin/ui/input';
import { Card, CardHeader, CardContent } from '@/components/admin/ui/card';
import { Reservation } from '@/types';

interface AddReservationFormProps {
  onSubmit: (reservation: Omit<Reservation, 'id'>) => void;
}

export function AddReservationForm({ onSubmit }: AddReservationFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    table: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }
    
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    
    if (formData.guests < 1 || formData.guests > 20) {
      newErrors.guests = 'Guests must be between 1 and 20';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newReservation: Omit<Reservation, 'id'> = {
        ...formData,
        status: 'pending',
        table: formData.table || undefined,
      };
      
      onSubmit(newReservation);
      
      // Redirect back to reservations list
      router.push('/admin//reservations');
    } catch (error) {
      console.error('Failed to add reservation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Generate time slots (restaurant hours: 17:00 - 23:30)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 17; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 23 && minute > 30) break;
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold text-gray-900">New Reservation</h2>
        <p className="text-sm text-gray-600">Fill in the details for the new reservation</p>
      </CardHeader>
      <CardContent>
        <div onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Customer Name"
            value={formData.customerName}
            onChange={(e) => handleInputChange('customerName', e.target.value)}
            placeholder="John Doe"
            error={errors.customerName}
            required
          />
          
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="john@example.com"
            error={errors.email}
            required
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              error={errors.date}
              required
            />
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Time *
              </label>
              <select
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              >
                <option value="">Select time</option>
                {generateTimeSlots().map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              {errors.time && (
                <p className="text-sm text-red-600">{errors.time}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Number of Guests"
              type="number"
              min="1"
              max="20"
              value={formData.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value) || 1)}
              error={errors.guests}
              required
            />
            
            <Input
              label="Table (Optional)"
              value={formData.table}
              onChange={(e) => handleInputChange('table', e.target.value)}
              placeholder="Table 5"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              variant="secondary"
              onClick={() => router.back()}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              isLoading={isLoading}
              className="flex-1"
            >
              Add Reservation
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}