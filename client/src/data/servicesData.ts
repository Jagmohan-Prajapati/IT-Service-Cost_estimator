import type { ITService, CurrencyRates } from "@shared/schema";

export const servicesData: {
  services: ITService[];
  rates: CurrencyRates;
} = {
  "services": [
    {
      "id": 1,
      "name": "Web Development",
      "category": "Development",
      "baseCostUSD": 5000,
      "description": "Complete website development from concept to launch. Includes responsive design, content management system, SEO optimization, and cross-browser compatibility. Perfect for businesses looking to establish or enhance their online presence.",
      "detailedDescription": "Our web development service provides end-to-end website creation tailored to your business needs. We build modern, responsive websites that work seamlessly across all devices and browsers. Each project includes custom design, user-friendly content management, search engine optimization, security implementation, and performance optimization to ensure your website not only looks great but also drives business results.",
      "keyFeatures": [
        "Responsive design for all devices",
        "Content Management System (CMS)",
        "SEO-optimized structure and content",
        "Cross-browser compatibility",
        "SSL security certificate",
        "Performance optimization",
        "Google Analytics integration",
        "Contact forms and lead capture"
      ],
      "scaleDetails": {
        "Small": "Basic 5-10 page website with standard features, perfect for small businesses and startups looking to establish online presence",
        "Medium": "Enhanced 15-25 page website with advanced functionality, custom features, and integrations suitable for growing businesses",
        "Large": "Enterprise-level website with complex integrations, custom development, advanced functionality, and scalable architecture"
      },
      "scaleMultipliers": {
        "Small": 1.0,
        "Medium": 1.5,
        "Large": 2.5
      },
      "addOns": [
        {"name": "SEO Optimization", "costUSD": 500, "description": "Advanced search engine optimization including keyword research, meta tags optimization, and content strategy"},
        {"name": "Mobile Responsive", "costUSD": 800, "description": "Enhanced mobile experience with touch-optimized interface and mobile-specific features"},
        {"name": "E-commerce Integration", "costUSD": 1200, "description": "Full online store functionality with payment processing, inventory management, and order tracking"}
      ],
      "monthlyMaintenance": {
        "Small": 100,
        "Medium": 200,
        "Large": 400
      }
    },
    {
      "id": 2,
      "name": "Digital Marketing",
      "category": "Marketing",
      "baseCostUSD": 2000,
      "description": "Comprehensive digital marketing strategy and execution to boost your online presence and drive customer acquisition. Includes campaign planning, content creation, social media management, and performance analytics.",
      "detailedDescription": "Our digital marketing service encompasses all aspects of online marketing to help grow your business. We develop and execute strategic marketing campaigns across multiple channels, create engaging content that resonates with your target audience, and provide detailed analytics to measure success and optimize performance.",
      "keyFeatures": [
        "Marketing strategy development",
        "Multi-channel campaign management",
        "Content creation and curation",
        "Social media management",
        "Email marketing campaigns",
        "Performance tracking and analytics",
        "Competitor analysis",
        "ROI optimization"
      ],
      "scaleDetails": {
        "Small": "Basic marketing campaigns for local businesses with focus on 1-2 primary channels and essential content creation",
        "Medium": "Multi-channel marketing strategy with advanced targeting, automation, and comprehensive content marketing approach",
        "Large": "Enterprise marketing with full automation, advanced analytics, multi-platform campaigns, and dedicated account management"
      },
      "scaleMultipliers": {
        "Small": 1.0,
        "Medium": 1.8,
        "Large": 3.0
      },
      "addOns": [
        {"name": "Social Media Management", "costUSD": 300, "description": "Daily social media posting, community management, and engagement across major platforms"},
        {"name": "PPC Advertising", "costUSD": 600, "description": "Pay-per-click advertising campaign setup and management on Google Ads and social media platforms"},
        {"name": "Content Creation", "costUSD": 400, "description": "Professional blog posts, graphics, videos, and marketing materials creation"}
      ],
      "monthlyMaintenance": {
        "Small": 150,
        "Medium": 300,
        "Large": 600
      }
    },
    {
      "id": 3,
      "name": "Cloud Infrastructure",
      "category": "IT Services",
      "baseCostUSD": 8000,
      "description": "Complete cloud infrastructure setup and management for scalable, secure, and reliable business operations. Includes server configuration, security implementation, backup systems, and 24/7 monitoring.",
      "detailedDescription": "Our cloud infrastructure service provides enterprise-grade cloud solutions that scale with your business. We handle everything from initial architecture design to ongoing maintenance, ensuring your systems are secure, performant, and always available when you need them.",
      "keyFeatures": [
        "Cloud architecture design",
        "Server setup and configuration",
        "Security implementation and monitoring",
        "Automated backup systems",
        "Load balancing and scaling",
        "Database management",
        "Network security and firewall setup",
        "Disaster recovery planning"
      ],
      "scaleDetails": {
        "Small": "Basic cloud setup for small teams (up to 25 users) with essential services and standard security measures",
        "Medium": "Scalable infrastructure for growing businesses (up to 100 users) with enhanced security and performance optimization",
        "Large": "Enterprise-grade infrastructure with advanced security, redundancy, auto-scaling, and comprehensive monitoring"
      },
      "scaleMultipliers": {
        "Small": 1.0,
        "Medium": 2.0,
        "Large": 4.0
      },
      "addOns": [
        {"name": "24/7 Monitoring", "costUSD": 1000, "description": "Round-the-clock system monitoring with instant alerts and immediate response to issues"},
        {"name": "Backup Services", "costUSD": 500, "description": "Automated daily backups with multiple restore points and cross-region redundancy"},
        {"name": "Security Audit", "costUSD": 1500, "description": "Comprehensive security assessment with vulnerability scanning and compliance reporting"}
      ],
      "monthlyMaintenance": {
        "Small": 300,
        "Medium": 600,
        "Large": 1200
      }
    },
    {
      "id": 4,
      "name": "Mobile App Development",
      "category": "Development",
      "baseCostUSD": 15000,
      "description": "Native and cross-platform mobile application development for iOS and Android. Includes UI/UX design, development, testing, app store submission, and post-launch support.",
      "detailedDescription": "Our mobile app development service creates powerful, user-friendly mobile applications that engage your customers and grow your business. We handle the entire development lifecycle from concept to deployment, ensuring your app meets the highest standards for performance, usability, and security.",
      "keyFeatures": [
        "Native iOS and Android development",
        "Cross-platform compatibility",
        "User interface and experience design",
        "Backend API development",
        "App store optimization",
        "Push notification system",
        "In-app analytics integration",
        "Security and data protection"
      ],
      "scaleDetails": {
        "Small": "Simple mobile app with core features, basic UI, and essential functionality for startups and small businesses",
        "Medium": "Feature-rich app with advanced UI/UX, integrations, push notifications, and enhanced functionality",
        "Large": "Complex enterprise app with custom features, third-party integrations, advanced security, and scalable architecture"
      },
      "scaleMultipliers": {
        "Small": 1.0,
        "Medium": 1.8,
        "Large": 3.5
      },
      "addOns": [
        {"name": "Cross-platform Support", "costUSD": 3000, "description": "Deploy your app on both iOS and Android platforms with shared codebase for maximum reach"},
        {"name": "Push Notifications", "costUSD": 800, "description": "Real-time push notification system to engage users and drive app retention"},
        {"name": "In-app Purchases", "costUSD": 1200, "description": "Monetization features including subscription management and payment processing"}
      ],
      "monthlyMaintenance": {
        "Small": 200,
        "Medium": 500,
        "Large": 1000
      }
    },
    {
      "id": 5,
      "name": "Data Analytics",
      "category": "Analytics",
      "baseCostUSD": 6000,
      "description": "Advanced data analytics and business intelligence solutions to transform your data into actionable insights. Includes data visualization, reporting dashboards, predictive analytics, and automated reporting.",
      "detailedDescription": "Our data analytics service helps you unlock the power of your business data through advanced analytics and visualization tools. We create comprehensive dashboards and reports that provide real-time insights into your business performance, enabling data-driven decision making.",
      "keyFeatures": [
        "Business intelligence dashboards",
        "Data visualization and reporting",
        "Predictive analytics and forecasting",
        "Automated report generation",
        "Data integration from multiple sources",
        "KPI tracking and monitoring",
        "Custom analytics solutions",
        "Data quality management"
      ],
      "scaleDetails": {
        "Small": "Basic analytics dashboard with standard reports and key metrics visualization for small businesses",
        "Medium": "Advanced analytics platform with custom visualizations, automated insights, and department-specific reporting",
        "Large": "Enterprise BI solution with AI/ML capabilities, real-time analytics, predictive modeling, and advanced data science"
      },
      "scaleMultipliers": {
        "Small": 1.0,
        "Medium": 2.2,
        "Large": 4.5
      },
      "addOns": [
        {"name": "Real-time Dashboard", "costUSD": 1500, "description": "Live data visualization with real-time updates and interactive analytics dashboards"},
        {"name": "AI/ML Integration", "costUSD": 2500, "description": "Machine learning algorithms for predictive analytics, trend analysis, and automated insights"},
        {"name": "Custom Reports", "costUSD": 800, "description": "Tailored reporting solutions with custom metrics, automated scheduling, and executive summaries"}
      ],
      "monthlyMaintenance": {
        "Small": 250,
        "Medium": 500,
        "Large": 1000
      }
    },
    {
      "id": 6,
      "name": "Cybersecurity Audit",
      "category": "IT Services",
      "baseCostUSD": 4500,
      "description": "Comprehensive security assessment to identify vulnerabilities and strengthen your digital infrastructure. Includes network security analysis, penetration testing, compliance evaluation, and detailed remediation recommendations.",
      "detailedDescription": "Our cybersecurity audit service provides thorough security assessment of your digital infrastructure, identifying vulnerabilities and providing actionable recommendations to enhance your security posture. We help protect your business from cyber threats through comprehensive testing and analysis.",
      "keyFeatures": [
        "Vulnerability assessment and scanning",
        "Network security analysis",
        "Compliance evaluation and reporting",
        "Risk assessment and mitigation planning",
        "Security policy review",
        "Employee security training recommendations",
        "Incident response planning",
        "Security monitoring setup"
      ],
      "scaleDetails": {
        "Small": "Basic security assessment for small businesses covering essential systems and standard vulnerability scanning",
        "Medium": "Comprehensive audit with detailed vulnerability analysis, compliance checking, and security recommendations",
        "Large": "Enterprise-level security audit with advanced penetration testing, ongoing monitoring recommendations, and compliance certification support"
      },
      "scaleMultipliers": {
        "Small": 1.0,
        "Medium": 1.6,
        "Large": 2.8
      },
      "addOns": [
        {"name": "Penetration Testing", "costUSD": 800, "description": "Ethical hacking simulation to identify real-world vulnerabilities and security weaknesses"},
        {"name": "Compliance Report", "costUSD": 600, "description": "Detailed compliance assessment for industry standards like GDPR, HIPAA, or PCI DSS"},
        {"name": "Remediation Plan", "costUSD": 400, "description": "Step-by-step action plan with prioritized recommendations to address identified security issues"}
      ],
      "monthlyMaintenance": {
        "Small": 180,
        "Medium": 350,
        "Large": 700
      }
    },
    {
      "id": 7,
      "name": "UI/UX Design",
      "category": "Design",
      "baseCostUSD": 3500,
      "description": "User-centered design services to create intuitive and engaging digital experiences. Includes user research, wireframing, prototyping, visual design, and usability testing to ensure optimal user satisfaction.",
      "detailedDescription": "Our UI/UX design service focuses on creating exceptional user experiences that drive engagement and business results. We combine user research, design thinking, and best practices to create interfaces that are both beautiful and highly functional.",
      "keyFeatures": [
        "User experience research and analysis",
        "Information architecture design",
        "Wireframing and prototyping",
        "Visual design and branding integration",
        "Usability testing and optimization",
        "Responsive design for all devices",
        "Design system creation",
        "Accessibility compliance"
      ],
      "scaleDetails": {
        "Small": "Basic UI/UX design for simple applications with essential user research and standard design patterns",
        "Medium": "Comprehensive design system with detailed user research, interactive prototypes, and usability testing",
        "Large": "Enterprise design strategy with extensive user research, multi-platform design, advanced prototyping, and ongoing optimization"
      },
      "scaleMultipliers": {
        "Small": 1.0,
        "Medium": 1.7,
        "Large": 2.9
      },
      "addOns": [
        {"name": "User Research", "costUSD": 800, "description": "In-depth user interviews, surveys, and behavioral analysis to inform design decisions"},
        {"name": "Prototype Development", "costUSD": 600, "description": "Interactive prototypes for testing user flows and validating design concepts"},
        {"name": "Design System", "costUSD": 1000, "description": "Comprehensive design system with reusable components, style guides, and brand guidelines"}
      ],
      "monthlyMaintenance": {
        "Small": 120,
        "Medium": 250,
        "Large": 500
      }
    },
    {
      "id": 8,
      "name": "E-commerce Platform",
      "category": "Development",
      "baseCostUSD": 12000,
      "description": "Complete e-commerce solution development including online store setup, payment gateway integration, inventory management, and customer experience optimization. Built for scalable online retail success.",
      "detailedDescription": "Our e-commerce platform service creates powerful online stores that drive sales and provide exceptional customer experiences. We build scalable, secure platforms with all the features you need to succeed in online retail, from product management to order fulfillment.",
      "keyFeatures": [
        "Custom e-commerce platform development",
        "Product catalog and inventory management",
        "Secure payment gateway integration",
        "Order management and fulfillment",
        "Customer account management",
        "Shopping cart and checkout optimization",
        "Mobile-responsive design",
        "SEO and marketing integration"
      ],
      "scaleDetails": {
        "Small": "Basic online store with essential e-commerce features, suitable for small product catalogs and single-channel selling",
        "Medium": "Advanced e-commerce platform with custom features, integrations, multi-payment options, and enhanced user experience",
        "Large": "Enterprise e-commerce solution with advanced automation, multi-channel selling, complex integrations, and scalable architecture"
      },
      "scaleMultipliers": {
        "Small": 1.0,
        "Medium": 2.1,
        "Large": 3.8
      },
      "addOns": [
        {"name": "Payment Gateway", "costUSD": 1500, "description": "Multiple payment method integration including credit cards, digital wallets, and buy-now-pay-later options"},
        {"name": "Inventory Management", "costUSD": 2000, "description": "Advanced inventory tracking, automated stock management, and supplier integration system"},
        {"name": "Multi-language Support", "costUSD": 1200, "description": "International expansion capabilities with multi-language interface and currency support"}
      ],
      "monthlyMaintenance": {
        "Small": 300,
        "Medium": 600,
        "Large": 1200
      }
    }
  ],
  "rates": {
    "USD": 1.0,
    "EUR": 0.85,
    "INR": 83.12,
    "GBP": 0.79
  }
};