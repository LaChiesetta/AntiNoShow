// src/components/reservation/TermsAndContinue.tsx

'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';

interface TermsAndContinueProps {
  onContinue: () => void;
  termsText?: string;
  buttonText?: string;
  isLoading?: boolean;
}

const defaultTermsText = `I acknowledge that I have read and agree to the reservation policies listed above. 
I understand the cancellation and no-show policies.`;

export const TermsAndContinue = ({ 
  onContinue, 
  termsText = defaultTermsText,
  buttonText = "Confirm Reservation",
  isLoading = false
}: TermsAndContinueProps) => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleContinue = () => {
    if (acceptTerms && !isLoading) {
      onContinue();
    }
  };

  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          <Checkbox
            label={termsText}
            checked={acceptTerms}
            onCheckedChange={setAcceptTerms}
          />
          
          <Button
            onClick={handleContinue}
            disabled={!acceptTerms || isLoading}
            fullWidth
            size="lg"
          >
            {isLoading ? "Processing..." : buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};