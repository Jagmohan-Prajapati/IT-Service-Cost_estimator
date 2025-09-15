import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ServiceCatalog from "@/components/ServiceCatalog";
import EstimateSummary from "@/components/EstimateSummary";
import ServiceConfigModal from "@/components/ServiceConfigModal";
import { useTheme } from "@/components/ThemeProvider";
import type { ITService, EstimateItem, Currency, ServiceConfiguration, CurrencyRates } from "@shared/schema";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");
  const [estimateItems, setEstimateItems] = useState<EstimateItem[]>([]);
  const [services, setServices] = useState<ITService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<ITService | null>(null);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Mock currency rates - in real app, this would come from an API
  const currencyRates: CurrencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    INR: 83.12
  };

  // Load mock services - in real app, this would come from the provided JSON data
  useEffect(() => {
    const loadServices = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock services based on the provided JSON structure
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
            TotalEstimatedCostUSD: "$15,000 - $45,000",
            MilestoneBased: []
          },
          ToolingLicensingInfra: {
            CloudGPU_monthly_USD: "$500 - $1500",
            CloudHosting_monthly_USD: "$100 - $2000",
            SaaS_license_annual_USD: "$1000 - $15000",
            ERP_license_annual_USD: "$8000 - $50000"
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
            "Testing (Unit, Integration, UAT)",
            "Deployment & Handover"
          ],
          ScopeExclusions: [
            "Hardware procurement",
            "Third-party legacy system costs",
            "Data cleanup beyond agreed scope"
          ],
          ServiceDescription: "Comprehensive ERP implementation tailored for retail businesses. Includes inventory management, sales processing, customer relationships, and financial reporting in a unified platform.",
          KeyFeatures: [
            "Real-time Inventory Management",
            "Integrated POS System",
            "Customer Relationship Management",
            "Financial Reporting & Analytics"
          ],
          AddOns: [],
          Notes: "Offshore delivery model provides cost-effective solution with 24/7 support.",
          TimelineWeeks: "8 - 20",
          EngagementModel: "Project-based",
          PaymentTerms: "40% upfront, 30% mid, 30% final",
          RiskFactors: ["Data migration complexity", "User adoption challenges"]
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
            TotalEstimatedCostUSD: "$35,000 - $85,000",
            MilestoneBased: []
          },
          ToolingLicensingInfra: {
            CloudHosting_monthly_USD: "$200 - $3000",
            SaaS_license_annual_USD: "$2000 - $25000",
            Security_tools_annual_USD: "$1000 - $10000"
          },
          ComplianceCostsUSD: {
            GDPR_USD: "$5000 - $15000"
          },
          TechnologyStack: ["React", "Node.js", "MongoDB", "Express", "AWS"],
          RegionsServed: ["US", "Canada", "UK"],
          ScopeInclusions: [
            "UI/UX Design",
            "Frontend Development",
            "Backend API Development",
            "Database Design",
            "Security Implementation",
            "Testing & QA"
          ],
          ScopeExclusions: [
            "Mobile app development",
            "Third-party integrations",
            "Ongoing maintenance after 6 months"
          ],
          ServiceDescription: "Custom healthcare management web application with patient portal, appointment scheduling, medical records management, and billing integration. HIPAA compliant architecture.",
          KeyFeatures: [
            "Patient Portal",
            "Appointment Scheduling",
            "Medical Records Management",
            "Billing Integration",
            "HIPAA Compliance"
          ],
          AddOns: [],
          Notes: "Hybrid delivery model combines onshore project management with offshore development team.",
          TimelineWeeks: "12 - 24",
          EngagementModel: "Project-based",
          PaymentTerms: "30% upfront, 40% mid, 30% final",
          RiskFactors: ["Regulatory compliance requirements", "Integration complexity"]
        },
        {
          id: "ITSC_00003",
          ServiceCategory: "Analytics",
          SubService: "Business Intelligence Dashboard",
          IndustryUseCase: "Finance",
          ProjectSize: "Large",
          DeliveryModel: "Onshore",
          Pricing: {
            PricingType: "Fixed Quotation",
            TotalEstimatedCostUSD: "$75,000 - $150,000",
            MilestoneBased: []
          },
          ToolingLicensingInfra: {
            CloudGPU_monthly_USD: "$1500 - $5000",
            CloudHosting_monthly_USD: "$500 - $5000",
            SaaS_license_annual_USD: "$5000 - $50000",
            Monitoring_tool_annual_USD: "$1000 - $8000"
          },
          ComplianceCostsUSD: {
            GDPR_USD: "$8000 - $25000"
          },
          TechnologyStack: ["Tableau", "Power BI", "Python", "SQL Server", "Azure"],
          RegionsServed: ["US", "UK", "Germany"],
          ScopeInclusions: [
            "Data Source Analysis",
            "ETL Pipeline Development",
            "Dashboard Design & Development",
            "Advanced Analytics",
            "User Training",
            "Performance Optimization"
          ],
          ScopeExclusions: [
            "Data collection setup",
            "Legacy system modifications",
            "Hardware infrastructure"
          ],
          ServiceDescription: "Enterprise-grade business intelligence solution with real-time dashboards, predictive analytics, and automated reporting. Designed for financial institutions with complex data requirements.",
          KeyFeatures: [
            "Real-time Data Visualization",
            "Predictive Analytics",
            "Automated Reporting",
            "Risk Management Dashboards",
            "Regulatory Compliance Reports"
          ],
          AddOns: [],
          Notes: "Onshore delivery ensures close collaboration and compliance with financial regulations.",
          TimelineWeeks: "16 - 32",
          EngagementModel: "Project-based",
          PaymentTerms: "25% upfront, 35% mid, 40% final",
          RiskFactors: ["Data quality issues", "Regulatory approval delays"]
        },
        {
          id: "ITSC_00004",
          ServiceCategory: "Design",
          SubService: "UI/UX Design System",
          IndustryUseCase: "E-commerce",
          ProjectSize: "Small",
          DeliveryModel: "Hybrid",
          Pricing: {
            PricingType: "Fixed Quotation",
            TotalEstimatedCostUSD: "$12,000 - $28,000",
            MilestoneBased: []
          },
          ToolingLicensingInfra: {
            SaaS_license_annual_USD: "$500 - $5000"
          },
          ComplianceCostsUSD: {},
          TechnologyStack: ["Figma", "Adobe Creative Suite", "React", "Storybook"],
          RegionsServed: ["Global"],
          ScopeInclusions: [
            "User Research",
            "Design System Creation",
            "Component Library",
            "Style Guide",
            "Prototyping",
            "Design Handoff"
          ],
          ScopeExclusions: [
            "Frontend development",
            "Backend integration",
            "Content creation"
          ],
          ServiceDescription: "Comprehensive UI/UX design system for e-commerce platforms. Includes user research, design system creation, component library, and style guides optimized for conversion.",
          KeyFeatures: [
            "Conversion-Optimized Design",
            "Mobile-First Approach",
            "Accessibility Compliance",
            "Design System Documentation",
            "Interactive Prototypes"
          ],
          AddOns: [],
          Notes: "Hybrid approach combines local user research with offshore design execution.",
          TimelineWeeks: "6 - 12",
          EngagementModel: "Project-based",
          PaymentTerms: "50% upfront, 50% final",
          RiskFactors: ["Brand alignment challenges", "User feedback iterations"]
        }
      ];

      setServices(mockServices);
      setIsLoading(false);
    };

    loadServices();
  }, []);

  const handleServiceConfigure = (service: ITService) => {
    setSelectedService(service);
    setIsConfigModalOpen(true);
  };

  const handleAddToEstimate = (service: ITService, config: ServiceConfiguration) => {
    const newItem: EstimateItem = {
      id: `est_${Date.now()}`,
      service,
      configuration: config,
      estimatedCost: 0 // Will be calculated based on service pricing
    };

    setEstimateItems(prev => [...prev, newItem]);
    console.log('Added to estimate:', service.SubService);
  };

  const handleRemoveFromEstimate = (itemId: string) => {
    setEstimateItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleExportEstimate = () => {
    console.log('Exporting estimate...', estimateItems);
    // In real app, this would generate and download a PDF or send to backend
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
        darkMode={theme === "dark"}
        onToggleDarkMode={toggleTheme}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Service Catalog - Left Panel */}
          <div className="lg:col-span-2">
            <ServiceCatalog
              services={services}
              isLoading={isLoading}
              onServiceConfigure={handleServiceConfigure}
            />
          </div>

          {/* Estimate Summary - Right Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <EstimateSummary
                estimateItems={estimateItems}
                selectedCurrency={selectedCurrency}
                currencyRate={currencyRates[selectedCurrency]}
                onRemoveItem={handleRemoveFromEstimate}
                onExportEstimate={handleExportEstimate}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Configuration Modal */}
      <ServiceConfigModal
        service={selectedService}
        isOpen={isConfigModalOpen}
        onClose={() => {
          setIsConfigModalOpen(false);
          setSelectedService(null);
        }}
        onAddToEstimate={handleAddToEstimate}
      />
    </div>
  );
}