import { ServiceItem, PortfolioProject, WhyChoosePillar } from '../types';

export const BRAND_CONFIG = {
  companyName: 'Pinaka Structure Studio',
  ownerName: 'Saurabh Kumar',
  role: 'Principal Architectural Designer & Structural Lead',
  address: 'Ranchi, Jharkhand, India',
  city: 'Ranchi',
  state: 'Jharkhand',
  phone: '+91 7909092464',
  phoneRaw: '+917909092464',
  whatsappNumber: '917909092464',
  email: 'saurabhsoni.pinaka@gmail.com',
  workingHours: 'Mon – Sat: 9:00 AM – 8:00 PM (IST)',
  heroHeadline: 'Transforming Spaces into Structural Masterpieces',
  heroSubheadline: 'Premier 2D/3D Architecture, Duplex, Apartment & Interior/Exterior Design Studio.',
  experienceYears: '8+ Years of Craftsmanship',
  projectsCompleted: '120+',
  satisfactionRate: '99.4%',
  serviceAreas: ['Ranchi (Kanke, Morabadi, Bariatu, Lalpur, Doranda, Harmu)', 'Dhanbad', 'Bokaro', 'Jamshedpur', 'Hazaribagh', 'Pan-Jharkhand & Bihar'],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '2d-plans',
    title: '2D Floor Plans for Homes & Apartments (Vastu Aligned)',
    shortDesc: 'Millimeter-precise AutoCAD layout schematics for homes and apartments, scientifically aligned with Vedic Vastu Shastra and local building bylaws.',
    fullDesc: 'We draft comprehensive 2D floor plans for independent houses, villas, and residential apartments that convert raw dimensions into highly functional, positive energy spaces. Every drawing includes structural grid coordinates, Vastu-aligned Pooja (NE), Kitchen (SE), and Master Bedroom (SW) placements, column orientations, door-window schedules, and municipal sanction compatibility.',
    deliverables: [
      'AutoCAD DWG & Printable PDF Sets',
      'Vastu Shastra Zone Matrix & Directional Layout',
      'Building Bylaws & Setback Ready Drawings',
      'Column-Beam Centerline & Grid Coordinates',
      'Electrical, Plumbing & Ventilation Schematics'
    ],
    idealFor: 'Independent homes, duplexes, multi-unit apartments, builder floors',
    iconName: 'Compass',
    badge: 'Vastu & Bylaws Ready',
    projectTypeKey: '2D Home Plan (Vastu)'
  },
  {
    id: '3d-elevation',
    title: '3D Home & Elevation Design',
    shortDesc: 'Photorealistic front and multi-angle 3D elevation modeling that lets you visualize your dream facade before construction.',
    fullDesc: 'Experience your future home with photorealistic daylight and ambient dusk 3D elevations. We experiment with contemporary textures, CNC jali patterns, ACP claddings, warm timber finishes, and mood lighting so your building stands out as an architectural benchmark in your neighborhood.',
    deliverables: [
      'High-Resolution 4K Render Perspectives',
      'Daylight & Night Architectural Illumination Views',
      'Detailed Material & Texture Callout Sheets',
      '360° Facade Elevation Walkthroughs',
      'Front Boundary & Gate Elevation Styling'
    ],
    idealFor: 'Duplexes, single-family villas, modern bungalows, showroom frontages',
    iconName: 'Box',
    badge: '4K Photorealism',
    projectTypeKey: '3D Home & Elevation Design'
  },
  {
    id: 'apartment-duplex',
    title: 'Apartment & Duplex Planning',
    shortDesc: 'Holistic multi-level planning engineered for maximum carpet area efficiency, structural stability, and luxury living.',
    fullDesc: 'From G+1 duplexes to multi-family residential apartments, we engineer space allocations that balance privacy, natural ventilation, double-height cutouts, and parking logistics. Our structural design guarantees optimal load-path distribution while adhering strictly to IS code standards.',
    deliverables: [
      'Multi-Level Floor Stacking Plans',
      'Staircase & Elevator Core Engineering',
      'Basement & Stilt Car Parking Logistics',
      'Structural Load & Foundation Layouts',
      'Double-Height Living & Terrace Concepts'
    ],
    idealFor: 'G+1 to G+4 duplexes, builder floors, multi-unit apartment complexes',
    iconName: 'Building2',
    badge: 'Space Maximized',
    projectTypeKey: 'Apartment & Duplex Planning'
  },
  {
    id: 'luxury-interior',
    title: 'Luxury Interior Design',
    shortDesc: 'Bespoke residential and commercial interior spaces combining timeless textures, ergonomic joinery, and warm mood lighting.',
    fullDesc: 'We harmonize interior volumes using custom woodwork detailing, Italian marble layouts, false ceiling architectural coves, and bespoke cabinetry. We supply exhaustive Bill of Quantities (BOQ) and detailed carpenter drawings so execution proceeds without guesswork.',
    deliverables: [
      '3D Realistic Room-by-Room Renders',
      'False Ceiling & Architectural Cove Lighting Plans',
      'Custom Modular Kitchen & Wardrobe Joinery Details',
      'Material, Paint & Texture Swatch Specifications',
      'Comprehensive BOQ & Cost Estimation'
    ],
    idealFor: 'Living lounges, master bedroom suites, modular kitchens, corporate cabins',
    iconName: 'Sparkles',
    badge: 'Turnkey Detailing',
    projectTypeKey: 'Luxury Interior Design'
  },
  {
    id: 'exterior-concepts',
    title: 'High-End Exterior Concepts',
    shortDesc: 'Sophisticated landscape, terrace gardens, compound boundary walls, and modern facade enhancements.',
    fullDesc: 'Transform the curb appeal of your property with integrated exterior architecture. We design striking compound walls, grand entry gates, cantilevered pergolas, rooftop terrace lounges, and weather-resistant landscape elements tailored to Jharkhand’s climate.',
    deliverables: [
      'Boundary Wall & Main Gate Engineering',
      'Terrace Garden & Gazebo Structural Plans',
      'Driveway & Parking Paving Layouts',
      'Exterior Weather-Shield Material Selection',
      'Facade Accent Lighting Blueprint'
    ],
    idealFor: 'Modern villas, farmhouses, gated duplexes, commercial facades',
    iconName: 'Layers',
    badge: 'Signature Facades',
    projectTypeKey: 'High-End Exterior Concepts'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'The Morabadi Contemporary Duplex',
    category: '3d-models',
    categoryLabel: '3D Elevation',
    location: 'Morabadi, Ranchi',
    dimensions: "35' x 50' Plot",
    areaSqFt: 2850,
    description: 'A striking modern G+1 duplex featuring cantilevered balconies, charcoal-fluted louvers, and warm wooden soffits accented with linear LED illumination.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    features: ['Double-Height Living', 'Cantilevered Balcony', 'Night Mood Lighting', 'Charcoal & Teak Facade'],
    vastuCompliant: true,
    completionYear: '2025'
  },
  {
    id: 'proj-2',
    title: 'Kanke Road Villa 2D Master Blueprint',
    category: '2d-plans',
    categoryLabel: '2D Floor Plan',
    location: 'Kanke Road, Ranchi',
    dimensions: "40' x 60' East Facing",
    areaSqFt: 3600,
    description: 'Comprehensive 2D architectural master layout with Vastu-aligned Pooja room in North-East, open-concept island kitchen in South-East, and zero wasted corridors.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    features: ['Municipal Sanction Format', 'Cross-Ventilated Bedrooms', 'Vastu Grid Analyzed', 'Column-Beam Coordinates'],
    vastuCompliant: true,
    completionYear: '2025'
  },
  {
    id: 'proj-3',
    title: 'Bariatu Luxury Penthouse Suite',
    category: 'interiors',
    categoryLabel: 'Interior Design',
    location: 'Bariatu, Ranchi',
    dimensions: '4 BHK Penthouse',
    areaSqFt: 3200,
    description: 'Ultra-luxurious minimalist interior design featuring fluted charcoal marble backdrops, brushed bronze hardware, concealed cove lighting, and custom walk-in joinery.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    features: ['Acoustic Wooden Slats', 'Concealed LED Warm Coves', 'Italian Marble Flooring', 'Modular Ergonomic Kitchen'],
    vastuCompliant: true,
    completionYear: '2024'
  },
  {
    id: 'proj-4',
    title: 'The Hinoo Modernist Monolith Duplex',
    category: 'exteriors',
    categoryLabel: 'Exterior Design',
    location: 'Hinoo, Ranchi',
    dimensions: "30' x 45' Corner Plot",
    areaSqFt: 2400,
    description: 'Monolithic concrete-look textured facade complemented by charcoal metallic gate detailing, vertical greenery planters, and high-impact exterior architectural spots.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    features: ['Compound Wall & Gate Design', 'Weatherproof Textured Plaster', 'Vertical Garden Wall', 'Pergola Shading'],
    vastuCompliant: true,
    completionYear: '2025'
  },
  {
    id: 'proj-5',
    title: 'Lalpur Elite G+3 Apartment Planning',
    category: '3d-models',
    categoryLabel: '3D Elevation',
    location: 'Lalpur, Ranchi',
    dimensions: "50' x 80' Plot",
    areaSqFt: 7200,
    description: 'High-density residential apartment elevation with staggered terrace gardens, glass railings, textured stone cladding, and optimal stilt-parking vehicular turning radius.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    features: ['Stilt Parking Logistics', 'Terrace Pergola Deck', 'Double Glass Balustrades', 'Energy Efficient Shading'],
    vastuCompliant: true,
    completionYear: '2024'
  },
  {
    id: 'proj-6',
    title: 'Harmu Housing Colony 3 BHK Blueprint',
    category: '2d-plans',
    categoryLabel: '2D Floor Plan',
    location: 'Harmu, Ranchi',
    dimensions: "25' x 50' North Facing",
    areaSqFt: 1850,
    description: 'Smart compact duplex floor plan maximizing carpet ratio to 82%, featuring dedicated car parking, double-height skylight over dining, and separate utility balcony.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    features: ['High Carpet Area Ratio', 'Skylight Cutout Planning', 'Rainwater Harvesting Pit', 'Inverter & HVAC Routing'],
    vastuCompliant: true,
    completionYear: '2025'
  },
  {
    id: 'proj-7',
    title: 'Doranda Executive Lounge & Dining',
    category: 'interiors',
    categoryLabel: 'Interior Design',
    location: 'Doranda, Ranchi',
    dimensions: 'Living & Dining Hall',
    areaSqFt: 950,
    description: 'Sophisticated open-concept dining and living space featuring warm walnut paneling, champagne gold chandeliers, and customized CNC acoustic ceiling detail.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    features: ['Walnut Veneer Finishes', 'Zoned Dimmer Circuits', 'Custom Bar Counter', 'Floating TV Media Wall'],
    vastuCompliant: true,
    completionYear: '2024'
  },
  {
    id: 'proj-8',
    title: 'Ratu Road Contemporary Facade & Landscape',
    category: 'exteriors',
    categoryLabel: 'Exterior Design',
    location: 'Ratu Road, Ranchi',
    dimensions: "45' x 60' Plot",
    areaSqFt: 3400,
    description: 'Modern tropical exterior detailing with stone-finish water feature, automated sliding charcoal gate, and exterior ambient up-down wall wash lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    features: ['Stone Water Cascade', 'Automated Gate Elevation', 'Dusk-to-Dawn Illumination', 'Anti-Skid Granite Pavers'],
    vastuCompliant: true,
    completionYear: '2025'
  },
  {
    id: 'proj-9',
    title: 'Bariatu Heights 3 BHK Apartment 2D Vastu Plan',
    category: '2d-plans',
    categoryLabel: '2D Floor Plan',
    location: 'Bariatu, Ranchi',
    dimensions: '1,680 SQ FT • East Facing Flat',
    areaSqFt: 1680,
    description: 'Comprehensive 2D architectural AutoCAD layout for a high-rise 3 BHK apartment, with East entrance, fire-quadrant kitchen in South-East, and Vastu-harmonized master suite.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    features: ['East Entry Foyer', 'Pooja Sanctum in Ishanya', 'Master Suite in Nairutya', 'Cross Ventilation Shafts'],
    vastuCompliant: true,
    completionYear: '2025'
  },
  {
    id: 'proj-10',
    title: 'Namkum Greens 4 BHK Villa 2D Vastu Blueprint',
    category: '2d-plans',
    categoryLabel: '2D Floor Plan',
    location: 'Namkum, Ranchi',
    dimensions: "35' x 55' Plot • North Facing",
    areaSqFt: 2950,
    description: 'Complete 2D residential floor plan for an independent family villa engineered strictly to Vastu Shastra, featuring open Brahmasthan, Ishanya water sump, and clockwise southern staircase.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    features: ['Brahmasthan Open Courtyard', 'Agneya Fire Zone Kitchen', 'Nairutya Master Bedroom', 'Zero Bylaw Violations'],
    vastuCompliant: true,
    completionYear: '2025'
  }
];

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    id: 'custom-design',
    title: '100% Customized Designs',
    description: 'No generic copy-paste templates. Every blueprint and 3D elevation is meticulously custom-tailored to your exact plot dimensions, soil conditions, sunlight vectors, and family lifestyle requirements.',
    metric: '100%',
    metricLabel: 'Bespoke Blueprinting',
    iconName: 'Ruler'
  },
  {
    id: 'vastu-compliance',
    title: 'Vastu-Compliant Options',
    description: 'We blend scientific architectural planning with proven Vastu Shastra principles—ensuring optimum orientation for Ishanya (North-East), Agneya (South-East), and natural positive energy flow.',
    metric: '100%',
    metricLabel: 'Harmonious Energy Grid',
    iconName: 'Compass'
  },
  {
    id: 'budget-friendly',
    title: 'Budget-Friendly Execution',
    description: 'Our smart structural column layouts and exact material specifications eliminate on-site guesswork, saving up to 15-20% on structural concrete and steel wastage during construction.',
    metric: '15-20%',
    metricLabel: 'Material Cost Saved',
    iconName: 'ShieldCheck'
  },
  {
    id: 'timely-delivery',
    title: 'Timely Delivery Guaranteed',
    description: 'We respect your construction schedule. Initial 2D concept revisions are delivered within 3-5 working days, followed by rapid 3D elevation turnarounds so your contractor never waits.',
    metric: '3-5 Days',
    metricLabel: 'First Draft Turnaround',
    iconName: 'Clock'
  }
];

