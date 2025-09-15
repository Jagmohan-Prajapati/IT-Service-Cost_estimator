import ServiceConfigModal from '../ServiceConfigModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { ITService } from '@shared/schema';

export default function ServiceConfigModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const mockService: ITService = {
    id: "ITSC_00001",
    ServiceCategory: "ERP",
    SubService: "Core ERP Implementation",
    IndustryUseCase: "Retail",
    ProjectSize: "Medium",
    DeliveryModel: "Offshore",
    Pricing: {
      PricingType: "Fixed Quotation",
      TotalEstimatedCostUSD: "$25,000 - $75,000",
      MilestoneBased: []
    },
    ToolingLicensingInfra: {
      CloudGPU_monthly_USD: "$500 - $1500",
      CloudHosting_monthly_USD: "$100 - $3000",
    },
    ComplianceCostsUSD: {
      GDPR_USD: "$5000 - $15000"
    },
    TechnologyStack: ["Odoo", "PostgreSQL", "Python", "REST APIs", "Docker"],
    RegionsServed: ["India", "US", "UK", "UAE", "Australia"],
    ScopeInclusions: [
      "Requirement Gathering & Analysis",
      "System Design & Architecture", 
      "Core Development & Implementation",
      "Integration with existing systems",
      "Comprehensive Testing (Unit, Integration, UAT)",
      "Deployment & Go-live Support",
      "Initial Training & Documentation"
    ],
    ScopeExclusions: [
      "Hardware procurement and setup",
      "Third-party legacy system licensing costs",
      "Data cleanup beyond agreed scope",
      "Ongoing maintenance after warranty period"
    ],
    ServiceDescription: "Comprehensive ERP implementation tailored for retail businesses. Includes complete system setup, data migration, user training, and post-deployment support. Our solution integrates inventory management, sales processing, customer relationship management, and financial reporting into a unified platform.",
    KeyFeatures: [
      "Real-time Inventory Management",
      "Integrated POS System", 
      "Customer Relationship Management",
      "Financial Reporting & Analytics",
      "Multi-location Support",
      "Mobile Application Access"
    ],
    AddOns: [],
    Notes: "Delivery model 'Offshore' includes dedicated project manager and 24/7 support during implementation phase.",
    TimelineWeeks: "12 - 24",
    EngagementModel: "Fixed-price project with milestone-based delivery",
    PaymentTerms: "30% upfront, 40% at 50% completion, 30% on final delivery",
    RiskFactors: [
      "Data migration complexity from legacy systems",
      "User adoption and change management requirements",
      "Integration challenges with existing third-party tools"
    ]
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        Open Service Configuration
      </Button>
      
      <ServiceConfigModal
        service={mockService}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddToEstimate={(service, config) => {
          console.log('Added to estimate:', service.SubService, config);
          setIsOpen(false);
        }}
      />
    </div>
  );
}