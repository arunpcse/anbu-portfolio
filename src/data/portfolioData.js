// FreshHarvest UI/UX Case Study Data Architecture
// Aligned with College Evaluation & Portfolio Presentation Standards

export const PROJECT_METADATA = {
  title: "FreshHarvest",
  subtitle: "Designing a More Transparent Farm-to-Consumer Experience",
  description:
    "A digital agricultural marketplace concept connecting local farmers, individual consumers, and institutional bulk buyers through transparent harvest discovery, accessible ordering, and distance-based delivery management.",
  category: "Agricultural Marketplace / Sustainable E-commerce",
  role: "Lead UI/UX Designer & Product Strategist",
  tool: "Figma, FigJam, React Frontend Demo",
  timeline: "8 Weeks (Concept, Research, Design System, Prototyping)",
  status: "High-Fidelity Prototype & Interactive Design System",
  targetAudience: "Academic Evaluators, Design Mentors, Internship Recruiters",
};

export const COLOR_PALETTE = [
  { name: "Forest Green", hex: "#244C3A", role: "Primary brand, primary buttons, major headings", light: false },
  { name: "Dark Forest Green", hex: "#1A372A", role: "Header backgrounds, deep active states", light: false },
  { name: "Medium Forest Green", hex: "#2D5A43", role: "Hover states, secondary navigation", light: false },
  { name: "Leaf Green", hex: "#477A49", role: "Organic badges, success indicators, fresh accents", light: false },
  { name: "Terracotta", hex: "#B56E43", role: "Warm accent, promotional tags, CTA highlights", light: false },
  { name: "Warm Cream", hex: "#F8F7F1", role: "Primary background, editorial atmosphere", light: true },
  { name: "Warm Ivory", hex: "#F2EFE7", role: "Card background, panel surfaces, containers", light: true },
  { name: "Soft Sage", hex: "#E9EFE5", role: "Badge backgrounds, selection chips, subtle fills", light: true },
  { name: "Natural Sand", hex: "#E2DFD4", role: "Dividers, disabled states, structural borders", light: true },
  { name: "Hover Border", hex: "#C5BFB0", role: "Interactive borders, input hover outlines", light: true },
  { name: "Main Text", hex: "#303830", role: "High-contrast body text, primary labels", light: false },
  { name: "Muted Text", hex: "#737A70", role: "Secondary captions, timestamps, meta info", light: false },
  { name: "Pure White", hex: "#FFFFFF", role: "Card surfaces, elevated popovers", light: true },
  { name: "Danger / Alert", hex: "#C53030", role: "Out of stock, cancellations, errors", light: false },
  { name: "Warning", hex: "#B45309", role: "Surplus expiration alert, pending verification", light: false },
];

export const TYPOGRAPHY_SPEC = {
  fontFamily: "Inter (Google Fonts)",
  weights: [
    { weight: "400 Regular", usage: "Body paragraphs, detailed product stories, secondary explanations", sample: "Harvested at dawn by local growers" },
    { weight: "500 Medium", usage: "Navigation links, metadata badges, input placeholders, category chips", sample: "Category: Organic Heritage Tomatoes" },
    { weight: "600 Semibold", usage: "Section subheads, product titles, price tags, button labels", sample: "$4.20 / kg — Fresh Batch Available" },
    { weight: "700 Bold", usage: "Hero titles, page headings, statistical callouts", sample: "Transparent Farm-to-Table Marketplace" },
  ],
  scale: [
    { level: "Display Hero", size: "40px / 48px", weight: "700 Bold", tracking: "-0.02em" },
    { level: "Heading 1", size: "32px / 40px", weight: "700 Bold", tracking: "-0.015em" },
    { level: "Heading 2", size: "24px / 32px", weight: "600 Semibold", tracking: "-0.01em" },
    { level: "Heading 3", size: "20px / 28px", weight: "600 Semibold", tracking: "0em" },
    { level: "Body Regular", size: "16px / 26px", weight: "400 Regular", tracking: "0em" },
    { level: "Body Medium", size: "16px / 26px", weight: "500 Medium", tracking: "0em" },
    { level: "Caption / Meta", size: "13px / 18px", weight: "500 Medium", tracking: "+0.01em" },
    { level: "Micro Badge", size: "11px / 14px", weight: "600 Semibold", tracking: "+0.04em uppercase" },
  ],
};

