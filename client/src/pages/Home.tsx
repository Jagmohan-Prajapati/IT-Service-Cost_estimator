import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ServiceCatalog from "@/components/ServiceCatalog";
import EstimateSummary from "@/components/EstimateSummary";
import ServiceConfigModal from "@/components/ServiceConfigModal";
import { useTheme } from "@/components/ThemeProvider";
import { servicesData } from "@/data/servicesData";
import type { ITService, EstimateItem, Currency, ServiceConfiguration, CurrencyRates } from "@shared/schema";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");
  const [estimateItems, setEstimateItems] = useState<EstimateItem[]>([]);
  const [services, setServices] = useState<ITService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<ITService | null>(null);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Use currency rates from servicesData
  const currencyRates: CurrencyRates = servicesData.rates;

  // Load services from servicesData
  useEffect(() => {
    const loadServices = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setServices(servicesData.services);
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
    console.log('Added to estimate:', service.name);
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
              selectedCurrency={selectedCurrency}
              currencyRate={currencyRates[selectedCurrency]}
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
        selectedCurrency={selectedCurrency}
        currencyRate={currencyRates[selectedCurrency]}
      />
    </div>
  );
}