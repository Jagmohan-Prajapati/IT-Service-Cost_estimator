# IT Services Cost Estimation Platform Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS platforms like Linear, Notion, and enterprise tools like Salesforce for their clean, professional aesthetics combined with powerful functionality.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Light Mode: 234 25% 20% (deep navy blue)
- Dark Mode: 234 35% 85% (light blue-white)

**Secondary/Accent:**
- 200 80% 60% (bright blue for CTAs and highlights)
- 120 40% 50% (green for success states and positive pricing)

**Neutral Grays:**
- Light backgrounds: 220 15% 97%
- Dark backgrounds: 220 15% 8%
- Text grays ranging from 220 10% 20% to 220 10% 80%

### Typography
- **Primary Font**: Inter (Google Fonts) - clean, professional, excellent readability
- **Headings**: 600-700 weight, ranging from text-4xl to text-lg
- **Body Text**: 400-500 weight, text-base and text-sm
- **UI Elements**: 500 weight for buttons and labels

### Layout System
**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, and 16 for consistent spacing (p-4, m-8, gap-6, etc.)
- Container max-width: 7xl (1280px)
- Grid system: 12-column responsive grid
- Card padding: p-6 for desktop, p-4 for mobile

### Component Library

**Navigation:**
- Clean horizontal navbar with company logo, main navigation links, and user account dropdown
- Sticky navigation with subtle shadow on scroll
- Mobile: Hamburger menu with slide-out drawer

**Service Cards:**
- Clean white/dark cards with subtle shadows (shadow-sm)
- Service category icons (using Heroicons)
- Clear service titles, brief descriptions, and "Configure" CTAs
- Hover states with gentle elevation (shadow-md)

**Configuration Modal:**
- Large overlay modal (max-w-4xl) with backdrop blur
- Tabbed interface for different configuration options
- Real-time price updates in a sticky summary panel
- Form inputs with clean styling and clear labels

**Search & Filters:**
- Prominent search bar with search icon
- Filter chips for categories, project size, delivery model
- Clear filter states with easy removal

**Data Displays:**
- Clean tables with alternating row colors
- Progress indicators for estimation completion
- Currency selection dropdown with flag icons
- Cost breakdown components with clear hierarchy

**Forms:**
- Consistent input styling with focus states
- Toggle switches for add-ons and options
- Slider components for scale selection
- Clear validation states

## Professional Business Aesthetic
- **Trustworthy**: Use of corporate blues and clean typography
- **Efficient**: Minimal visual noise, clear information hierarchy
- **Modern**: Subtle shadows, rounded corners (rounded-lg), clean spacing
- **Accessible**: High contrast ratios, clear focus states, scalable text

## Images
**Icons Only Approach**: This application focuses on functionality over imagery. Use:
- Category icons for different IT services (server, code, chart icons from Heroicons)
- Currency flag icons in the currency selector
- Company logo in navigation
- No large hero images - the interface is the hero

## Content Management Interface
- Clean admin panel with the same design language
- Drag-and-drop service reordering
- Inline editing capabilities
- Clear save/cancel states
- Form-based service configuration with preview modes

This design creates a professional, trustworthy platform that efficiently guides users through complex IT service estimation while maintaining visual clarity and ease of use.