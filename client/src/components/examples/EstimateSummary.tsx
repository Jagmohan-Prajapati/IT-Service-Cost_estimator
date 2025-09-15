import EstimateSummary from '../EstimateSummary';
import { useState } from 'react';
import type { EstimateItem, Currency } from '@shared/schema';

export default function EstimateSummaryExample() {
  const [estimateItems, setEstimateItems] = useState<EstimateItem[]>([
    {
      id: "est1",
      service: {
        id: "ITSC_00001",
        ServiceCategory: "ERP",
        SubService: "Core ERP Implementation",
        IndustryUseCase: "Retail",
        ProjectSize: "Small",
        DeliveryModel: "Offshore",
        Pricing: {
          PricingType: "Fixed Quotation",
          TotalEstimatedCostUSD: "$15,000 - $35,000",
          MilestoneBased: []
        },
        ToolingLicensingInfra: {},
        ComplianceCostsUSD: {},
        TechnologyStack: ["Odoo", "PostgreSQL"],
        RegionsServed: ["US", "UK"],
        ScopeInclusions: [],
        ScopeExclusions: [],
        ServiceDescription: "ERP implementation for retail",
        KeyFeatures: [],
        AddOns: [],
        Notes: "",
        TimelineWeeks: "8-12",
        EngagementModel: "Project-based",
        PaymentTerms: "40% upfront",
        RiskFactors: []
      },
      configuration: {
        serviceId: "ITSC_00001",
        projectSize: "Small",
        deliveryModel: "Offshore",
        selectedAddOns: [],
        customizations: {}
      },
      estimatedCost: 15000
    }
  ]);

  const handleRemoveItem = (itemId: string) => {
    setEstimateItems(items => items.filter(item => item.id !== itemId));
  };

  return (
    <div className="max-w-md">
      <EstimateSummary
        estimateItems={estimateItems}
        selectedCurrency="USD"
        currencyRate={1}
        onRemoveItem={handleRemoveItem}
        onExportEstimate={() => console.log('Export estimate')}
      />
    </div>
  );
}