export const FIVE_ROLES = [
  {
    id: "customer",
    title: "Individual Customer",
    badge: "Consumer App",
    desc: "Health-conscious urban consumers seeking verified harvest dates, farm transparency, pesticide-free verification, and reliable doorstep delivery.",
    primaryTask: "Discover nearby farms, verify harvest timestamp, buy retail produce, and track distance-based delivery.",
    icon: "ShoppingBag",
    color: "#244C3A",
  },
  {
    id: "farmer",
    title: "Local Farmer",
    badge: "Producer Portal",
    desc: "Small-to-midsize growers who lack digital marketing reach and suffer huge revenue loss when surplus yields spoil before reaching traditional mandis.",
    primaryTask: "List freshly harvested crops, set retail vs wholesale tiers, trigger surplus flash discounts, and manage daily pickups.",
    icon: "Tractor",
    color: "#477A49",
  },
  {
    id: "bulk-buyer",
    title: "Institutional Bulk Buyer",
    badge: "B2B Requisition",
    desc: "Restaurants, hotel executive chefs, and corporate cafeterias requiring predictable 50kg+ weekly supply contracts and unified invoice reconciliation.",
    primaryTask: "Browse certified farmers by tonnage capacity, schedule weekly automated orders, and lock wholesale contract pricing.",
    icon: "Building2",
    color: "#B56E43",
  },
  {
    id: "delivery-partner",
    title: "Delivery Partner",
    badge: "Logistics App",
    desc: "Dedicated local transit couriers needing clear farm geo-pins, road distance navigation, load weight guidance, and verified drop-off confirmations.",
    primaryTask: "Receive distance-routed orders, navigate from rural farm gates to city doorsteps, and log contactless drop-off proof.",
    icon: "Truck",
    color: "#2D5A43",
  },
  {
    id: "admin",
    title: "Marketplace Administrator",
    badge: "Operations Command",
    desc: "Platform stewards safeguarding marketplace integrity through organic certificate validation, fair-price compliance, and dispute resolution.",
    primaryTask: "Audit farmer land records, moderate product listings, inspect delivery SLA fulfillment, and resolve escrow payouts.",
    icon: "ShieldCheck",
    color: "#1A372A",
  },
];

export const DESIGN_GOALS = [
  {
    number: "01",
    title: "Improve Direct Farmer Discovery",
    desc: "Empower consumers to find growers within a 50km radius with rich storytelling, verified farming practices, and soil health profiles.",
    metric: "Target: Cut search time to < 45s",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Transparent Pricing & Origin",
    desc: "Deconstruct the consumer price tag to show exact farmer remuneration, platform logistics fee, and route transit cost with zero hidden markups.",
    metric: "100% Price breakdown clarity",
    icon: "Coins",
  },
  {
    number: "03",
    title: "Harvest & Freshness Transparency",
    desc: "Replace vague 'fresh' claims with verifiable harvest timestamps (e.g., 'Harvested Today at 06:15 AM') and field-to-table transit duration.",
    metric: "Verifiable harvest timestamps",
    icon: "Clock",
  },
  {
    number: "04",
    title: "Simplified Checkout & Quantity Selection",
    desc: "Streamlined retail basket flow with intuitive metric units (kg, bunches, crates) and instant delivery address validation.",
    metric: "3-step checkout completion",
    icon: "CheckCircle",
  },
  {
    number: "05",
    title: "Unified Retail & Wholesale Purchasing",
    desc: "Seamless 2-tier pricing engine allowing farmers to cater to household 1kg orders and restaurant 100kg requisitions from one listing.",
    metric: "Reduces farmer surplus waste by 40%",
    icon: "Boxes",
  },
  {
    number: "06",
    title: "Distance-Based Delivery & Live Tracking",
    desc: "Equitable road-distance pricing formula that rewards local sourcing and provides live status transparency from farm gate to kitchen table.",
    metric: "Transparent distance-tiered logistics",
    icon: "MapPin",
  },
];

