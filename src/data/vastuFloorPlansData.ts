export interface VastuRoomDetail {
  room: string;
  zone: string;
  direction: 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | 'N' | 'Center';
  dimensions: string;
  vastuReason: string;
}

export interface VastuFloorPlan {
  id: string;
  title: string;
  type: 'home' | 'apartment' | 'duplex';
  typeLabel: string;
  orientation: 'East Facing' | 'North Facing' | 'West Facing' | 'South-East Facing' | 'North-East Facing';
  dimensions: string;
  builtUpAreaSqFt: number;
  configuration: '2 BHK' | '3 BHK' | '4 BHK' | 'Duplex Villa' | 'Apartment Floor';
  overview: string;
  blueprintImage: string;
  vastuHighlights: string[];
  roomDetails: VastuRoomDetail[];
  bylawCompliant: boolean;
  idealFor: string;
}

export interface VastuDirectionGuide {
  direction: string;
  code: 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | 'N' | 'Center';
  zoneName: string;
  element: string;
  color: string;
  recommendedHome: string[];
  recommendedApartment: string[];
  strictAvoid: string[];
  spiritualSignificance: string;
}

export const VASTU_FLOOR_PLANS: VastuFloorPlan[] = [
  {
    id: 'vastu-home-1',
    title: 'East-Facing 3 BHK Independent Home Plan',
    type: 'home',
    typeLabel: 'Independent Home',
    orientation: 'East Facing',
    dimensions: "30' x 50' Plot",
    builtUpAreaSqFt: 1450,
    configuration: '3 BHK',
    overview: 'Scientifically engineered single-family residence with main entry positioned in Jayanta / Indra zone (East). Provides ideal cross-ventilation, separate Mandir in Ishanya, and an ergonomic modular kitchen in Agneya.',
    blueprintImage: '/assets/plans/floor_plan_3bhk.jpg',
    vastuHighlights: [
      'Main Entrance in Auspicious East Zone (Indra Pada)',
      'Pooja Room in North-East (Ishanya) with Morning Sunlight',
      'Agni Kitchen in South-East with East-Facing Cooking Platform',
      'Master Bedroom in South-West (Nairutya) for Stability',
      'Open Brahmasthan Hall without Load-bearing Columns'
    ],
    roomDetails: [
      { room: 'Pooja Room', zone: 'Ishanya', direction: 'NE', dimensions: "6'0\" x 6'0\"", vastuReason: 'Pure divine energy channel for spiritual peace & clarity' },
      { room: 'Kitchen', zone: 'Agneya', direction: 'SE', dimensions: "10'0\" x 8'6\"", vastuReason: 'Fire element (Agni Tattva) promotes health & family vitality' },
      { room: 'Master Bedroom', zone: 'Nairutya', direction: 'SW', dimensions: "14'0\" x 12'0\"", vastuReason: 'Earth element provides sound sleep, wealth stability & leadership' },
      { room: 'Drawing & Living Hall', zone: 'Purva / North', direction: 'E', dimensions: "16'6\" x 14'0\"", vastuReason: 'Welcomes positive cosmic rays and visitors with warmth' },
      { room: 'Children / Guest Bed', zone: 'Vayavya', direction: 'NW', dimensions: "12'0\" x 11'0\"", vastuReason: 'Air element (Vayu) enhances study focus and freshness' },
      { room: 'Staircase', zone: 'Dakshin', direction: 'S', dimensions: "8'0\" x 14'0\"", vastuReason: 'Clockwise climbing heavy structure stabilizes southern zone' }
    ],
    bylawCompliant: true,
    idealFor: 'Standard residential plots in Ranchi (Kanke, Morabadi, Bariatu, Doranda)'
  },
  {
    id: 'vastu-home-2',
    title: 'North-Facing 4 BHK Luxury Duplex Villa Plan',
    type: 'duplex',
    typeLabel: 'Duplex Villa',
    orientation: 'North Facing',
    dimensions: "40' x 60' Plot",
    builtUpAreaSqFt: 3400,
    configuration: '4 BHK',
    overview: 'Double-story luxury villa plan featuring a grand double-height foyer in the North, central open-to-sky courtyard (Brahmasthan), private prayer sanctuary in Ishanya, and an exclusive master suite in the South-West.',
    blueprintImage: '/assets/plans/floor_plan_duplex.jpg',
    vastuHighlights: [
      'Authentic Brahmasthan Courtyard with skylight illumination',
      'Ishanya Water Cascade & Pooja Temple on ground level',
      'Master Suites on both floors anchored in South-West (Nairutya)',
      'Internal Clockwise Teak Staircase in Southern quadrant',
      'Rainwater Harvesting pit precisely in North-East corner'
    ],
    roomDetails: [
      { room: 'Grand Mandir', zone: 'Ishanya', direction: 'NE', dimensions: "8'0\" x 8'0\"", vastuReason: 'North-East cornerstone creates the spiritual anchor of the villa' },
      { room: 'Island Kitchen & Pantry', zone: 'Agneya', direction: 'SE', dimensions: "14'0\" x 10'0\"", vastuReason: 'Fire zone with direct morning light and utility backyard' },
      { room: 'Ground Master Bed', zone: 'Nairutya', direction: 'SW', dimensions: "16'0\" x 14'0\"", vastuReason: 'Ideal for parents / family heads ensuring authority & stability' },
      { room: 'Formal Drawing Lounge', zone: 'North-East / North', direction: 'N', dimensions: "18'0\" x 15'0\"", vastuReason: 'Welcomes visitors without intruding on inner family sanctuary' },
      { room: 'Brahmasthan Courtyard', zone: 'Center', direction: 'Center', dimensions: "14'0\" x 14'0\"", vastuReason: 'Zero structural column obstructions; radiates energy to all rooms' },
      { room: 'Upper Family Lounge', zone: 'West', direction: 'W', dimensions: "15'0\" x 12'0\"", vastuReason: 'Varuna zone fosters harmonious private family conversations' }
    ],
    bylawCompliant: true,
    idealFor: 'Spacious independent plots in Morabadi, Kanke Road & Bariatu'
  },
  {
    id: 'vastu-home-3',
    title: 'West-Facing 3 BHK Compact House Blueprint',
    type: 'home',
    typeLabel: 'Independent Home',
    orientation: 'West Facing',
    dimensions: "25' x 45' Plot",
    builtUpAreaSqFt: 1250,
    configuration: '3 BHK',
    overview: 'Specialized West-facing Vastu solution designed for compact residential plots. Features correct entrance positioning in the 4th/5th Pada (Sugriva / Pushpadanta), preserving pristine Ishanya for Mandir and Agneya for Kitchen.',
    blueprintImage: '/assets/plans/floor_plan_vastu.jpg',
    vastuHighlights: [
      'West Entrance in Auspicious Sugriva/Pushpadanta Pada',
      'Uncompromised North-East corner dedicated to Mandir & Study',
      'South-East kitchen avoiding typical West-facing Vastu mistakes',
      'Master Bedroom in South-West with heavy wardrobe placement',
      'Compact staircase in Southern quadrant with external access'
    ],
    roomDetails: [
      { room: 'Covered Porch & Entry', zone: 'West Pada', direction: 'W', dimensions: "12'0\" x 10'0\"", vastuReason: 'Calculated Pada placement negates West-facing doshas' },
      { room: 'Pooja Sanctum', zone: 'Ishanya', direction: 'NE', dimensions: "5'6\" x 5'6\"", vastuReason: 'Preserved pure North-East corner undisturbed by toilets' },
      { room: 'Open Kitchen & Dining', zone: 'Agneya', direction: 'SE', dimensions: "14'0\" x 9'0\"", vastuReason: 'Maintains elemental Agni balance even with West-facing plot' },
      { room: 'Master Bedroom', zone: 'Nairutya', direction: 'SW', dimensions: "13'0\" x 12'0\"", vastuReason: 'Maximum stability with headboard facing South' },
      { room: 'Second Bedroom', zone: 'North', direction: 'N', dimensions: "11'6\" x 10'6\"", vastuReason: 'North orientation brings prosperity and clear daylight' }
    ],
    bylawCompliant: true,
    idealFor: 'Compact street plots in Harmu Housing Colony, Namkum & Ratu Road'
  },
  {
    id: 'vastu-home-4',
    title: 'North-Facing 3 BHK Modern Family House Plan',
    type: 'home',
    typeLabel: 'Independent Home',
    orientation: 'North Facing',
    dimensions: "32' x 48' Plot",
    builtUpAreaSqFt: 1540,
    configuration: '3 BHK',
    overview: 'High-demand North-facing AutoCAD 2D home plan with entrance placed in Som/Mukhya zone. Incorporates spacious front portico, dedicated Pooja room in North-East, and an expansive living area adjoining the central dining.',
    blueprintImage: '/assets/plans/floor_plan_3bhk.jpg',
    vastuHighlights: [
      'North Entrance in Som/Mukhya Pada for wealth & good fortune',
      'Dedicated Pooja Room in North-East (Ishanya) with east-facing deities',
      'Agneya Kitchen with independent utility yard & store room',
      'Master Bedroom Suite in South-West (Nairutya) with attached bathroom in West',
      'Car porch in North-West allowing clockwise vehicle turning'
    ],
    roomDetails: [
      { room: 'Living & Drawing Room', zone: 'North / Purva', direction: 'N', dimensions: "17'0\" x 13'6\"", vastuReason: 'Open Northern light enhances clarity and hospitality' },
      { room: 'Mandir / Pooja', zone: 'Ishanya', direction: 'NE', dimensions: "6'6\" x 6'0\"", vastuReason: 'Supreme spiritual conduit for daily meditation & prayers' },
      { room: 'Modular Kitchen', zone: 'Agneya', direction: 'SE', dimensions: "11'6\" x 9'0\"", vastuReason: 'Fire quadrant keeps cooking energy harmonious and healthy' },
      { room: 'Master Bedroom', zone: 'Nairutya', direction: 'SW', dimensions: "14'6\" x 12'6\"", vastuReason: 'Anchors head of family with grounding earth energy' },
      { room: 'Children Bedroom', zone: 'Vayavya', direction: 'NW', dimensions: "12'0\" x 11'0\"", vastuReason: 'Air quadrant fosters quick learning and active mind' }
    ],
    bylawCompliant: true,
    idealFor: 'Residential plots in Lalpur, Morabadi, Dhurwa & Kokar'
  },
  {
    id: 'vastu-home-5',
    title: 'South-Facing 3 BHK Scientific Vastu Solution Plan',
    type: 'home',
    typeLabel: 'Independent Home',
    orientation: 'South-East Facing',
    dimensions: "30' x 55' Plot",
    builtUpAreaSqFt: 1650,
    configuration: '3 BHK',
    overview: 'Engineered specifically for South-facing plots using Vedic Pada partition. The main gate is calculated strictly in the 3rd/4th Pada (Grihakshat or Vithatha), dispelling South-facing myths while unlocking immense success and prestige.',
    blueprintImage: '/assets/plans/floor_plan_vastu.jpg',
    vastuHighlights: [
      'Main Entry calculated strictly in 4th Pada (Grihakshat)',
      'North & East zones kept open, light and airy for cosmic balance',
      'Kitchen positioned in South-East (Agni) with east-facing cooktop',
      'Master Bedroom in Nairutya (South-West) with higher floor plinth',
      'Underground Water Reservoir strictly in North-East quadrant'
    ],
    roomDetails: [
      { room: 'Main Entrance & Verandah', zone: 'Grihakshat Pada', direction: 'S', dimensions: "10'0\" x 8'0\"", vastuReason: 'Neutralizes negative southern inflections into fame & fortune' },
      { room: 'Prayer Sanctuary', zone: 'Ishanya', direction: 'NE', dimensions: "7'0\" x 6'0\"", vastuReason: 'Unobstructed North-East corner for divine blessings' },
      { room: 'Agneya Kitchen', zone: 'South-East', direction: 'SE', dimensions: "10'6\" x 9'6\"", vastuReason: 'Traditional fire element orientation with morning sunlight' },
      { room: 'Master Suite', zone: 'Nairutya', direction: 'SW', dimensions: "15'0\" x 13'0\"", vastuReason: 'Highest and heaviest room in the house as per Vastu Shastra' },
      { room: 'Staircase', zone: 'South / West', direction: 'S', dimensions: "7'6\" x 14'0\"", vastuReason: 'Clockwise ascendancy stabilizes the southern boundary' }
    ],
    bylawCompliant: true,
    idealFor: 'South-road residential plots in Ranchi & surrounding regions'
  },
  {
    id: 'vastu-apt-1',
    title: 'North-Facing 2 BHK Modern Apartment Floor Plan',
    type: 'apartment',
    typeLabel: 'Apartment / Flat',
    orientation: 'North Facing',
    dimensions: "32' x 38' Flat Carpet",
    builtUpAreaSqFt: 1180,
    configuration: '2 BHK',
    overview: 'High-efficiency 2 BHK apartment floor schematic tailored for multi-story residential buildings. Features a Kuber-aligned North entrance, East-facing balcony for morning sunlight, and strict fire-quadrant kitchen layout.',
    blueprintImage: '/assets/plans/floor_plan_3bhk.jpg',
    vastuHighlights: [
      'North Main Entrance aligned to Kuber (Wealth & Prosperity)',
      'East Balcony granting abundant daylight & positive prana',
      'South-East Kitchen with service utility balcony',
      'Master Bedroom anchored in South-West with attached bath in West',
      'Zero Dark Corridors & cross-ventilated duct shafts'
    ],
    roomDetails: [
      { room: 'Main Foyer & Entry', zone: 'Kuber Zone', direction: 'N', dimensions: "6'6\" x 5'0\"", vastuReason: 'Attracts prosperity and financial abundance into the flat' },
      { room: 'Living & Dining', zone: 'Central North', direction: 'N', dimensions: "18'0\" x 12'6\"", vastuReason: 'Airy, illuminated gathering space with zero beam intrusions' },
      { room: 'Modular Kitchen', zone: 'Agneya', direction: 'SE', dimensions: "9'6\" x 8'0\"", vastuReason: 'Cooking platform facing East; exhaust towards South-East' },
      { room: 'Master Bedroom', zone: 'Nairutya', direction: 'SW', dimensions: "13'0\" x 11'6\"", vastuReason: 'South-West corner placement ensures calm restful rest' },
      { room: 'Kids Bedroom', zone: 'Vayavya', direction: 'NW', dimensions: "11'0\" x 10'6\"", vastuReason: 'Supports intellectual growth, alertness and dynamic movement' },
      { room: 'Sunrise Balcony', zone: 'East', direction: 'E', dimensions: "12'0\" x 4'6\"", vastuReason: 'Maximizes early morning ultraviolet germicidal sunlight' }
    ],
    bylawCompliant: true,
    idealFor: 'Builder floor apartments & high-rise societies in Lalpur, Harmu & Hinoo'
  },
  {
    id: 'vastu-apt-2',
    title: 'East-Facing 3 BHK Premium Apartment Layout',
    type: 'apartment',
    typeLabel: 'Apartment / Flat',
    orientation: 'East Facing',
    dimensions: "42' x 45' Flat Carpet",
    builtUpAreaSqFt: 1680,
    configuration: '3 BHK',
    overview: 'Spacious luxury flat plan engineered with 100% Vastu compliance for apartment living. Includes separate servant/utility entry, dedicated Pooja niche, 3 en-suite bathrooms, and cross-ventilation balconies.',
    blueprintImage: '/assets/plans/floor_plan_duplex.jpg',
    vastuHighlights: [
      'East Entrance opening into an unobstructed positive foyer',
      'Dedicated Ishanya Pooja space with clean North-East orientation',
      'Agneya modular kitchen with separate dry & wet utility balconies',
      'Owner Master Suite in South-West with walk-in wardrobe',
      'Bathrooms positioned in North-West (Vayavya) & West zones'
    ],
    roomDetails: [
      { room: 'Foyer & Pooja Niche', zone: 'Ishanya', direction: 'NE', dimensions: "7'0\" x 5'6\"", vastuReason: 'Fosters spiritual vibration at the very entry of the flat' },
      { room: 'Spacious Living & Dining', zone: 'East', direction: 'E', dimensions: "22'0\" x 14'6\"", vastuReason: 'Vibrant natural daylight flow across sunrise hours' },
      { room: 'Parallel Modular Kitchen', zone: 'Agneya', direction: 'SE', dimensions: "11'0\" x 9'0\"", vastuReason: 'Correct fire quadrant ensures positive meal preparation energy' },
      { room: 'Master Bedroom Suite', zone: 'Nairutya', direction: 'SW', dimensions: "15'6\" x 13'0\"", vastuReason: 'South-West positioning shields master energy and sound sleep' },
      { room: 'Children Bedroom', zone: 'Vayavya', direction: 'NW', dimensions: "13'0\" x 11'6\"", vastuReason: 'Good circulation and calm environment for children education' },
      { room: 'Guest Bedroom', zone: 'West', direction: 'W', dimensions: "12'0\" x 11'0\"", vastuReason: 'Balanced zone for visiting relatives and multipurpose usage' }
    ],
    bylawCompliant: true,
    idealFor: 'Luxury apartment towers & residential societies in Ranchi'
  },
  {
    id: 'vastu-apt-3',
    title: 'Typical Multi-Unit Apartment Floor Plan (G+4)',
    type: 'apartment',
    typeLabel: 'Multi-Unit Apartment',
    orientation: 'North-East Facing',
    dimensions: "60' x 80' Stilt+4 Floor",
    builtUpAreaSqFt: 4800,
    configuration: 'Apartment Floor',
    overview: 'Complete architectural floor plate containing four Vastu-compliant 2 & 3 BHK flats per floor. Engineered with central lift & fire staircase core, dedicated light/ventilation courts, and zero toilet overlap above kitchens.',
    blueprintImage: '/assets/plans/floor_plan_vastu.jpg',
    vastuHighlights: [
      'All 4 units feature independent Vastu-compliant entrances',
      'Central Elevator & Staircase core in South/West structural zone',
      'Dedicated vertical plumbing shafts ensuring no cross-contamination',
      'Stilt level parking designed for smooth clockwise vehicular turning',
      'Rooftop solar and overhead tank placed precisely in South-West'
    ],
    roomDetails: [
      { room: 'Unit A (3 BHK)', zone: 'North-East Wing', direction: 'NE', dimensions: '1,450 sq ft', vastuReason: 'Premium corner unit with sunrise balconies and North entry' },
      { room: 'Unit B (2 BHK)', zone: 'South-East Wing', direction: 'SE', dimensions: '1,050 sq ft', vastuReason: 'East entrance with optimal kitchen ventilation' },
      { room: 'Unit C (3 BHK)', zone: 'South-West Wing', direction: 'SW', dimensions: '1,380 sq ft', vastuReason: 'Heavy stability zone with spacious master suite in Nairutya' },
      { room: 'Unit D (2 BHK)', zone: 'North-West Wing', direction: 'NW', dimensions: '1,120 sq ft', vastuReason: 'North entrance with guest bedrooms in Vayavya' },
      { room: 'Staircase & Lift Core', zone: 'South-Center', direction: 'S', dimensions: "16'0\" x 12'0\"", vastuReason: 'Heavy vertical spine stabilizes building vibration' }
    ],
    bylawCompliant: true,
    idealFor: 'Builders, developers & plot owners in Ranchi looking for maximum saleable carpet area'
  }
];

