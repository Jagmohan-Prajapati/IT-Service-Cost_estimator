# IT Services Cost Estimation Platform

## Overview
A professional web application for businesses to browse, configure, and estimate costs for IT services. Features visual search capabilities, interactive configuration tools, multi-currency support, and a clean, modern interface built with React and TypeScript.

## Architecture
- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript (prepared for future development)
- **Data**: Currently uses mock data based on provided JSON structure
- **Styling**: Professional design system with Inter font, consistent spacing, and proper dark/light mode support

## Key Features Implemented
- Service catalog with visual search and filtering
- Interactive service configuration modals with tabs for overview, configuration, pricing, and details
- Real-time cost estimation with currency conversion
- Professional header with currency selector and theme toggle
- Responsive design that works on desktop, tablet, and mobile
- Clean component architecture with proper TypeScript types

## User Workflow
1. Browse services in the catalog with search and filter options
2. Click "Configure Service" to open detailed configuration modal
3. Select project size, delivery model, and add-ons
4. Add configured services to estimate summary
5. View real-time cost calculations with currency conversion
6. Export estimates (prepared for future implementation)

## Technical Notes
- All components follow universal design guidelines with proper hover states, spacing, and accessibility
- Mock data is clearly marked with //todo: remove mock functionality comments
- Ready for integration with real data from the provided JSON file
- Currency conversion and content management prepared for future API integration

## Integration Notes
- Notion integration was dismissed by user - if content management via external service is needed in future, will need to store credentials as secrets or implement file-based content management
- Current implementation uses static mock data but is architected to easily connect to real data sources

## Recent Changes
- Built complete design prototype with all core components
- Implemented professional IT services theme with navy blue primary colors
- Added interactive service configuration with real-time pricing
- Created responsive layout with sticky estimate summary panel
- Added dark/light mode support with proper theme persistence

## Next Steps (for full application development)
- Connect to real IT services data from provided JSON
- Implement backend API routes for data management
- Add content management interface for easy updates
- Integrate real currency conversion API
- Add user authentication and saved estimates
- Implement PDF export functionality