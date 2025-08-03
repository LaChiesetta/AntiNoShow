import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Music, Utensils, Star } from "lucide-react";

interface Promotion {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "happy-hour" | "live-music" | "special-menu" | "event";
  icon: string;
}

const promotions: Promotion[] = [
  {
    id: "1",
    title: "Happy Hour",
    description: "50% off cocktails and appetizers",
    time: "5:00 PM - 7:00 PM",
    type: "happy-hour",
    icon: "🍸"
  },
  {
    id: "2",
    title: "Live Jazz Night",
    description: "Enjoy smooth jazz with dinner",
    time: "8:00 PM - 11:00 PM",
    type: "live-music",
    icon: "🎷"
  },
  {
    id: "3",
    title: "Chef's Special",
    description: "Seasonal tasting menu available",
    time: "Available all evening",
    type: "special-menu",
    icon: "👨‍🍳"
  },
  {
    id: "4",
    title: "Wine Pairing",
    description: "Expert sommelier selections",
    time: "6:00 PM - 10:00 PM",
    type: "event",
    icon: "🍷"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "happy-hour": return Clock;
    case "live-music": return Music;
    case "special-menu": return Utensils;
    case "event": return Star;
    default: return Clock;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "happy-hour": return "bg-accent text-accent-foreground";
    case "live-music": return "bg-terracotta text-white";
    case "special-menu": return "bg-sage text-warm-brown";
    case "event": return "bg-gold text-warm-brown";
    default: return "bg-muted text-muted-foreground";
  }
};

export const PromotionsCarousel = () => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Star className="w-5 h-5 text-gold" />
        Tonights Specials
      </h3>
      
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {promotions.map((promotion, index) => {
          const Icon = getTypeIcon(promotion.type);
          
          return (
            <Card 
              key={promotion.id} 
              className="min-w-[280px] bg-card shadow-card border-border/50 snap-start animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{promotion.icon}</span>
                    <Badge className={getTypeColor(promotion.type)}>
                      <Icon className="w-3 h-3 mr-1" />
                      {promotion.type.replace("-", " ")}
                    </Badge>
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{promotion.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{promotion.description}</p>
                
                <div className="flex items-center gap-2 text-xs text-terracotta font-medium">
                  <Clock className="w-3 h-3" />
                  {promotion.time}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};