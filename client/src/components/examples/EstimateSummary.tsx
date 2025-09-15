import React from 'react';
import EstimateSummary from '../EstimateSummary';
import { useState } from 'react';
import type { EstimateItem, Currency } from '@shared/schema';

export default function EstimateSummaryExample() {
  const [estimateItems, setEstimateItems] = useState<EstimateItem[]>([
    {
      id: "est1",
      service: {
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
      },
      configuration: {
        serviceId: 1,
        projectSize: "Small",
        selectedAddOns: [],
        customizations: {}
      },
      estimatedCost: 5000
    }
  ]);

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');

  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    INR: 83.12
  };

  return (
    <div className="max-w-md">
      <EstimateSummary
        estimateItems={estimateItems}
        selectedCurrency={selectedCurrency}
        currencyRate={currencyRates[selectedCurrency]}
        onRemoveItem={(id) => setEstimateItems(prev => prev.filter(item => item.id !== id))}
        onExportEstimate={() => console.log('Export estimate')}
      />
    </div>
  );
}