export const FAQS = [
  {
    q: 'How does the design process work with Pinaka Structure Studio in Ranchi?',
    a: 'We begin with an initial consultation where you share your plot dimensions, location, and requirements. Saurabh Kumar analyzes the site orientation, creates initial 2D conceptual layout drafts, refines them based on your feedback, and then moves to 3D elevation modeling and structural drawings.'
  },
  {
    q: 'Are your 2D floor plans compliant with municipal sanction rules in Ranchi?',
    a: 'Yes, absolutely. All 2D architectural drawings adhere to local building bylaws, setback rules, Floor Area Ratio (FAR), and municipal submission standards for Ranchi and surrounding Jharkhand jurisdictions.'
  },
  {
    q: 'Can you design 2D floor plans for both independent homes and multi-story apartments as per Vastu?',
    a: 'Yes, absolutely! We specialize in drafting AutoCAD 2D floor plans for independent bungalows, duplex homes, and multi-story residential apartments. For independent homes, we optimize the entire plot layout (Pooja in North-East, Kitchen in South-East, Master Suite in South-West, central Brahmasthan, and water sump placements). For apartments and flats, we balance entrance padas, fire-quadrant kitchen placements, and duct shafts so every unit enjoys optimal Vastu alignment and maximum carpet efficiency.'
  },
  {
    q: 'Can I request Vastu Shastra modifications to my house plan?',
    a: 'Yes! Vastu compliance is one of our primary specializations. We ensure main entrance alignment, kitchen placement (Agni corner), master bedroom orientation (South-West), and water tank coordinates match traditional principles without sacrificing modern aesthetics.'
  },
  {
    q: 'What deliverables do I receive for a 3D Elevation project?',
    a: 'You receive ultra-high-definition 4K rendered views from multiple angles (front, isometric, daylight, and dusk illumination), a detailed material specification sheet specifying paint codes, tiles, stone, and ACP cladding, and 2D working measurement drawings for your site mason.'
  },
  {
    q: 'How do I get a free consultation with Saurabh Kumar?',
    a: 'You can fill out the Enquiry form on this page, or directly call/WhatsApp Saurabh Kumar at +91 7909092464. We will review your plot details and provide immediate guidance.'
  }
];