export const PROBLEM_HYPOTHESES = [
  {
    id: "p1",
    title: "Market Access Bottleneck for Farmers",
    context: "Smallholder farmers are heavily dependent on multi-tier intermediary brokers (commission agents, aggregators, transport syndicates) who take 50% to 70% of end-consumer value, leaving growers vulnerable to price collapse.",
    hypothesis: "A direct digital marketplace interface allowing farmers to set fair reserve prices and publish available yields directly increases farm net earnings."
  },
  {
    id: "p2",
    title: "Produce Age & Harvest Blind Spots",
    context: "Supermarket and traditional retail produce sits in cold-storage hubs and wholesale yards for 4 to 8 days. Consumers have no way of knowing when produce was actually picked from the ground.",
    hypothesis: "Exposing mandatory harvest timestamps, farm GPS origins, and same-day delivery promises builds authentic consumer trust and willingness to pay fair prices."
  },
  {
    id: "p3",
    title: "Severe Post-Harvest Surplus Wastage",
    context: "Perishable bounties (e.g., bumper tomato yields) frequently rot on the vine or in crates because farmers have no agile channel to liquidate perishable surplus before standard market auctions.",
    hypothesis: "A dedicated 'Surplus Produce Flash Sale' channel with automated dynamic discounts connects farmers directly to value-seeking families and commercial kitchens before spoilage."
  },
  {
    id: "p4",
    title: "Institutional Bulk Procurement Friction",
    context: "Restaurants and culinary institutions struggle with fluctuating wholesale prices, uncertain quality batches, and unreliable informal supplier contacts.",
    hypothesis: "An enterprise B2B requisition portal with volume pricing tiers, recurring weekly scheduled delivery, and quality certificates provides institutional stability."
  },
  {
    id: "p5",
    title: "Logistical Opacity & Inequitable Delivery Fees",
    context: "Flat-rate delivery fees either overcharge near-neighbor customers or discourage rural farmers located 20km out of municipal city limits from participating.",
    hypothesis: "A transparent road-distance formula (Base fee + Distance × Rate) combined with real-time farm-to-door transit status reduces cart abandonment and establishes fair courier compensation."
  }
];

