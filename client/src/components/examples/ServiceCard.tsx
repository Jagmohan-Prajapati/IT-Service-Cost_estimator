import ServiceCard from '../ServiceCard';
import type { ITService } from '@shared/schema';

export default function ServiceCardExample() {
  const mockService: ITService = {
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
    ToolingLicensingInfra: {
      CloudGPU_monthly_USD: "$500 - $1500",
      CloudHosting_monthly_USD: "$20 - $2000",
      SaaS_license_annual_USD: "$500 - $20000",
    },
    ComplianceCostsUSD: {
      GDPR_USD: "$3000 - $12000"
    },
    TechnologyStack: ["Odoo", "PostgreSQL", "Python", "REST APIs"],
    RegionsServed: ["India", "US", "UK", "UAE", "Australia"],
    ScopeInclusions: [
      "Requirement Gathering",
      "Design & Architecture", 
      "Development",
      "Testing (Unit, Integration, UAT)"
    ],
    ScopeExclusions: [
      "Hardware procurement",
      "Third-party legacy system costs"
    ],
    ServiceDescription: "Complete ERP implementation tailored for retail businesses with integrated inventory, sales, and customer management.",
    KeyFeatures: ["Inventory Management", "Sales Analytics", "Customer Portal"],
    AddOns: [],
    Notes: "Delivery model 'Offshore' uses cost multiplier 0.65.",
    TimelineWeeks: "8 - 20",
    EngagementModel: "Project-based",
    PaymentTerms: "40% upfront, 30% mid, 30% final",
    RiskFactors: ["Data migration complexity", "User adoption"]
  };

  return (
    <div className="max-w-sm">
      <ServiceCard
        service={mockService}
        onConfigure={(service) => console.log('Configure:', service.id)}
      />
    </div>
  );
}