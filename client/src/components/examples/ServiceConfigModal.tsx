import React from 'react';
import ServiceConfigModal from '../ServiceConfigModal';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import type { ITService } from '@shared/schema';

export default function ServiceConfigModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const mockService: ITService = {
    id: 1,
    name: "Web Development",
    category: "Development",
    baseCostUSD: 5000,
    description: "Complete website development from concept to launch",
    detailedDescription: "Our web development service provides end-to-end website creation tailored to your business needs.",
    keyFeatures: [
      "Responsive design for all devices",
      "Content Management System (CMS)",
      "SEO-optimized structure and content",
      "Cross-browser compatibility"
    ],
    scaleDetails: {
      Small: "Basic 5-10 page website with standard features",
      Medium: "Enhanced 15-25 page website with advanced functionality",
      Large: "Enterprise-level website with complex integrations"
    },
    scaleMultipliers: {
      Small: 1.0,
      Medium: 1.5,
      Large: 2.5
    },
    addOns: [
      {
        name: "SEO Optimization",
        costUSD: 500,
        description: "Advanced search engine optimization"
      }
    ],
    monthlyMaintenance: {
      Small: 100,
      Medium: 200,
      Large: 400
    }
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
          console.log('Added to estimate:', service.name, config);
          setIsOpen(false);
        }}
        selectedCurrency="USD"
        currencyRate={1}
      />
    </div>
  );
}