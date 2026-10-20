export const profile = {
  name: "Kathiresan Murugesan",
  role: "Full Stack Software Engineer",
  location: "Salem, Tamil Nadu, India",
  email: "kathirbsc2017@gmail.com",
  phone: "+91 80727 62298",
  linkedin: "https://www.linkedin.com/in/kathiresan-murugesan-929617438",
  summary:
    "I have 4+ years of experience taking production web apps from requirements to deployment, across EdTech, food-security analytics, AI document processing, ERP and fleet management. My work improved user engagement by 25%.",
};

export const stats = [
  ["4+", "years in production"],
  ["8", "full-lifecycle platforms"],
  ["6", "countries in the UN FAO dashboard"],
];

export const skills = {
  Frontend: ["React.js", "AngularJS", "JavaScript", "TypeScript", "HTML5/CSS3", "Material UI", "Bootstrap", "Recharts", "jQuery"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "WebSocket", "PHP", "Laravel"],
  "AI and integrations": ["OpenAI", "Claude", "Prompt engineering", "Stripe", "PayPal", "Xero/QuickBooks webhooks"],
  "Data and cloud": ["MySQL", "PostgreSQL", "AWS S3"],
  Practices: ["Git/GitHub", "GitHub CI/CD pipeline", "Postman", "Agile/Scrum", "Unit testing", "Code reviews"],
};

export const projects = [
  { name: "Attesta AI", kind: "AI document processing", tags: ["React.js", "WebSocket"], stack: "React.js, Python AI backend, WebSocket",
    summary: "Summaries, OCR and requirement-based categorisation of scanned documents. I built the complete React.js frontend.",
    points: ["Drag-and-drop upload with validation and progress", "Live AI status through polling and WebSocket", "Dashboard for AI summaries and extracted fields", "Panels to define extraction rules, field mappings and categories"] },
  { name: "UN FAO Food Security Monitoring", kind: "Analytics dashboard", tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Recharts"], stack: "React.js, Node.js/Express.js, PostgreSQL, Recharts",
    summary: "Dashboard of food-security indicators across 6 MASHREQ-region countries.",
    points: ["Reusable Recharts components for multi-country comparison", "Colour-coded above/below standard-deviation indicators", "APIs filterable by country, indicator and year range", "Server-side statistics on PostgreSQL schemas"] },
  { name: "MyGooRoo Tutor App", kind: "EdTech", tags: ["React.js", "Node.js", "Express.js", "MySQL"], stack: "React.js, Node.js/Express.js, MySQL",
    summary: "Tutors manage diagnostics, curriculum, teaching tools and online classes.",
    points: ["Tutor dashboard, session management, quiz builder and PDF annotation", "Role-based UI with protected routes", "Video conferencing with attendance auto-synced on session start and end"] },
  { name: "MyGooRoo Student App", kind: "EdTech", tags: ["React.js", "Node.js", "Express.js", "MySQL"], stack: "React.js, Node.js/Express.js, MySQL",
    summary: "Gamified, curriculum-aligned learning with personalised paths and live progress tracking.",
    points: ["Coin rewards, avatars, leaderboards and streaks", "Worksheet annotation with highlight, draw and text", "Homework submission and spaced-repetition flows"] },
  { name: "MyGooRoo Centre Management", kind: "Management system", tags: ["React.js", "PHP", "MySQL", "Stripe"], stack: "React.js, PHP, MySQL, Stripe API",
    summary: "Role-based platform for admin and centre users covering scheduling, fees and communication.",
    points: ["Drag-and-drop event calendar, dynamic forms and PDF reports", "PHP/MySQL REST APIs", "Stripe payments for fees and discounts", "Modules for students, parents, tutors, leads, sessions and notifications"] },
  { name: "AVP Order Management", kind: "ERP-integrated orders", tags: ["React.js", "PHP", "MySQL", "PayPal"], stack: "React.js, PHP, MySQL, PayPal API",
    summary: "Commercial and non-commercial orders with admin controls.",
    points: ["Order entry, customer management and live status tracking", "Estimation, invoicing, advance and bulk payments in PHP", "PayPal REST API, bill receipts, item tracking and reports"] },
  { name: "iLedger Vehicle Inspection", kind: "Fleet management", tags: ["PHP", "MySQL"], stack: "PHP, MySQL",
    summary: "Role-based fleet inspection for vendors, drivers and mechanics across 9 truck types.",
    points: ["Pre-Trip, Post-Trip, Mechanic Response and Completion workflow", "Visual truck-parts display with Good, Medium and Critical status"] },
  { name: "LINCtrac Platform", kind: "Legacy modernisation", tags: ["React.js"], stack: "React.js (React 15 to 19)",
    summary: "Migrated an 8-year-old frontend from React 15 to React 19 and resolved deprecated packages and dependencies.",
    points: [] },
  { name: "Practica", kind: "School and college app", tags: ["PHP", "jQuery", "MySQL"], stack: "PHP, jQuery/Ajax, MySQL, JSON",
    summary: "Chat-based platform bridging offline and online learning on any device.",
    points: ["Attendance, assignments, notices, timetable and progress reports", "JSON-driven data exchange"] },
];

export const job = {
  title: "Software Engineer (Full Stack Developer)",
  company: "Cap Digisoft Solutions Pvt. Ltd., Coimbatore",
  period: "May 2022 to present",
  points: [
    "Delivered 8 full-lifecycle platforms, owning requirements through deployment.",
    "Improved user engagement by 25% with responsive React.js apps on Node.js/Express.js and PHP APIs.",
    "Integrated OpenAI and Claude AI and applied prompt engineering, working with AI/Python engineers.",
    "Shipped RESTful APIs and Stripe and PayPal payments, including bulk payments and webhooks.",
    "Migrated a legacy frontend from React 15 to React 19.",
    "Optimised MySQL and PostgreSQL schemas for multi-tenant apps; built AWS S3 file and media pipelines.",
    "Reduced post-release defects through systematic testing, debugging and code reviews.",
  ],
};

export const education = [
  ["Master of Computer Science", "Bharathiar University, Coimbatore", "2020 to 2022, 81%"],
  ["Bachelor of Computer Science", "Sri Vasavi College, Erode", "2017 to 2020, 70%"],
  ["Higher Secondary (HSC)", "Govt Boys Higher Secondary School, Thiruchengode", "2017, 75.42%"],
  ["SSLC", "Sankar Higher Secondary School, Namakkal", "2015, 84.8%"],
];