export const VASTU_DIRECTION_GUIDES: VastuDirectionGuide[] = [
  {
    direction: 'North-East',
    code: 'NE',
    zoneName: 'Ishanya (ईशान)',
    element: 'Water & Divine Energy (जल)',
    color: 'from-sky-500 to-blue-600',
    recommendedHome: ['Pooja / Prayer Room', 'Underground Water Sump', 'Open Porch / Lawn', 'Meditation Room'],
    recommendedApartment: ['Mandir Niche / Altar', 'Sunrise Balcony', 'Study Nook', 'Clean living area'],
    strictAvoid: ['Toilets / Septic Tanks', 'Kitchen (causes disputes)', 'Staircase (heavy weight)', 'Master Bedroom'],
    spiritualSignificance: 'The gateway of divine cosmic energy. Keeping this zone light, clean, and open invites peace, wisdom, and spiritual abundance.'
  },
  {
    direction: 'East',
    code: 'E',
    zoneName: 'Purva / Indra (पूर्व)',
    element: 'Solar Light & Vitality (सूर्य)',
    color: 'from-amber-400 to-orange-500',
    recommendedHome: ['Main Entrance (Indra Pada)', 'Drawing / Living Hall', 'Large Windows / Verandah', 'Study Room'],
    recommendedApartment: ['Main Entry Door', 'Living Balcony', 'Breakfast Counter', 'Family Lounge'],
    strictAvoid: ['Heavy Storage Lockers', 'Toilets without exhaust', 'Dark closed walls without openings'],
    spiritualSignificance: 'The direction of sunrise, truth, and enlightenment. Bestows social connections, health, and vitality upon family members.'
  },
  {
    direction: 'South-East',
    code: 'SE',
    zoneName: 'Agneya (आग्नेय)',
    element: 'Fire Energy (अग्नि)',
    color: 'from-rose-500 to-red-600',
    recommendedHome: ['Kitchen / Cooking Range', 'Electrical Meter Board', 'Inverter / Generator', 'Microwave / Oven'],
    recommendedApartment: ['Modular Kitchen (Platform facing East)', 'Utility / Washing Balcony', 'Geyser / Hob'],
    strictAvoid: ['Pooja Room', 'Underground Water Tank', 'Master Bedroom (causes agitation)', 'Main Entry (unless remedied)'],
    spiritualSignificance: 'Governed by Lord Agni. Directs digestive health, wealth generation, and cash flow stability in the household.'
  },
  {
    direction: 'South',
    code: 'S',
    zoneName: 'Dakshin / Yama (दक्षिण)',
    element: 'Earth & Stability (पृथ्वी)',
    color: 'from-amber-700 to-amber-900',
    recommendedHome: ['Staircase (Clockwise)', 'Heavy Wardrobe Walls', 'Master Bedroom Extension', 'Store Room'],
    recommendedApartment: ['Heavy Almirahs', 'Closed Balconies', 'Bed Headboard facing South', 'Pantry'],
    strictAvoid: ['Main Entrance (without Pada calculation)', 'Underground Water Sump', 'Open Courtyard'],
    spiritualSignificance: 'Provides fame, peace of mind, and sound sleep. The heavy southern wall acts as a shield against negative vibrations.'
  },
  {
    direction: 'South-West',
    code: 'SW',
    zoneName: 'Nairutya (नैऋत्य)',
    element: 'Earth & Gravitas (भूमि)',
    color: 'from-stone-600 to-stone-800',
    recommendedHome: ['Master Bedroom (Family Head)', 'Overhead Water Tank on Roof', 'Heavy Master Wardrobes', 'Safe / Cash Locker'],
    recommendedApartment: ['Primary Master Suite', 'Headboard of Bed facing South/West', 'Study Table for Head of Family'],
    strictAvoid: ['Main Entrance (causes financial drains)', 'Kitchen', 'Underground Water Tank', 'Pooja Room', 'Balconies / Cutouts'],
    spiritualSignificance: 'The corner of maximum stability, authority, and longevity. Anchors the energy of the head of the house.'
  },
  {
    direction: 'West',
    code: 'W',
    zoneName: 'Pashchim / Varuna (पश्चिम)',
    element: 'Water & Rain (वरुण)',
    color: 'from-indigo-600 to-blue-700',
    recommendedHome: ['Dining Room', 'Children Bedroom', 'Overhead Tank', 'Study Area', 'Attached Toilets'],
    recommendedApartment: ['Family Dining Hall', 'Kids Study Desk', 'En-suite Bathroom / Dressing Area'],
    strictAvoid: ['Underground Water Sump', 'Main Entrance in wrong Pada', 'Mandir / Pooja Room'],
    spiritualSignificance: 'Governed by Lord Varuna. Brings continuous business revenues, family bonding, and children academic success.'
  },
  {
    direction: 'North-West',
    code: 'NW',
    zoneName: 'Vayavya (वायव्य)',
    element: 'Air & Movement (वायु)',
    color: 'from-teal-500 to-emerald-600',
    recommendedHome: ['Guest Bedroom', 'Children / Daughter Bed', 'Bathroom & Toilets', 'Finished Goods / Car Parking'],
    recommendedApartment: ['Secondary Bedroom', 'Common Washroom with Duct', 'Utility & Washing Machine', 'Shoe Rack'],
    strictAvoid: ['Pooja Room', 'Master Bedroom for Family Elder', 'Heavy Permanent Underground Storage'],
    spiritualSignificance: 'Governed by the Wind God (Vayu). Enhances interpersonal relationships, helpful social contacts, and mental freshness.'
  },
  {
    direction: 'North',
    code: 'N',
    zoneName: 'Uttara / Kuber (उत्तर)',
    element: 'Water & Wealth (कुबेर)',
    color: 'from-emerald-500 to-green-600',
    recommendedHome: ['Main Entrance (Kuber Pada)', 'Cash Locker / Vault', 'Open Lawn / Balcony', 'Living Lounge'],
    recommendedApartment: ['Main Entry Door', 'Living Room Balcony', 'Safe Cabinet', 'Mirror Placements'],
    strictAvoid: ['Toilets / Septic Tank', 'Heavy Overhead Water Tank', 'Kitchen', 'Cluttered Storage'],
    spiritualSignificance: 'Ruled by Lord Kubera and Mercury (Budh). The primary direction for earning wealth, career promotions, and prosperity.'
  },
  {
    direction: 'Center',
    code: 'Center',
    zoneName: 'Brahmasthan (ब्रह्मस्थान)',
    element: 'Space / Ether (आकाश)',
    color: 'from-pink-500 to-rose-600',
    recommendedHome: ['Open Living Hall / Courtyard', 'Dining Space', 'Skylight Cutout', 'Zero Structural Columns'],
    recommendedApartment: ['Open Hallway', 'Central Circulation Core', 'Light Chandeliers / Flush Lighting'],
    strictAvoid: ['Heavy Columns / Beams', 'Staircase', 'Kitchen / Cooking Range', 'Toilets / Septic Pit', 'Heavy Storage'],
    spiritualSignificance: 'The heart and lung of the building where Lord Brahma resides. Keeping the center uncluttered allows energy to circulate freely.'
  }
];
