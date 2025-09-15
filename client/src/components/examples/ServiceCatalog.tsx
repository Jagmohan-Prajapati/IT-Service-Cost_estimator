import ServiceCatalog from '../ServiceCatalog';
import type { ITService } from '@shared/schema';

export default function ServiceCatalogExample() {
  const mockServices: ITService[] = [
    {
      id: "ITSC_00001",
      ServiceCategory: "ERP",
      SubService: "Core ERP Implementation",
      IndustryUseCase: "Retail",
      ProjectSize: "Small",
      DeliveryModel: "Offshore",
      Pricing: {
        PricingType: "Fixed Quotation",
        TotalEstimatedCostUSD: "$10,000 - $50,000",
        MilestoneBased: []
      },
      ToolingLicensingInfra: {},
      ComplianceCostsUSD: {},
      TechnologyStack: ["Odoo", "PostgreSQL", "Python"],
      RegionsServed: ["US", "UK"],
      ScopeInclusions: ["Development", "Testing"],
      ScopeExclusions: ["Hardware"],
      ServiceDescription: "Complete ERP implementation for retail businesses",
      KeyFeatures: ["Inventory Management"],
      AddOns: [],
      Notes: "",
      TimelineWeeks: "8 - 20",
      EngagementModel: "Project-based",
      PaymentTerms: "40% upfront",
      RiskFactors: []
    },
    {
      id: "ITSC_00002",
      ServiceCategory: "Development",
      SubService: "Custom Web Application",
      IndustryUseCase: "Healthcare",
      ProjectSize: "Medium",
      DeliveryModel: "Hybrid",
      Pricing: {
        PricingType: "Fixed Quotation",
        TotalEstimatedCostUSD: "$25,000 - $75,000",
        MilestoneBased: []
      },
      ToolingLicensingInfra: {},
      ComplianceCostsUSD: {},
      TechnologyStack: ["React", "Node.js", "MongoDB"],
      RegionsServed: ["US"],
      ScopeInclusions: ["UI/UX Design", "Development"],
      ScopeExclusions: ["Maintenance"],
      ServiceDescription: "Custom healthcare management web application",
      KeyFeatures: ["Patient Management"],
      AddOns: [],
      Notes: "",
      TimelineWeeks: "12 - 24",
      EngagementModel: "Project-based",
      PaymentTerms: "30% upfront",
      RiskFactors: []
    }
  ];

  return (
    <div className="max-w-2xl">
      <ServiceCatalog
        services={mockServices}
        onServiceConfigure={(service) => console.log('Configure:', service.id)}
      />
    </div>
  );
}