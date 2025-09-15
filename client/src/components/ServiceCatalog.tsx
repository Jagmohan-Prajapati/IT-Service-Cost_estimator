import { useState, useMemo } from "react";
import ServiceCard from "./ServiceCard";
import SearchAndFilter from "./SearchAndFilter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";
import type { ITService, Currency } from "@shared/schema";

interface ServiceCatalogProps {
  services: ITService[];
  isLoading?: boolean;
  onServiceConfigure: (service: ITService) => void;
  selectedCurrency: Currency;
  currencyRate: number;
}

export default function ServiceCatalog({ services, isLoading = false, onServiceConfigure, selectedCurrency, currencyRate }: ServiceCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = searchQuery === "" || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.keyFeatures.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || 
        service.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [services, searchQuery, selectedCategory]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="text-muted-foreground">Loading services...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onClearFilters={handleClearFilters}
      />

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold" data-testid="text-services-count">
          {filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'} Found
        </h2>
      </div>

      <ScrollArea className="h-[calc(100vh-320px)]">
        {filteredServices.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground" data-testid="text-no-services">
              No services match your current filters. Try adjusting your search criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onConfigure={onServiceConfigure}
                selectedCurrency={selectedCurrency}
                currencyRate={currencyRate}
              />
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}