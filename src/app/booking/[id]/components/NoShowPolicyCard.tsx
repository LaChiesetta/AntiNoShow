import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ChevronDown, ChevronUp, CreditCard, Clock, AlertCircle } from "lucide-react";

export const NoShowPolicyCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full bg-card shadow-card border-border/50 animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Shield className="w-5 h-5 text-terracotta" />
            No-Show Policy
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-terracotta hover:text-terracotta/80 hover:bg-terracotta/10"
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 rounded-lg bg-gradient-warm border-l-4 border-terracotta">
          <div className="flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-terracotta mt-0.5" />
            <div>
              <p className="font-medium text-sm mb-1">Credit Card Required</p>
              <p className="text-sm text-muted-foreground">
                A valid credit card is required to secure your reservation.
              </p>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-4 animate-accordion-down">
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-5 h-5 text-terracotta mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-1">Cancellation Policy</p>
                  <p className="text-sm text-muted-foreground">
                    Cancellations must be made at least 24 hours in advance to avoid charges.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/30">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-1">No-Show Fee</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Failure to arrive or late cancellation will result in a $25 per person charge.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Late arrivals beyond 15 minutes may result in table forfeiture during peak hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};