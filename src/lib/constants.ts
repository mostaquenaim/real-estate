export const projects = [
  {
    title: "Nawabganj Project",
    location: "Nawabganj, Koliail-Dhaka-01",
    description:
      "Premium residential plots in a prime location with excellent connectivity and future growth potential.",
    landSize: "675 Bigha",
    landSizeKatha: Math.round(675 * 20), // approx. 1 Bigha = 20 Katha
    landSizeShotangsho: Math.round(675 * 33), // approx. 1 Bigha = 33 Shotangsho
    plotSizes: "Customizable (Decimal / Katha)",
    image: "/lands/Land-Demarcation-1.jpg",
    slug: "nawabganj",
    coordinates: [90.411885, 23.792588],
    layout: "/layouts/layout-nawabganj.jpg",
    gallery: ["/gallery/nawabganj/nobabganj-signboard.jpg"],
  },
  {
    title: "Dhamrai Project",
    location: "Borakoir, Dhamrai-Dhaka-20",
    description:
      "Beautifully designed plots with modern amenities and peaceful surroundings for your dream home.",
    landSize: "425 Bigha",
    landSizeKatha: Math.round(425 * 20),
    landSizeShotangsho: Math.round(425 * 33),
    plotSizes: "Customizable (Decimal / Katha)",
    image: "/lands/Land-Demarcation-2.jpg",
    slug: "borakoir",
    coordinates: [90.411885, 23.792588],
    layout: "",
    gallery: [
      "/gallery/dhamrai/dhamrai-photo.jpg",
      // "/gallery/dhamrai/dhamrai-photo-0.jpg",
    ],
  },
  {
    title: "Kolatia Project",
    location: "Near Kolatia College",
    description:
      "Conveniently located land near Kolatia College, perfect for residential or investment purposes.",
    landSize: "525 Shotangsho",
    landSizeKatha: Math.round(525 * 0.603), // 1 Shotangsho ≈ 0.603 Katha
    landSizeShotangsho: 525,
    plotSizes: "Customizable (Decimal / Katha)",
    image: "/lands/Land-Demarcation-1.jpg",
    slug: "kolatia",
    coordinates: [90.32, 23.7], // Update with exact coords if needed
    layout: "",
    gallery: [
      "/gallery/kolatia/kolatia-1.jpg",
      "/gallery/kolatia/kolatia-2.jpg",
      "/gallery/kolatia/kolatia-3.jpg",
      "/gallery/kolatia/kolatia-4.jpg",
      "/gallery/kolatia/kolatia-5.jpg",
    ],
  },
];

export const teamMembers = [
  {
    name: "Md. Mosharraf Hossain",
    role: "Chairman",
    description: "Leading the company with vision and strategic direction.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Md. Arif Al Rahman",
    role: "Vice Chairman",
    description:
      "Supports the Chairman in strategic decision making and governance.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "M M Masud",
    role: "Managing Director (MD)",
    description:
      "Oversees all company operations with extensive leadership experience.",
    image: "/avatars/AI-person-2.webp",
    highlight: true,
  },
  {
    name: "S Mahmud",
    role: "Chief Executive Officer (CEO)",
    description:
      "Responsible for executing company strategy and daily operations.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "M N Mallik",
    role: "Director (Sales & Marketing)",
    description:
      "Oversees all sales and marketing operations with extensive industry experience.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Md. Hasibul Islam",
    role: "Director (Operations)",
    description:
      "Manages all operational aspects of the company's projects and services.",
    image:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "Md. Golam Akbar",
    role: "Director",
    description:
      "Provides strategic guidance and oversight for company initiatives.",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
  },
  {
    name: "Md. Jahidul Islam",
    role: "General Manager (GM)",
    description:
      "Oversees day-to-day management and implementation of company policies.",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "Banglar Choya delivered exactly what they promised. The plot location is perfect!",
    author: "Mohammad Rahman",
    role: "Investor",
    avatar: "/avatars/AI-person-1.webp",
  },
  {
    quote:
      "Excellent customer service and trustworthy team. Highly recommended.",
    author: "Fatima Noor",
    role: "Homebuyer",
    avatar: "/avatars/ai-person-3.jpg",
  },
  {
    quote: "Great investment opportunity with promising returns.",
    author: "Arif Khan",
    role: "Real Estate Agent",
    avatar: "/avatars/AI-person-2.webp",
  },
];
