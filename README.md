# IT Services Cost Estimation Platform

## Overview
A professional web application for businesses to browse, configure, and estimate costs for IT services. Features visual search capabilities, interactive configuration tools, multi-currency support, and a clean, modern interface built with React and TypeScript.

## Architecture
- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript (prepared for future development)
- **Data**: Currently uses data based on provided JSON structure
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
6. Export estimates

## Technical Notes
- All components follow universal design guidelines with proper hover states, spacing, and accessibility
- Mock data is clearly marked with //todo: remove mock functionality comments
- Ready for integration with real data from the provided JSON file
- Currency conversion and content management prepared for future API integration
