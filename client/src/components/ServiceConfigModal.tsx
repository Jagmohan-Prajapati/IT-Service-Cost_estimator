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
import type { ITService, ServiceConfiguration, Currency } from "@shared/schema";

interface ServiceConfigModalProps {
  service: ITService | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToEstimate: (service: ITService, config: ServiceConfiguration) => void;
  selectedCurrency: Currency;
  currencyRate: number;
}

export default function ServiceConfigModal({
  service,
  isOpen,
  onClose,
  onAddToEstimate,
  selectedCurrency,
  currencyRate
}: ServiceConfigModalProps) {
  const [selectedSize, setSelectedSize] = useState<"Small" | "Medium" | "Large">("Small");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  if (!service) return null;

  const handleAddToEstimate = () => {
    const configuration: ServiceConfiguration = {
      serviceId: service.id,
      projectSize: selectedSize,
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

  const formatCurrency = (amount: number): string => {
    const convertedAmount = amount * currencyRate;
    const symbols = { USD: '$', EUR: '€', GBP: '£', INR: '₹' };
    return `${symbols[selectedCurrency]}${convertedAmount.toLocaleString(undefined, { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    })}`;
  };

  const calculateEstimatedCost = (): string => {
    const baseCost = service.baseCostUSD * service.scaleMultipliers[selectedSize];
    const addOnsCost = service.addOns
      .filter(addon => selectedAddOns.includes(addon.name))
      .reduce((sum, addon) => sum + addon.costUSD, 0);
    
    const totalCost = baseCost + addOnsCost;
    return formatCurrency(totalCost);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-service-config">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <span data-testid="text-modal-title">{service.name}</span>
            <Badge variant="secondary">{service.category}</Badge>
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
                  {service.detailedDescription}
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckSquare className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
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
                              <span className="font-medium">{size} ({service.scaleMultipliers[size]}x)</span>
                              <p className="text-xs text-muted-foreground">
                                {service.scaleDetails[size]}
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
                  {service.addOns.map((addon, index) => (
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
                        <div className="flex-1">
                          <span className="text-sm font-medium">{addon.name}</span>
                          <p className="text-xs text-muted-foreground mt-1">{addon.description}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium">{formatCurrency(addon.costUSD)}</span>
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
                    <span>Base Cost:</span>
                    <span>{formatCurrency(service.baseCostUSD)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size Multiplier ({selectedSize}):</span>
                    <span>{service.scaleMultipliers[selectedSize]}x</span>
                  </div>
                  {selectedAddOns.length > 0 && (
                    <div className="flex justify-between">
                      <span>Add-ons:</span>
                      <span>
                        {formatCurrency(service.addOns
                          .filter(addon => selectedAddOns.includes(addon.name))
                          .reduce((sum, addon) => sum + addon.costUSD, 0))}
                      </span>
                    </div>
                  )}
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Estimated Total:</span>
                  <span className="text-primary" data-testid="text-estimated-total">
                    {calculateEstimatedCost()}
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
                    <span className="font-medium">Monthly Maintenance: </span>
                    <span>{formatCurrency(service.monthlyMaintenance[selectedSize])}</span>
                  </div>
                  <div>
                    <span className="font-medium">Scale Details: </span>
                    <span>{service.scaleDetails[selectedSize]}</span>
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
                    <h5 className="font-medium text-green-700">Key Features:</h5>
                    <ul className="text-sm text-muted-foreground ml-2">
                      {service.keyFeatures.slice(0, 4).map((item, index) => (
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