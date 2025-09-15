import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Code, BarChart3, Palette, Settings, Monitor, Globe } from "lucide-react";
import type { ITService, Currency } from "@shared/schema";

interface ServiceCardProps {
  service: ITService;
  onConfigure: (service: ITService) => void;
  selectedCurrency: Currency;
  currencyRate: number;
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "development":
      return <Code className="h-5 w-5" />;
    case "marketing":
      return <Globe className="h-5 w-5" />;
    case "it services":
      return <Server className="h-5 w-5" />;
    case "analytics":
      return <BarChart3 className="h-5 w-5" />;
    case "design":
      return <Palette className="h-5 w-5" />;
    default:
      return <Settings className="h-5 w-5" />;
  }
};

const formatCurrency = (amount: number, currency: Currency, rate: number): string => {
  const convertedAmount = amount * rate;
  const symbols = { USD: '$', EUR: '€', GBP: '£', INR: '₹' };
  return `${symbols[currency]}${convertedAmount.toLocaleString(undefined, { 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0 
  })}`;
};

const getCostRange = (service: ITService, currency: Currency, rate: number): string => {
  const baseCost = service.baseCostUSD;
  const smallCost = baseCost * service.scaleMultipliers.Small;
  const largeCost = baseCost * service.scaleMultipliers.Large;
  
  return `${formatCurrency(smallCost, currency, rate)} - ${formatCurrency(largeCost, currency, rate)}`;
};

export default function ServiceCard({ service, onConfigure, selectedCurrency, currencyRate }: ServiceCardProps) {
  const handleConfigure = () => {
    console.log('Configure service triggered:', service.id);
    onConfigure(service);
  };

  return (
    <Card className="h-full hover-elevate transition-all duration-200" data-testid={`card-service-${service.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between space-x-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10">
              {getCategoryIcon(service.category)}
            </div>
            <div>
              <CardTitle className="text-lg leading-6" data-testid={`text-service-title-${service.id}`}>
                {service.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {service.category}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {service.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Price Range</p>
            <p className="text-lg font-semibold text-foreground" data-testid={`text-cost-${service.id}`}>
              {getCostRange(service, selectedCurrency, currencyRate)}
            </p>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium">Key Features:</p>
          <div className="flex flex-wrap gap-1">
            {service.keyFeatures.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {service.keyFeatures.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{service.keyFeatures.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        
        <Button 
          onClick={handleConfigure} 
          className="w-full"
          data-testid={`button-configure-${service.id}`}
        >
          Configure Service
        </Button>
      </CardContent>
    </Card>
  );
}