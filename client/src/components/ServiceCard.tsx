import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Code, BarChart3, Palette, Settings } from "lucide-react";
import type { ITService } from "@shared/schema";

interface ServiceCardProps {
  service: ITService;
  onConfigure: (service: ITService) => void;
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "erp":
      return <Server className="h-5 w-5" />;
    case "development":
      return <Code className="h-5 w-5" />;
    case "analytics":
      return <BarChart3 className="h-5 w-5" />;
    case "design":
      return <Palette className="h-5 w-5" />;
    default:
      return <Settings className="h-5 w-5" />;
  }
};

const getDeliveryModelColor = (model: string) => {
  switch (model) {
    case "Offshore":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Onshore":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "Hybrid":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export default function ServiceCard({ service, onConfigure }: ServiceCardProps) {
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
              {getCategoryIcon(service.ServiceCategory)}
            </div>
            <div>
              <CardTitle className="text-lg leading-6" data-testid={`text-service-title-${service.id}`}>
                {service.SubService}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {service.ServiceCategory}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className={getDeliveryModelColor(service.DeliveryModel)}>
            {service.DeliveryModel}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {service.ServiceDescription !== "Detailed description coming soon." 
              ? service.ServiceDescription 
              : `${service.ServiceCategory} solution for ${service.IndustryUseCase} industry with ${service.ProjectSize.toLowerCase()} scale implementation.`
            }
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Estimated Cost</p>
            <p className="text-lg font-semibold text-foreground" data-testid={`text-cost-${service.id}`}>
              {service.Pricing.TotalEstimatedCostUSD}
            </p>
          </div>
          <Badge variant="outline">{service.ProjectSize}</Badge>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {service.TechnologyStack.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {service.TechnologyStack.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{service.TechnologyStack.length - 3} more
            </Badge>
          )}
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