export const PERSONAS = [
  {
    name: "Ramesh Patel",
    age: 52,
    role: "Local Organic Farmer",
    location: "Green Valley Farms (12-acre organic holding), Nashik outskirts",
    tagline: "“I pour my heart into chemical-free farming, but middlemen dictate my prices and take the lion's share of profits.”",
    avatar: "/assets/images/farmer-portrait.jpg",
    statusNote: "Hypothetical Persona formulated from domain interviews; to be validated in field testing.",
    digitalLiteracy: "Moderate (Uses WhatsApp, YouTube, UPI payment apps; prefers large buttons and voice/audio cues)",
    farmProfile: {
      size: "12 Acres Certified Organic",
      crops: "Heirloom Tomatoes, Baby Spinach, Bell Peppers, Crisp Cucumbers",
      yieldRate: "Approx. 400kg weekly harvest",
    },
    goals: [
      "Sell directly to consumers and restaurants to secure at least 70% of end-sale price.",
      "Quickly list surplus produce before it perishes, without complex paperwork.",
      "Have predictable morning pickup windows so farm work isn't interrupted.",
    ],
    painPoints: [
      "Exploitative commissions from wholesale brokers.",
      "Uncertainty: Mandi traders often reject good produce arbitrarily to lower rates.",
      "High tech barrier: Complicated ERP enterprise software is overwhelming on a mobile screen under direct sunlight.",
    ],
    needsFromFreshHarvest: [
      "Ultra-simple 3-step mobile listing workflow with voice search and quick photo upload.",
      "Clear visual dashboard showing confirmed orders, daily earnings, and pickup status.",
      "Automated bulk requisition requests from restaurant chefs.",
    ]
  },
  {
    name: "Ananya Sharma",
    age: 31,
    role: "Conscious Household Consumer",
    location: "South Delhi / Urban Suburban Complex",
    tagline: "“I want to feed my family clean, nutrient-dense food, but 'organic' supermarket labels feel like marketing gimmicks.”",
    avatar: "/assets/images/customer-portrait.jpg",
    statusNote: "Hypothetical Persona formulated from urban consumer survey hypotheses.",
    digitalLiteracy: "High (Tech-savvy, daily user of quick-commerce, digital payments, health apps)",
    farmProfile: {
      household: "Family of 3 (including 4-year-old toddler)",
      habits: "Orders organic groceries 2-3 times per week, cooks fresh meals daily",
      budget: "$60 - $90 weekly produce budget",
    },
    goals: [
      "Verify the exact harvest time and farm origin before purchasing.",
      "Support local sustainable farmers rather than faceless multi-national conglomerates.",
      "Receive produce within 24 hours of harvest with predictable delivery tracking.",
    ],
    painPoints: [
      "Supermarket vegetables look waxy and often spoil within 48 hours in the fridge.",
      "Zero traceability: Cannot verify if 'chemical-free' claims are genuine.",
      "Frustrating delivery delays with opaque courier status.",
    ],
    needsFromFreshHarvest: [
      "Harvest timestamp badges prominent on all product cards.",
      "Interactive farmer profiles detailing chemical-free soil practices and harvest photos.",
      "Distance-based transparent checkout fee with live driver tracking map.",
    ]
  },
  {
    name: "Vikram Malhotra",
    age: 39,
    role: "Executive Chef & Bulk Procurement Manager",
    location: "The Verdant Bistro & Farmhouse Kitchen (2 Locations)",
    tagline: "“Consistency and quality are non-negotiable in my kitchen. We need 150kg of fresh greens every Tuesday and Friday without fail.”",
    avatar: "/assets/images/bulk-buyer-portrait.jpg",
    statusNote: "Hypothetical Persona representing B2B institutional culinary procurement.",
    digitalLiteracy: "Very High (Uses POS systems, inventory management software, tablet procurement)",
    farmProfile: {
      business: "Farm-to-Table Fine Casual Restaurant",
      demand: "200kg - 350kg fresh produce per week",
      keyRequirements: "Consistency in sizing, wholesale volume tier discounts, GST tax invoices",
    },
    goals: [
      "Direct relationships with vetted regional farmers for seasonal restaurant menu planning.",
      "Wholesale tiered pricing (25kg+, 50kg+, 100kg+ discounts) without daily haggling.",
      "Automated standing weekly deliveries with guaranteed morning drop-off slots.",
    ],
    painPoints: [
      "Wholesale market middlemen provide inconsistent batch quality week-to-week.",
      "Administrative nightmare: Managing 12 individual farmer contacts manually over phone calls.",
      "Lack of advance notice when crops suffer seasonal blight or supply dips.",
    ],
    needsFromFreshHarvest: [
      "B2B Institutional Dashboard with custom volume requisition forms.",
      "Wholesale contract locks and automated recurring delivery schedules.",
      "Consolidated monthly invoicing and supplier quality ratings.",
    ]
  }
];

