import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trash2, Download, Calculator } from "lucide-react";
import type { EstimateItem, Currency } from "@shared/schema";

interface EstimateSummaryProps {
  estimateItems: EstimateItem[];
  selectedCurrency: Currency;
  currencyRate: number;
  onRemoveItem: (itemId: string) => void;
  onExportEstimate: () => void;
}

const formatCurrency = (amount: number, currency: Currency, rate: number): string => {
  const convertedAmount = amount * rate;
  const symbols = { USD: '$', EUR: '€', GBP: '£', INR: '₹' };
  return `${symbols[currency]}${convertedAmount.toLocaleString(undefined, { 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0 
  })}`;
};

const calculateServiceCost = (item: EstimateItem): number => {
  const baseCost = item.service.baseCostUSD * item.service.scaleMultipliers[item.configuration.projectSize];
  const addOnsCost = item.service.addOns
    .filter(addon => item.configuration.selectedAddOns.includes(addon.name))
    .reduce((sum, addon) => sum + addon.costUSD, 0);
  
  return baseCost + addOnsCost;
};

export default function EstimateSummary({
  estimateItems,
  selectedCurrency,
  currencyRate,
  onRemoveItem,
  onExportEstimate
}: EstimateSummaryProps) {
  const subtotal = estimateItems.reduce((sum, item) => {
    return sum + calculateServiceCost(item);
  }, 0);

  const taxAmount = subtotal * 0.18; // 18% tax
  const totalCost = subtotal + taxAmount;

  const handleRemoveItem = (itemId: string) => {
    console.log('Remove item triggered:', itemId);
    onRemoveItem(itemId);
  };

  const handleExportEstimate = () => {
    console.log('Export estimate triggered');
    onExportEstimate();
  };

  return (
    <Card className="h-full" id="estimate-summary">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center space-x-2">
          <Calculator className="h-5 w-5 text-primary" />
          <CardTitle data-testid="text-estimate-title">Cost Estimate</CardTitle>
        </div>
        <Badge variant="secondary" data-testid="text-item-count">
          {estimateItems.length} {estimateItems.length === 1 ? 'service' : 'services'}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        {estimateItems.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-muted-foreground mb-2">
              <Calculator className="h-12 w-12 mx-auto mb-3 opacity-50" />
            </div>
            <p className="text-sm text-muted-foreground">
              No services selected yet. Configure services from the catalog to build your estimate.
            </p>
          </div>
        ) : (
          <>
            {/* Estimate Items */}
            <div className="space-y-3">
              {estimateItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-3 space-y-2" data-testid={`estimate-item-${item.id}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.service.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.service.category}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-destructive hover:text-destructive"
                      data-testid={`button-remove-${item.id}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex space-x-2">
                      <Badge variant="outline">{item.configuration.projectSize}</Badge>
                      {item.configuration.selectedAddOns.length > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          +{item.configuration.selectedAddOns.length} add-ons
                        </Badge>
                      )}
                    </div>
                    <span className="font-medium" data-testid={`cost-${item.id}`}>
                      {formatCurrency(calculateServiceCost(item), selectedCurrency, currencyRate)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Total */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal:</span>
                <span data-testid="text-subtotal">
                  {formatCurrency(subtotal, selectedCurrency, currencyRate)}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tax (18%):</span>
                <span data-testid="text-tax">
                  {formatCurrency(taxAmount, selectedCurrency, currencyRate)}
                </span>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total Estimate:</span>
                <span className="text-primary" data-testid="text-total">
                  {formatCurrency(totalCost, selectedCurrency, currencyRate)}
                </span>
              </div>
              
              <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                <strong>Note:</strong> The total price can be negotiated up to 15%
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-4">
              <Button 
                onClick={handleExportEstimate} 
                className="w-full"
                data-testid="button-export"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Estimate
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Final pricing may vary based on detailed requirements and scope changes.
              </p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}