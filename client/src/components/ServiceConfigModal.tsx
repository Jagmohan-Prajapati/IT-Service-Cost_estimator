import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckSquare, Square, Clock, DollarSign, Users, Globe } from "lucide-react";
import type { ITService, ServiceConfiguration } from "@shared/schema";

interface ServiceConfigModalProps {
  service: ITService | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToEstimate: (service: ITService, config: ServiceConfiguration) => void;
}

export default function ServiceConfigModal({
  service,
  isOpen,
  onClose,
  onAddToEstimate
}: ServiceConfigModalProps) {
  const [selectedSize, setSelectedSize] = useState<"Small" | "Medium" | "Large">("Small");
  const [selectedDeliveryModel, setSelectedDeliveryModel] = useState<"Offshore" | "Onshore" | "Hybrid">("Offshore");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  if (!service) return null;

  const handleAddToEstimate = () => {
    const configuration: ServiceConfiguration = {
      serviceId: service.id,
      projectSize: selectedSize,
      deliveryModel: selectedDeliveryModel,
      selectedAddOns,
      customizations: {}
    };
    
    console.log('Add to estimate triggered:', service.id, configuration);
    onAddToEstimate(service, configuration);
    onClose();
  };

  const toggleAddOn = (addon: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addon) 
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };

  const getCostMultiplier = (deliveryModel: string): number => {
    switch (deliveryModel) {
      case "Offshore": return 0.65;
      case "Onshore": return 1.3;
      case "Hybrid": return 0.95;
      default: return 1;
    }
  };

  const getSizeMultiplier = (size: string): number => {
    switch (size) {
      case "Small": return 1;
      case "Medium": return 1.8;
      case "Large": return 3.2;
      default: return 1;
    }
  };

  // Mock add-ons since the data doesn't have them populated
  const mockAddOns = [
    { name: "Extended Support (12 months)", cost: 5000 },
    { name: "Data Migration Service", cost: 8000 },
    { name: "Custom Training Program", cost: 3000 },
    { name: "Performance Monitoring", cost: 2000 }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-service-config">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <span data-testid="text-modal-title">{service.SubService}</span>
            <Badge variant="secondary">{service.ServiceCategory}</Badge>
          </DialogTitle>
          <DialogDescription>
            Configure your service requirements and get a detailed cost estimate
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Service Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {service.ServiceDescription !== "Detailed description coming soon." 
                    ? service.ServiceDescription 
                    : `Comprehensive ${service.ServiceCategory} solution designed for ${service.IndustryUseCase} industry. This ${service.ProjectSize.toLowerCase()}-scale implementation includes all essential components for successful deployment.`
                  }
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.KeyFeatures.length > 0 && service.KeyFeatures[0] !== "Feature details coming soon." 
                      ? service.KeyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckSquare className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))
                      : ["Core Implementation", "System Integration", "User Training", "Documentation"].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckSquare className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.TechnologyStack.map((tech, index) => (
                      <Badge key={index} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="configuration" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedSize} onValueChange={(value: any) => setSelectedSize(value)}>
                    <div className="space-y-3">
                      {(["Small", "Medium", "Large"] as const).map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <RadioGroupItem value={size} id={size} data-testid={`radio-size-${size}`} />
                          <Label htmlFor={size} className="flex-1">
                            <div>
                              <span className="font-medium">{size}</span>
                              <p className="text-xs text-muted-foreground">
                                {size === "Small" && "Up to 50 users, basic features"}
                                {size === "Medium" && "50-200 users, advanced features"}
                                {size === "Large" && "200+ users, enterprise features"}
                              </p>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Model</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedDeliveryModel} onValueChange={(value: any) => setSelectedDeliveryModel(value)}>
                    <div className="space-y-3">
                      {(["Offshore", "Onshore", "Hybrid"] as const).map((model) => (
                        <div key={model} className="flex items-center space-x-2">
                          <RadioGroupItem value={model} id={model} data-testid={`radio-delivery-${model}`} />
                          <Label htmlFor={model} className="flex-1">
                            <div>
                              <span className="font-medium">{model}</span>
                              <p className="text-xs text-muted-foreground">
                                {model === "Offshore" && "Cost-effective, remote delivery"}
                                {model === "Onshore" && "Local team, premium pricing"}
                                {model === "Hybrid" && "Mixed approach, balanced cost"}
                              </p>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Add-On Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {mockAddOns.map((addon, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover-elevate"
                      onClick={() => toggleAddOn(addon.name)}
                      data-testid={`addon-${index}`}
                    >
                      <div className="flex items-center space-x-3">
                        {selectedAddOns.includes(addon.name) ? (
                          <CheckSquare className="h-5 w-5 text-primary" />
                        ) : (
                          <Square className="h-5 w-5 text-muted-foreground" />
                        )}
                        <div>
                          <span className="text-sm font-medium">{addon.name}</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium">${addon.cost.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span>Cost Breakdown</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Base Cost ({service.ProjectSize}):</span>
                    <span>{service.Pricing.TotalEstimatedCostUSD}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size Multiplier ({selectedSize}):</span>
                    <span>{getSizeMultiplier(selectedSize)}x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Model ({selectedDeliveryModel}):</span>
                    <span>{getCostMultiplier(selectedDeliveryModel)}x</span>
                  </div>
                  {selectedAddOns.length > 0 && (
                    <div className="flex justify-between">
                      <span>Add-ons:</span>
                      <span>
                        ${mockAddOns
                          .filter(addon => selectedAddOns.includes(addon.name))
                          .reduce((sum, addon) => sum + addon.cost, 0)
                          .toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Estimated Total:</span>
                  <span className="text-primary" data-testid="text-estimated-total">
                    Contact for detailed quote
                  </span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Timeline & Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium">Timeline: </span>
                    <span>{service.TimelineWeeks} weeks</span>
                  </div>
                  <div>
                    <span className="font-medium">Engagement Model: </span>
                    <span>{service.EngagementModel}</span>
                  </div>
                  <div>
                    <span className="font-medium">Payment Terms: </span>
                    <span>{service.PaymentTerms}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Scope</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h5 className="font-medium text-green-700">Included:</h5>
                    <ul className="text-sm text-muted-foreground ml-2">
                      {service.ScopeInclusions.slice(0, 3).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700">Excluded:</h5>
                    <ul className="text-sm text-muted-foreground ml-2">
                      {service.ScopeExclusions.slice(0, 2).map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline" onClick={onClose} data-testid="button-cancel">
            Cancel
          </Button>
          <Button onClick={handleAddToEstimate} data-testid="button-add-to-estimate">
            Add to Estimate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}