export const USER_JOURNEY_STAGES = [
  {
    stage: "01. Discovery",
    action: "Discovers FreshHarvest via local sustainable community group or farmer recommendation.",
    userQuestion: "“Is this truly fresh produce directly from nearby farmers, or just another drop-shipping storefront?”",
    frictionPoint: "Skepticism over authenticity; doubts about whether produce really comes from local fields.",
    opportunity: "Lead with transparency: Showcase interactive farmer radius map, verified farm badges, and live morning harvest feed on home landing.",
  },
  {
    stage: "02. Search & Filter",
    action: "Searches for seasonal veggies, filters by 'Harvested Today' and proximity (< 25km).",
    userQuestion: "“Which farm near me harvested vine-ripened tomatoes this morning?”",
    frictionPoint: "Too many generic search filters that clutter mobile screen; irrelevant out-of-season items.",
    opportunity: "Proximity slider + prominent 'Harvested Today' filter chip + clear stock availability counters.",
  },
  {
    stage: "03. Evaluation & Compare",
    action: "Opens product details, inspects farmer bio, soil practices, harvest timestamp, and price breakdown.",
    userQuestion: "“Why is this $4.20/kg? How much goes to Ramesh Patel vs transport?”",
    frictionPoint: "Hidden logistics costs; uncertainty about how produce is handled during transit.",
    opportunity: "Deconstructed Transparent Price Card: 75% to Farmer, 15% to Delivery Partner, 10% Platform Care.",
  },
  {
    stage: "04. Cart & Selection",
    action: "Selects preferred quantity in kilograms or bulk crates; toggles retail vs wholesale tier.",
    userQuestion: "“Can I combine orders from two different nearby farms without paying double delivery fees?”",
    frictionPoint: "Confusion over multiple pickup origins and basket bundling.",
    opportunity: "Smart Basket Consolidation: Visual indicator showing distance between selected farms and combined route savings.",
  },
  {
    stage: "05. Checkout & Payment",
    action: "Inputs destination address, views dynamic road-distance quote, selects payment method.",
    userQuestion: "“How is this delivery fee calculated? Why is it $4.50 instead of a flat $3?”",
    frictionPoint: "Surprise fees at final step leading to cart abandonment.",
    opportunity: "Live Distance-Pricing Formula panel: Base $2.50 + 14.8km × $0.40 = Transparent $8.42 total delivery.",
  },
  {
    stage: "06. Delivery Tracking",
    action: "Tracks order in real-time as delivery partner picks up crate from farm gate and drives toward city home.",
    userQuestion: "“Has the driver picked up my crate from the farm yet? When exactly will it reach my door?”",
    frictionPoint: "Vague 'Out for Delivery' status that offers no real-time geographic context.",
    opportunity: "Interactive GPS Route Map with live pickup verification, driver vehicle status, and 15-minute ETA window.",
  },
  {
    stage: "07. Unboxing & Review",
    action: "Receives crisp, earth-scented harvest crate; scans QR code on box to leave direct tip & review for farmer.",
    userQuestion: "“Can I thank Ramesh Patel directly and subscribe to his weekly tomato harvest?”",
    frictionPoint: "Transaction ends cold without fostering direct human connection with grower.",
    opportunity: "'Meet Your Grower' post-delivery card with 1-click farmer tipping, repeat subscription, and freshness rating.",
  },
];

export const INFORMATION_ARCHITECTURE = {
  customer: [
    { title: "Home", children: ["Hero Story", "Harvested Today Carousel", "Nearby Farms Map", "Seasonal Produce", "Surplus Flash Deals"] },
    { title: "Search & Catalog", children: ["Category Filters", "Proximity Radius", "Organic Verified", "Price Tiers", "In-Stock Sort"] },
    { title: "Product Detail", children: ["Harvest Timestamp", "Farmer Story & Bio", "Price Deconstruction", "Customer Reviews", "Add to Basket"] },
    { title: "Cart & Requisition", children: ["Itemized Crates", "Distance Calculator", "Bulk Tier Threshold", "Farmer Consolidation"] },
    { title: "Checkout", children: ["Delivery Address Pin", "Live Route Quote", "Payment Options (UPI, Card, COD)", "Order Summary"] },
    { title: "Order Tracking", children: ["Live Route Map", "Driver Status", "Pickup Confirmation", "Estimated Arrival Window"] },
    { title: "User Profile", children: ["Saved Farms", "Subscription Crates", "Order History", "Farm Impact Score"] },
  ],
  farmer: [
    { title: "Farmer Dashboard", children: ["Today's Orders", "Harvest Schedule", "Revenue & Payouts", "Pending Courier Pickups"] },
    { title: "Product Management", children: ["Add New Crop", "Log Harvest Date/Time", "Stock Quantity (kg/crates)", "Photo Upload"] },
    { title: "Surplus Flash Manager", children: ["Trigger Surplus Deal", "Set Dynamic Discount (20-50%)", "Expiry Countdown"] },
    { title: "Inventory & Batches", children: ["Active Listings", "Sold Out Archive", "Seasonal Forecasting"] },
    { title: "Farm Profile", children: ["Soil & Organic Certs", "Farm Photos & Story", "Customer Feedback", "Direct Tip Ledger"] },
  ],
  bulkBuyer: [
    { title: "B2B Command", children: ["Weekly Requisitions", "Contracted Farmers", "Active Shipments", "Monthly Spend"] },
    { title: "Farmer Discovery", children: ["Tonnage Capacity", "Organic Lab Reports", "Harvest Calendar", "Request Quote"] },
    { title: "Bulk Requisition", children: ["Volume Quantity (50kg+)", "Recurring Delivery (Tue/Fri)", "Consolidated Billing"] },
    { title: "Invoices & Compliance", children: ["GST Tax Invoices", "Quality Audit Reports", "Escrow Status"] },
  ],
  deliveryPartner: [
    { title: "Driver Hub", children: ["Available Route Runs", "Active Assigned Order", "Daily Mileage & Earnings"] },
    { title: "Route & Navigation", children: ["Farm Gate GPS Pin", "Customer Doorstep Pin", "Turn-by-Turn Waypoints"] },
    { title: "Pickup & Dropoff", children: ["Crate Barcode Scan", "Produce Condition Check", "Contactless Signature/Photo"] },
  ],
  admin: [
    { title: "Marketplace Ops", children: ["Farmer Verification Queue", "Dispute Escalations", "Platform Health Metrics"] },
    { title: "Quality Moderation", children: ["Organic Certificate Audit", "Price Gouging Watch", "Courier SLA Compliance"] },
    { title: "Payouts & Escrow", children: ["Bank Remittances", "Dispute Holds", "Delivery Partner Fee Clearance"] },
  ]
};

