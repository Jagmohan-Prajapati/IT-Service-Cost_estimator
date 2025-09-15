import { useState, useMemo } from "react";
import ServiceCard from "./ServiceCard";
import SearchAndFilter from "./SearchAndFilter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";
import type { ITService } from "@shared/schema";

interface ServiceCatalogProps {
  services: ITService[];
  isLoading?: boolean;
  onServiceConfigure: (service: ITService) => void;
}

export default function ServiceCatalog({ services, isLoading = false, onServiceConfigure }: ServiceCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedDeliveryModel, setSelectedDeliveryModel] = useState("All");

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = searchQuery === "" || 
        service.SubService.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.ServiceCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.ServiceDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.TechnologyStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || 
        service.ServiceCategory === selectedCategory;

      const matchesSize = selectedSize === "All" || 
        service.ProjectSize === selectedSize;

      const matchesDeliveryModel = selectedDeliveryModel === "All" || 
        service.DeliveryModel === selectedDeliveryModel;

      return matchesSearch && matchesCategory && matchesSize && matchesDeliveryModel;
    });
  }, [services, searchQuery, selectedCategory, selectedSize, selectedDeliveryModel]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedSize("All");
    setSelectedDeliveryModel("All");
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
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
        selectedDeliveryModel={selectedDeliveryModel}
        onDeliveryModelChange={setSelectedDeliveryModel}
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
              />
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}