import React from 'react';
import ServiceCard from '../ServiceCard';
import type { ITService } from '@shared/schema';

export default function ServiceCardExample() {
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
    <div className="max-w-sm">
      <ServiceCard
        service={mockService}
        onConfigure={(service) => console.log('Configure:', service.id)}
        selectedCurrency="USD"
        currencyRate={1}
      />
    </div>
  );
}