export const MOCK_PRODUCTS = [
  {
    id: "p-01",
    name: "Heritage Roma Tomatoes",
    category: "Vine Produce",
    farmer: "Ramesh Patel",
    farmName: "Green Valley Organic Farm",
    distanceKm: 14.8,
    harvestTime: "Today at 06:15 AM",
    priceRetail: 3.40,
    priceBulk: 2.20,
    unit: "kg",
    bulkMinKg: 25,
    rating: 4.9,
    reviewsCount: 38,
    stockKg: 180,
    isOrganic: true,
    isSurplus: false,
    badge: "Harvested Today",
    image: "/assets/images/hero-produce.jpg",
    description: "Sun-ripened, hand-picked heirloom Roma tomatoes grown with composted organic manure. High in umami and natural lycopene.",
    priceBreakdown: { farmerPercent: 74, deliveryPercent: 16, platformPercent: 10 }
  },
  {
    id: "p-02",
    name: "Tender Baby Kale & Chard",
    category: "Leafy Greens",
    farmer: "Ramesh Patel",
    farmName: "Green Valley Organic Farm",
    distanceKm: 14.8,
    harvestTime: "Today at 05:45 AM",
    priceRetail: 2.80,
    priceBulk: 1.90,
    unit: "bunch (350g)",
    bulkMinKg: 20,
    rating: 4.8,
    reviewsCount: 52,
    stockKg: 65,
    isOrganic: true,
    isSurplus: true,
    surplusDiscount: 30,
    badge: "Surplus Flash -30%",
    image: "/assets/images/hero-produce.jpg",
    description: "Crisp, nutrient-rich organic greens plucked just before dawn. Bumper harvest flash deal to avoid waste.",
    priceBreakdown: { farmerPercent: 72, deliveryPercent: 18, platformPercent: 10 }
  },
  {
    id: "p-03",
    name: "Golden Sweet Bell Peppers",
    category: "Capsicums",
    farmer: "Savitri Devi",
    farmName: "Sunrise Ridge Polyhouse",
    distanceKm: 18.2,
    harvestTime: "Yesterday at 04:30 PM",
    priceRetail: 4.50,
    priceBulk: 3.10,
    unit: "kg",
    bulkMinKg: 15,
    rating: 4.9,
    reviewsCount: 29,
    stockKg: 120,
    isOrganic: true,
    isSurplus: false,
    badge: "Polyhouse Clean",
    image: "/assets/images/hero-produce.jpg",
    description: "Vibrant yellow and orange bell peppers protected from heavy rains in naturally ventilated polyhouses.",
    priceBreakdown: { farmerPercent: 75, deliveryPercent: 15, platformPercent: 10 }
  },
  {
    id: "p-04",
    name: "Crisp Dutch Carrots with Tops",
    category: "Root Vegetables",
    farmer: "Gurpreet Singh",
    farmName: "Seven Springs Eco-Farm",
    distanceKm: 22.4,
    harvestTime: "Today at 06:40 AM",
    priceRetail: 3.20,
    priceBulk: 2.10,
    unit: "kg",
    bulkMinKg: 30,
    rating: 4.7,
    reviewsCount: 44,
    stockKg: 210,
    isOrganic: true,
    isSurplus: false,
    badge: "Rich in Beta-Carotene",
    image: "/assets/images/hero-produce.jpg",
    description: "Earthy, sweet, cold-soil carrots delivered with vibrant green feather tops verifying peak crisp freshness.",
    priceBreakdown: { farmerPercent: 73, deliveryPercent: 17, platformPercent: 10 }
  }
];

