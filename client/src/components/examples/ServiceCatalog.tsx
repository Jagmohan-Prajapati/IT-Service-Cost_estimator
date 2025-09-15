import React from 'react';
import ServiceCatalog from '../ServiceCatalog';
import type { ITService } from '@shared/schema';

export default function ServiceCatalogExample() {
  const mockServices: ITService[] = [
    {
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
    {
      id: 2,
      name: "Digital Marketing",
      category: "Marketing",
      baseCostUSD: 2000,
      description: "Comprehensive digital marketing strategy and execution",
      detailedDescription: "Our digital marketing service encompasses all aspects of online marketing to help grow your business.",
      keyFeatures: [
        "Marketing strategy development",
        "Multi-channel campaign management",
        "Content creation and curation",
        "Social media management"
      ],
      scaleDetails: {
        Small: "Basic marketing campaigns for local businesses",
        Medium: "Multi-channel marketing strategy with advanced targeting",
        Large: "Enterprise marketing with full automation"
      },
      scaleMultipliers: {
        Small: 1.0,
        Medium: 1.8,
        Large: 3.0
      },
      addOns: [
        {
          name: "Social Media Management",
          costUSD: 300,
          description: "Daily social media posting and community management"
        }
      ],
      monthlyMaintenance: {
        Small: 150,
        Medium: 300,
        Large: 600
      }
    }
  ];

  return (
    <div className="max-w-2xl">
      <ServiceCatalog
        services={mockServices}
        onServiceConfigure={(service) => console.log('Configure:', service.id)}
        selectedCurrency="USD"
        currencyRate={1}
      />
    </div>
  );
}