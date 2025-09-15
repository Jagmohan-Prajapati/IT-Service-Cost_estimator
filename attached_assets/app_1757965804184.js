// Enhanced Application Data with Detailed Descriptions
const servicesData = {
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

// Application State
let state = {
  currentCurrency: 'USD',
  selectedServices: [],
  currentModalService: null,
  filteredServices: [...servicesData.services],
  currentCategory: 'all',
  searchTerm: ''
};

// Currency symbols
const currencySymbols = {
  'USD': '$',
  'EUR': '€',
  'INR': '₹',
  'GBP': '£'
};

// DOM Elements Cache
let elements = {};

// Utility Functions
function formatCurrency(amount, currency = state.currentCurrency) {
  const convertedAmount = convertCurrency(amount, 'USD', currency);
  const symbol = currencySymbols[currency];
  return `${symbol}${Math.round(convertedAmount).toLocaleString()}`;
}

function convertCurrency(amount, fromCurrency, toCurrency) {
  if (fromCurrency === toCurrency) return amount;
  
  const usdAmount = fromCurrency === 'USD' ? amount : amount / servicesData.rates[fromCurrency];
  return toCurrency === 'USD' ? usdAmount : usdAmount * servicesData.rates[toCurrency];
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Service Functions
function filterServices() {
  console.log('Filtering services with:', { category: state.currentCategory, search: state.searchTerm });
  
  state.filteredServices = servicesData.services.filter(service => {
    const matchesSearch = !state.searchTerm || 
      service.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(state.searchTerm.toLowerCase());
    
    const matchesCategory = state.currentCategory === 'all' || service.category === state.currentCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  console.log('Filtered services:', state.filteredServices.length);
  renderServices();
}

function renderServices() {
  const grid = elements.servicesGrid;
  if (!grid) {
    console.error('Services grid not found');
    return;
  }
  
  if (state.filteredServices.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <p>No services found</p>
        <small>Try adjusting your search or filter criteria</small>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = state.filteredServices.map(service => {
    const featuresPreview = service.keyFeatures.slice(0, 4);
    const hasMoreFeatures = service.keyFeatures.length > 4;
    
    return `
      <div class="service-card">
        <div class="service-card__header">
          <h3 class="service-card__title">${service.name}</h3>
          <span class="service-card__category">${service.category}</span>
        </div>
        
        <div class="service-card__body">
          <div class="service-card__price">
            <span class="service-card__base-cost">${formatCurrency(service.baseCostUSD)}</span>
          </div>
          
          <div class="service-card__description">
            ${service.description}
          </div>
          
          <div class="service-card__features">
            <h4>Key Features:</h4>
            <div class="features-preview">
              ${featuresPreview.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
              ${hasMoreFeatures ? `<button class="learn-more-btn" onclick="openServiceModal(${service.id})">Learn More (+${service.keyFeatures.length - 4} features)</button>` : ''}
            </div>
          </div>
          
          <div class="service-card__scales">
            <h4>Available Scales:</h4>
            <div class="scales-list">
              ${Object.keys(service.scaleMultipliers).map(scale => 
                `<span class="scale-tag">${scale} (${service.scaleMultipliers[scale]}x)</span>`
              ).join('')}
            </div>
          </div>
          
          <div class="service-card__actions">
            <button class="btn btn--primary btn--sm configure-btn" data-service-id="${service.id}">
              Configure & Add
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Add event listeners to configure buttons
  attachConfigureButtonListeners();
}

function attachConfigureButtonListeners() {
  const buttons = elements.servicesGrid.querySelectorAll('.configure-btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const serviceId = parseInt(button.getAttribute('data-service-id'));
      console.log('Opening modal for service:', serviceId);
      openServiceModal(serviceId);
    });
  });
}

function renderCategoryFilters() {
  const container = elements.categoryFilters;
  if (!container) {
    console.error('Category filters container not found');
    return;
  }
  
  const categories = ['all', ...new Set(servicesData.services.map(s => s.category))];
  
  container.innerHTML = categories.map(category => `
    <button class="btn btn--secondary category-btn ${category === state.currentCategory ? 'active' : ''}" 
            data-category="${category}">
      ${category === 'all' ? 'All' : category}
    </button>
  `).join('');
  
  // Add event listeners to category buttons
  attachCategoryFilterListeners();
}

function attachCategoryFilterListeners() {
  const buttons = elements.categoryFilters.querySelectorAll('.category-btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const category = button.getAttribute('data-category');
      console.log('Category clicked:', category);
      setActiveCategory(category);
    });
  });
}

function setActiveCategory(category) {
  state.currentCategory = category;
  
  // Update UI
  elements.categoryFilters.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    }
  });
  
  filterServices();
}

function renderSelectedServices() {
  const container = elements.selectedServicesContainer;
  if (!container) {
    console.error('Selected services container not found');
    return;
  }
  
  console.log('Rendering selected services. Count:', state.selectedServices.length);
  
  if (state.selectedServices.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No services selected</p>
        <small>Add services from the catalog to start estimating</small>
      </div>
    `;
    
    // Hide panels when no services
    if (elements.settingsPanel) elements.settingsPanel.style.display = 'none';
    if (elements.costBreakdown) elements.costBreakdown.style.display = 'none';
    if (elements.estimationActions) elements.estimationActions.style.display = 'none';
    return;
  }
  
  container.innerHTML = state.selectedServices.map((service, index) => {
    const addOnsList = service.selectedAddOns && service.selectedAddOns.length > 0 
      ? service.selectedAddOns.map(addon => addon.name).join(', ')
      : 'None';
    
    return `
      <div class="selected-service">
        <div class="selected-service__header">
          <h4 class="selected-service__name">${service.name}</h4>
          <button class="selected-service__remove remove-btn" data-service-index="${index}">&times;</button>
        </div>
        <div class="selected-service__details">
          <div><strong>Scale:</strong> ${service.selectedScale}</div>
          <div><strong>Add-ons:</strong> ${addOnsList}</div>
        </div>
        <div class="selected-service__cost">
          <strong>Total: ${formatCurrency(calculateServiceTotal(service))}</strong>
        </div>
      </div>
    `;
  }).join('');
  
  // Add event listeners to remove buttons
  attachRemoveButtonListeners();
  
  // Show panels when services exist
  if (elements.settingsPanel) elements.settingsPanel.style.display = 'block';
  if (elements.costBreakdown) elements.costBreakdown.style.display = 'block';
  if (elements.estimationActions) elements.estimationActions.style.display = 'block';
  
  updateItemCount();
  updateCostBreakdown();
  
  console.log('Selected services rendered successfully');
}

function attachRemoveButtonListeners() {
  const buttons = elements.selectedServicesContainer.querySelectorAll('.remove-btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(button.getAttribute('data-service-index'));
      removeService(index);
    });
  });
}

// Modal Functions
function openServiceModal(serviceId) {
  console.log('Opening service modal for ID:', serviceId);
  
  const service = servicesData.services.find(s => s.id === serviceId);
  if (!service) {
    console.error('Service not found:', serviceId);
    return;
  }
  
  state.currentModalService = service;
  
  if (elements.modalServiceName) {
    elements.modalServiceName.textContent = service.name;
  }
  
  // Populate service description section
  if (elements.modalServiceDescription) {
    elements.modalServiceDescription.textContent = service.detailedDescription;
  }
  
  if (elements.modalFeaturesList) {
    elements.modalFeaturesList.innerHTML = service.keyFeatures.map(feature => 
      `<li>${feature}</li>`
    ).join('');
  }
  
  // Reset form
  if (elements.modalScale) {
    elements.modalScale.value = 'Small';
    updateScaleDescription();
  }
  
  // Render add-ons with descriptions
  if (elements.modalAddons) {
    elements.modalAddons.innerHTML = service.addOns.map((addon, index) => `
      <div class="addon-item">
        <input type="checkbox" id="addon-${index}" data-addon-index="${index}">
        <div class="addon-item__info">
          <div class="addon-item__header">
            <label for="addon-${index}" class="addon-item__name">${addon.name}</label>
            <span class="addon-item__cost">${formatCurrency(addon.costUSD)}</span>
          </div>
          <div class="addon-item__description">${addon.description}</div>
        </div>
      </div>
    `).join('');
  }
  
  updateModalPreview();
  
  if (elements.serviceModal) {
    elements.serviceModal.classList.remove('hidden');
  }
  
  console.log('Modal opened successfully');
}

function updateScaleDescription() {
  if (!state.currentModalService || !elements.scaleDescription || !elements.modalScale) return;
  
  const scale = elements.modalScale.value;
  const description = state.currentModalService.scaleDetails[scale];
  elements.scaleDescription.textContent = description;
}

function closeServiceModal() {
  if (elements.serviceModal) {
    elements.serviceModal.classList.add('hidden');
  }
  state.currentModalService = null;
}

function updateModalPreview() {
  if (!state.currentModalService) return;
  
  const scale = elements.modalScale ? elements.modalScale.value : 'Small';
  const selectedAddons = elements.modalAddons ? 
    Array.from(elements.modalAddons.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => {
        const index = parseInt(checkbox.getAttribute('data-addon-index'));
        return state.currentModalService.addOns[index];
      }) : [];
  
  const baseCost = state.currentModalService.baseCostUSD * state.currentModalService.scaleMultipliers[scale];
  const addonsCost = selectedAddons.reduce((sum, addon) => sum + addon.costUSD, 0);
  const maintenanceCost = state.currentModalService.monthlyMaintenance[scale];
  const total = baseCost + addonsCost;
  
  if (elements.previewBaseCost) elements.previewBaseCost.textContent = formatCurrency(baseCost);
  if (elements.previewAddons) elements.previewAddons.textContent = formatCurrency(addonsCost);
  if (elements.previewMaintenance) elements.previewMaintenance.textContent = `${formatCurrency(maintenanceCost)}/month`;
  if (elements.previewTotal) elements.previewTotal.textContent = formatCurrency(total);
  
  updateScaleDescription();
}

function addServiceToEstimate() {
  if (!state.currentModalService) return;
  
  const scale = elements.modalScale ? elements.modalScale.value : 'Small';
  const selectedAddons = elements.modalAddons ? 
    Array.from(elements.modalAddons.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => {
        const index = parseInt(checkbox.getAttribute('data-addon-index'));
        return state.currentModalService.addOns[index];
      }) : [];
  
  const serviceToAdd = {
    ...state.currentModalService,
    selectedScale: scale,
    selectedAddOns: selectedAddons,
    uniqueId: Date.now() + Math.random()
  };
  
  state.selectedServices.push(serviceToAdd);
  console.log('Service added to estimate:', serviceToAdd.name);
  console.log('Total selected services:', state.selectedServices.length);
  
  renderSelectedServices();
  closeServiceModal();
}

// Calculation Functions
function calculateServiceTotal(service) {
  const baseCost = service.baseCostUSD * service.scaleMultipliers[service.selectedScale];
  const addonsCost = service.selectedAddOns ? service.selectedAddOns.reduce((sum, addon) => sum + addon.costUSD, 0) : 0;
  return baseCost + addonsCost;
}

function calculateProjectTotals() {
  const baseCostTotal = state.selectedServices.reduce((sum, service) => {
    return sum + (service.baseCostUSD * service.scaleMultipliers[service.selectedScale]);
  }, 0);
  
  const addOnsCostTotal = state.selectedServices.reduce((sum, service) => {
    return sum + (service.selectedAddOns ? service.selectedAddOns.reduce((addonSum, addon) => addonSum + addon.costUSD, 0) : 0);
  }, 0);
  
  const maintenanceCostTotal = state.selectedServices.reduce((sum, service) => {
    return sum + service.monthlyMaintenance[service.selectedScale];
  }, 0);
  
  const subtotalBeforeAdjustments = baseCostTotal + addOnsCostTotal;
  
  // Payment method adjustment
  const paymentMethod = elements.paymentMethod ? elements.paymentMethod.value : 'milestone';
  const paymentAdjustment = paymentMethod === 'emi' ? subtotalBeforeAdjustments * 0.08 : 0;
  
  const subtotal = subtotalBeforeAdjustments + paymentAdjustment;
  const gstAmount = subtotal * 0.18;
  const finalTotal = subtotal + gstAmount;
  
  return {
    baseCostTotal,
    addOnsCostTotal,
    maintenanceCostTotal,
    paymentAdjustment,
    subtotal,
    gstAmount,
    finalTotal
  };
}

function updateCostBreakdown() {
  const totals = calculateProjectTotals();
  
  if (elements.baseCostTotal) elements.baseCostTotal.textContent = formatCurrency(totals.baseCostTotal);
  if (elements.addOnsCostTotal) elements.addOnsCostTotal.textContent = formatCurrency(totals.addOnsCostTotal);
  if (elements.maintenanceCostTotal) elements.maintenanceCostTotal.textContent = `${formatCurrency(totals.maintenanceCostTotal)}/month`;
  if (elements.paymentAdjustment) elements.paymentAdjustment.textContent = formatCurrency(totals.paymentAdjustment);
  if (elements.subtotal) elements.subtotal.textContent = formatCurrency(totals.subtotal);
  if (elements.gstAmount) elements.gstAmount.textContent = formatCurrency(totals.gstAmount);
  if (elements.finalTotal) elements.finalTotal.textContent = formatCurrency(totals.finalTotal);
}

function updateItemCount() {
  if (elements.itemCount) {
    elements.itemCount.textContent = state.selectedServices.length;
  }
}

function removeService(index) {
  state.selectedServices.splice(index, 1);
  console.log('Service removed. Remaining services:', state.selectedServices.length);
  renderSelectedServices();
}

// PDF Generation
function generatePDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert('PDF library not loaded. Please refresh the page and try again.');
    return;
  }
  
  if (state.selectedServices.length === 0) {
    alert('Please add some services to your estimate before generating a PDF.');
    return;
  }
  
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  const totals = calculateProjectTotals();
  const contractDuration = elements.contractDuration ? elements.contractDuration.value : '12';
  const paymentMethod = elements.paymentMethod ? elements.paymentMethod.value : 'milestone';
  
  // Header
  doc.setFontSize(20);
  doc.text('Service Cost Estimate', 20, 30);
  
  doc.setFontSize(12);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 45);
  doc.text(`Currency: ${state.currentCurrency}`, 20, 55);
  doc.text(`Contract Duration: ${contractDuration} months`, 20, 65);
  doc.text(`Payment Method: ${paymentMethod === 'milestone' ? 'Milestone-based' : 'EMI (8% surcharge)'}`, 20, 75);
  
  // Services breakdown
  let yPosition = 95;
  doc.setFontSize(14);
  doc.text('Services Breakdown:', 20, yPosition);
  yPosition += 15;
  
  doc.setFontSize(10);
  state.selectedServices.forEach((service, index) => {
    const serviceTotal = calculateServiceTotal(service);
    const baseCost = service.baseCostUSD * service.scaleMultipliers[service.selectedScale];
    const addonsCost = service.selectedAddOns ? service.selectedAddOns.reduce((sum, addon) => sum + addon.costUSD, 0) : 0;
    
    doc.text(`${index + 1}. ${service.name}`, 25, yPosition);
    yPosition += 8;
    doc.text(`   Scale: ${service.selectedScale}`, 30, yPosition);
    yPosition += 6;
    doc.text(`   Description: ${service.scaleDetails[service.selectedScale]}`, 30, yPosition);
    yPosition += 6;
    doc.text(`   Base Cost: ${formatCurrency(baseCost)}`, 30, yPosition);
    yPosition += 6;
    if (service.selectedAddOns && service.selectedAddOns.length > 0) {
      doc.text(`   Add-ons: ${service.selectedAddOns.map(a => a.name).join(', ')} - ${formatCurrency(addonsCost)}`, 30, yPosition);
      yPosition += 6;
    }
    doc.text(`   Monthly Maintenance: ${formatCurrency(service.monthlyMaintenance[service.selectedScale])}/month`, 30, yPosition);
    yPosition += 6;
    doc.text(`   Service Total: ${formatCurrency(serviceTotal)}`, 30, yPosition);
    yPosition += 12;
    
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 30;
    }
  });
  
  // Cost summary
  yPosition += 10;
  doc.setFontSize(12);
  doc.text('Cost Summary:', 20, yPosition);
  yPosition += 15;
  
  doc.setFontSize(10);
  doc.text(`Base Cost Total: ${formatCurrency(totals.baseCostTotal)}`, 25, yPosition);
  yPosition += 8;
  doc.text(`Add-ons Total: ${formatCurrency(totals.addOnsCostTotal)}`, 25, yPosition);
  yPosition += 8;
  doc.text(`Monthly Maintenance Total: ${formatCurrency(totals.maintenanceCostTotal)}/month`, 25, yPosition);
  yPosition += 8;
  doc.text(`Payment Method Adjustment: ${formatCurrency(totals.paymentAdjustment)}`, 25, yPosition);
  yPosition += 8;
  doc.text(`Subtotal: ${formatCurrency(totals.subtotal)}`, 25, yPosition);
  yPosition += 8;
  doc.text(`GST (18%): ${formatCurrency(totals.gstAmount)}`, 25, yPosition);
  yPosition += 12;
  
  doc.setFontSize(14);
  doc.text(`Final Total: ${formatCurrency(totals.finalTotal)}`, 25, yPosition);
  
  yPosition += 20;
  doc.setFontSize(10);
  doc.text('Note: Total amount can be negotiated up to 15%', 25, yPosition);
  
  // Save the PDF
  doc.save(`service-estimate-${new Date().toISOString().split('T')[0]}.pdf`);
  
  console.log('PDF generated successfully');
}