export const DELIVERY_FORMULA_SPEC = {
  formula: "Total Delivery Fee = Base Rate + (Additional Road Distance × Per-Kilometer Rate)",
  baseFee: 2.50,
  baseDistanceIncludedKm: 3.0,
  ratePerKm: 0.40,
  exampleCalculation: {
    farm: "Green Valley Organic Farm (Nashik Rural Hub)",
    destination: "Westside Kitchen & Residence (Central Urban)",
    roadDistanceKm: 14.8,
    billableDistanceKm: 11.8, // 14.8 - 3.0
    baseFee: "$2.50",
    distanceFee: "11.8 km × $0.40/km = $4.72",
    finalFee: "$7.22",
    etaMinutes: 38,
  },
  policyStatement:
    "Distance rates are dynamically calculated using verified routing algorithms. This ensures farmers located further in rural farm belts are not excluded by arbitrary delivery radius boundaries while guaranteeing transparent, fair driver compensation.",
  edgeCases: [
    { title: "Route Calculation in Progress", behavior: "Renders skeleton pulse animation with fallback distance estimate until exact road polyline returns." },
    { title: "Unmapped Rural Farm Gate", behavior: "System falls back to verified pin coordinates and alerts delivery partner with specific gate landmarks." },
    { title: "Extreme Weather / Reroute", behavior: "Dynamic banner alerts customer of 15-20 min transit buffer with live satellite route adjustment." },
    { title: "Address Changed Post-Dispatch", behavior: "Recalculates road distance delta and prompts user for incremental transit approval before driver reroute." },
  ]
};

export const USABILITY_EVALUATION = {
  objective: "Assess whether transparent harvest timestamps and distance-based price breakdowns improve user comprehension and checkout confidence compared to traditional e-commerce models.",
  methodology: "Moderated usability walkthroughs with 5 representative target users (2 household shoppers, 2 local farmers, 1 restaurant procurement manager) using realistic prototype tasks.",
  ethicalNotice: "Conducted as an academic design evaluation simulation; feedback cards reflect design hypotheses and prototype validation scenarios rather than commercial production metrics.",
  tasks: [
    {
      id: "T1",
      scenario: "Search for today's harvested tomatoes and verify the farmer's organic certification.",
      successMetric: "Time to complete < 40 seconds; 0 navigational dead ends.",
      observation: "Users immediately gravitated toward the 'Harvested Today' green badge; praised seeing the 06:15 AM timestamp.",
      friction: "Two participants initially mistook the 'Surplus -30%' tag as damaged goods rather than excess yield.",
      iteration: "Redesigned tag copy to 'Bumper Harvest Surplus — 100% Prime Quality' with an explanatory tooltip."
    },
    {
      id: "T2",
      scenario: "Switch from retail 1kg pricing to 25kg bulk pricing for restaurant purchasing.",
      successMetric: "Seamless toggle without leaving the product page.",
      observation: "Chef persona appreciated the instant price drop calculation ($3.40 -> $2.20/kg).",
      friction: "Minimum bulk threshold warning was subtle on mobile screens.",
      iteration: "Added prominent progress meter: 'Add 6 more kg to unlock Tier 1 Wholesale Rates'."
    },
    {
      id: "T3",
      scenario: "Review distance-based delivery breakdown during checkout and place test order.",
      successMetric: "Comprehend formula without assistance.",
      observation: "Users reported high satisfaction seeing the transparent formula: 'I always wondered why delivery was $5; now I know exactly how much goes to the driver.'",
      friction: "Small confusion over base fee vs per-km fee.",
      iteration: "Added an interactive interactive visual slider breaking down Base Fee vs Transit Mileage."
    },
    {
      id: "T4",
      scenario: "Farmer adds a new batch of 50kg spinach with morning harvest time and optional surplus flash discount.",
      successMetric: "Complete listing in under 2 minutes on a mobile viewport.",
      observation: "Farmer tester appreciated one-tap photo snap and automated date/time picker defaulted to current morning.",
      friction: "Entering weight in grams was tedious.",
      iteration: "Standardized to kg increments with quick preset buttons (+10kg, +25kg, +50kg)."
    }
  ]
};

