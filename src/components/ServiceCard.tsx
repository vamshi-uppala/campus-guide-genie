import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color = 'primary',
  onClick 
}) => {
  const colorClasses = {
    primary: 'hover:shadow-elevated border-primary/10 hover:border-primary/20',
    secondary: 'hover:shadow-card border-secondary/20 hover:border-secondary/30', 
    accent: 'hover:shadow-card border-accent/20 hover:border-accent/30'
  };

  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-card shadow-card ${colorClasses[color]}`}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${color === 'primary' ? 'bg-primary/10' : 'bg-secondary/50'}`}>
            <Icon className={`h-5 w-5 ${color === 'primary' ? 'text-primary' : 'text-secondary-foreground'}`} />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;