// Initialize DOM elements
function initializeElements() {
  console.log('Initializing elements...');
  
  elements = {
    currencySelect: document.getElementById('currency'),
    searchInput: document.getElementById('searchInput'),
    categoryFilters: document.getElementById('categoryFilters'),
    servicesGrid: document.getElementById('servicesGrid'),
    selectedServicesContainer: document.getElementById('selectedServices'),
    itemCount: document.getElementById('itemCount'),
    settingsPanel: document.getElementById('settingsPanel'),
    costBreakdown: document.getElementById('costBreakdown'),
    estimationActions: document.getElementById('estimationActions'),
    
    // Modal elements
    serviceModal: document.getElementById('serviceModal'),
    modalServiceName: document.getElementById('modalServiceName'),
    modalServiceDescription: document.getElementById('modalServiceDescription'),
    modalFeaturesList: document.getElementById('modalFeaturesList'),
    modalScale: document.getElementById('modalScale'),
    scaleDescription: document.getElementById('scaleDescription'),
    modalAddons: document.getElementById('modalAddons'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalCancelBtn: document.getElementById('modalCancelBtn'),
    modalAddBtn: document.getElementById('modalAddBtn'),
    
    // Preview elements
    previewBaseCost: document.getElementById('previewBaseCost'),
    previewAddons: document.getElementById('previewAddons'),
    previewMaintenance: document.getElementById('previewMaintenance'),
    previewTotal: document.getElementById('previewTotal'),
    
    // Settings elements
    paymentMethod: document.getElementById('paymentMethod'),
    contractDuration: document.getElementById('contractDuration'),
    
    // Breakdown elements
    baseCostTotal: document.getElementById('baseCostTotal'),
    addOnsCostTotal: document.getElementById('addOnsCostTotal'),
    maintenanceCostTotal: document.getElementById('maintenanceCostTotal'),
    paymentAdjustment: document.getElementById('paymentAdjustment'),
    subtotal: document.getElementById('subtotal'),
    gstAmount: document.getElementById('gstAmount'),
    finalTotal: document.getElementById('finalTotal'),
    
    // Actions
    generatePdfBtn: document.getElementById('generatePdfBtn')
  };
  
  // Check for missing elements and log them
  const missingElements = [];
  Object.keys(elements).forEach(key => {
    if (!elements[key]) {
      missingElements.push(key);
    }
  });
  
  if (missingElements.length > 0) {
    console.warn('Missing elements:', missingElements);
  } else {
    console.log('All elements found successfully');
  }
  
  console.log('Elements initialized');
}

// Event Listeners
function initializeEventListeners() {
  console.log('Initializing event listeners...');
  
  // Currency change
  if (elements.currencySelect) {
    elements.currencySelect.addEventListener('change', (e) => {
      state.currentCurrency = e.target.value;
      console.log('Currency changed to:', state.currentCurrency);
      renderServices();
      renderSelectedServices();
    });
  }
  
  // Search
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', debounce((e) => {
      state.searchTerm = e.target.value;
      console.log('Search term:', state.searchTerm);
      filterServices();
    }, 300));
  }
  
  // Modal events
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener('click', closeServiceModal);
  }
  if (elements.modalCancelBtn) {
    elements.modalCancelBtn.addEventListener('click', closeServiceModal);
  }
  if (elements.modalAddBtn) {
    elements.modalAddBtn.addEventListener('click', addServiceToEstimate);
  }
  
  // Modal scale and addon changes
  if (elements.modalScale) {
    elements.modalScale.addEventListener('change', updateModalPreview);
  }
  if (elements.modalAddons) {
    elements.modalAddons.addEventListener('change', updateModalPreview);
  }
  
  // Modal backdrop click
  if (elements.serviceModal) {
    elements.serviceModal.addEventListener('click', (e) => {
      if (e.target === elements.serviceModal || e.target.classList.contains('modal__backdrop')) {
        closeServiceModal();
      }
    });
  }
  
  // Settings changes
  if (elements.paymentMethod) {
    elements.paymentMethod.addEventListener('change', updateCostBreakdown);
  }
  if (elements.contractDuration) {
    elements.contractDuration.addEventListener('change', updateCostBreakdown);
  }
  
  // PDF generation
  if (elements.generatePdfBtn) {
    elements.generatePdfBtn.addEventListener('click', generatePDF);
    console.log('PDF generation button listener attached');
  } else {
    console.warn('PDF generation button not found');
  }
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.serviceModal && !elements.serviceModal.classList.contains('hidden')) {
      closeServiceModal();
    }
  });
  
  console.log('Event listeners initialized');
}

// Make openServiceModal globally available for inline onclick handlers
window.openServiceModal = openServiceModal;

// Initialization
function initialize() {
  console.log('Initializing application...');
  
  initializeElements();
  renderCategoryFilters();
  renderServices();
  renderSelectedServices();
  initializeEventListeners();
  
  console.log('Application initialized successfully');
}

// Start the application
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded, starting application...');
  initialize();
});