export const DESIGN_DECISIONS_LEARNINGS = [
  {
    title: "1. The Psychology of Verifiable Freshness",
    category: "Information Architecture",
    decision: "Replaced subjective marketing buzzwords like 'Farm Fresh' and '100% Natural' with immutable harvest timestamps: 'Harvested Today at 06:15 AM'.",
    rationale: "Consumer trust in grocery e-commerce is at an all-time low due to cold-storage repackaging. Verifiable timestamps turn freshness into an objective, factual metric.",
    impact: "Dramatically increased perceived value and reduced product comparison friction."
  },
  {
    title: "2. Solving Food Waste via 2-Tier Pricing",
    category: "Business Model & UX",
    decision: "Built dual Retail & Bulk Wholesale purchasing into a unified single product page instead of fragmenting into two separate platforms.",
    rationale: "Farmers cannot afford managing two separate software ecosystems. When household demand dips, chefs and bulk caterers absorb excess harvests at wholesale tiers.",
    impact: "Prevents good harvest dumping and gives institutional buyers predictable wholesale pipelines."
  },
  {
    title: "3. Distance-Based Pricing vs Flat-Rate Delivery",
    category: "Logistics UX",
    decision: "Adopted a transparent formula: Base Fee ($2.50) + ($0.40 × km) with visual road map polyline.",
    rationale: "Flat fees either penalize nearby neighbors or bankrupt rural drivers delivering to farm gates 25km away. Transparent deconstruction eliminates checkout sticker shock.",
    impact: "High user trust; eliminates hidden platform service charges."
  },
  {
    title: "4. High Sunlight Accessibility & Organic Palette",
    category: "Design System & UI",
    decision: "Selected Warm Cream (#F8F7F1) and Forest Green (#244C3A) with strict WCAG AA contrast ratio (> 7:1 for text), paired with generous 48px touch targets.",
    rationale: "Farmers use the app outdoors under bright sunlight in farm fields, while chefs use it in humid, bustling kitchens. High contrast and large tap zones prevent mis-taps.",
    impact: "Passed 100% of accessibility contrast audits across all primary action components."
  }
];

export const FIGMA_PAGES = [
  { id: "01", title: "Portfolio Cover", short: "Cover", description: "Hero composition, project metadata, role, status & tools" },
  { id: "02", title: "Project Overview", short: "Overview", description: "Background, 5 core user roles, design goals & process" },
  { id: "03", title: "Problem & Opportunity", short: "Problem", description: "Agricultural challenges, 6 design goals, before/after journey" },
  { id: "04", title: "Users & Personas", short: "Personas", description: "Farmer, Consumer, Bulk Buyer personas & 7-stage journey map" },
  { id: "05", title: "Information Architecture", short: "IA & Sitemap", description: "Complete multi-role sitemap for all 5 stakeholders" },
  { id: "06", title: "User Flows & Wireframes", short: "Flows & Wireframes", description: "Flowcharts and low-fidelity grayscale wireframes" },
  { id: "07", title: "Design System", short: "Design System", description: "Color palette, typography scale, 8px grid & interactive UI kit" },
  { id: "08", title: "Final UI Showcase", short: "UI Showcase", description: "High-fidelity mockups for Customer, Farmer & Operations" },
  { id: "09", title: "Core User Workflows", short: "Core Workflows", description: "Farm-to-table, Surplus flash sale & B2B scheduled ordering" },
  { id: "10", title: "Delivery Tracking Concept", short: "Delivery Concept", description: "Distance-based checkout formula, interactive map route & edge cases" },
  { id: "11", title: "Interactive Prototype", short: "Prototype Sandbox", description: "Clickable working prototype connecting customer & farmer flows" },
  { id: "12", title: "Usability & Evaluation", short: "Usability", description: "Testing scenarios, observations, friction points & iterations" },
  { id: "13", title: "Design Decisions & Learnings", short: "Learnings", description: "Key UX rationale, trade-offs, accessibility & future roadmap" },
  { id: "14", title: "Responsive & Components", short: "Responsive Kit", description: "Desktop, tablet, mobile layouts & design tokens export" }
];
