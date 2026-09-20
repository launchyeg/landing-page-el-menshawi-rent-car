/**
 * Single source of truth for all copy, images and links on the landing page.
 * Edit values here to change what's rendered — components never hardcode text.
 * Image paths point at /public/images/*; swap the files (keep the same name)
 * or edit the `image`/`src` fields below to point at new files.
 */

/**
 * The brand lockup used everywhere the logo appears (navbar, footer, ...):
 * a primary name with a smaller line underneath it. Edit these two fields to
 * rebrand the entire site in one place.
 */
export const brand = {
  name: "El Menshawi",
  subtitle: "Rent Car",
  href: "#top",
};

export const navbar = {
  links: [
    { label: "Car Fleet", href: "#fleet" },
    { label: "About us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blogs", href: "#blog" },
    {
      label: "Pages",
      href: "#",
      dropdown: [
        { label: "About us", href: "#about" },
        { label: "Category", href: "#car-types" },
        { label: "Services", href: "#services" },
        { label: "Car Fleet", href: "#fleet" },
        { label: "Blogs", href: "#blog" },
        { label: "Contact us", href: "#footer" },
      ],
    },
  ],
  contactCta: { label: "Contact us", href: "#footer" },
};

export const hero = {
  heading: "Rent Your Ride, Anytime, Anywhere!",
  subtext:
    "Discover the ease of car rentals designed to fit your lifestyle. Whether you're planning a quick city drive, a weekend getaway, or a long-term journey.",
  primaryCta: { label: "Booking Now", href: "#fleet" },
  secondaryCta: { label: "See All Cars", href: "#fleet" },
  image: {
    src: "/images/hero-bg.jpeg",
    alt: "White sedan driving through a city street",
  },
};

export const carTypes = {
  eyebrow: "Vehicles Options",
  heading: "Browse by car types",
  items: [
    {
      id: "sports",
      label: "Sports",
      image: "/images/car-type-sports.svg",
      href: "#fleet",
    },
    {
      id: "convertible",
      label: "Convertible",
      image: "/images/car-type-convertible.svg",
      href: "#fleet",
    },
    {
      id: "electric",
      label: "Electric",
      image: "/images/car-type-electric.svg",
      href: "#fleet",
    },
    {
      id: "luxury",
      label: "Luxury",
      image: "/images/car-type-luxury.svg",
      href: "#fleet",
    },
  ],
};

export const about = {
  id: "about",
  heading: "The story behind our commitment to quality and service",
  image: {
    src: "/images/about-team.svg",
    alt: "El Menshawi founding team smiling together",
  },
  panelTitle: "Established in 2016",
  description:
    "Whether it's a quick trip across country adventure, our diverse fleet of maintained vehicles ensures you'll find the ideal car for every occasion.",
  stats: [
    { label: "Founder", value: "Marvin McKinney" },
    { label: "Headquarters", value: "Los Angeles, CA" },
    { label: "Fleet Size", value: "2600+ Vehicles" },
    { label: "Service Areas", value: "Nationwide & International" },
  ],
  cta: { label: "More About us", href: "#footer" },
};

export const fleet = {
  id: "fleet",
  eyebrow: "Choose Your Car",
  heading: "Our Vehicle Fleet",
  cars: [
    {
      id: "e-tron-gt",
      name: "E-Tron GT",
      category: "Sedan",
      image: "/images/fleet-e-tron-gt.svg",
      specs: { seats: 5, bags: 3, transmission: "Manual", fuel: "Diesel" },
      price: 160,
      currency: "USD",
      period: "Per Day",
      href: "#",
    },
    {
      id: "s5-sportback",
      name: "S5 Sportback",
      category: "Sports",
      image: "/images/fleet-s5-sportback.svg",
      specs: { seats: 5, bags: 3, transmission: "Manual", fuel: "Diesel" },
      price: 145,
      currency: "USD",
      period: "Per Day",
      href: "#",
    },
    {
      id: "lancer-cedia",
      name: "Lancer Cedia",
      category: "Luxury",
      image: "/images/fleet-lancer-cedia.svg",
      specs: { seats: 4, bags: 2, transmission: "Auto", fuel: "Diesel" },
      price: 110,
      currency: "USD",
      period: "Per Day",
      href: "#",
    },
    {
      id: "roxx-xev-9e",
      name: "Roxx XEV 9e",
      category: "Sports",
      image: "/images/fleet-roxx-xev-9e.svg",
      specs: { seats: 7, bags: 4, transmission: "Auto", fuel: "Hybrid" },
      price: 64,
      currency: "USD",
      period: "Per Day",
      href: "#",
    },
    {
      id: "lx500d-iv7",
      name: "LX500d IV7",
      category: "Convertible",
      image: "/images/fleet-lx500d-iv7.svg",
      specs: { seats: 5, bags: 4, transmission: "Auto", fuel: "Petrol" },
      price: 90,
      currency: "USD",
      period: "Per Day",
      href: "#",
    },
    {
      id: "benz-s-class-amg",
      name: "Benz S Class AMG",
      category: "Electric",
      image: "/images/fleet-benz-s-class-amg.svg",
      specs: { seats: 5, bags: 4, transmission: "Auto", fuel: "Electric" },
      price: 74,
      currency: "USD",
      period: "Per Day",
      href: "#",
    },
  ],
  viewAllCta: { label: "View All Fleets", href: "#fleet" },
};

export const services = {
  id: "services",
  eyebrow: "What We Do",
  heading: "Our Services",
  images: {
    main: {
      src: "/images/services-main.svg",
      alt: "Driver's point of view steering through the city",
    },
    secondary: {
      src: "/images/services-secondary.svg",
      alt: "Luxury car with gull-wing door open",
    },
  },
  items: [
    { number: "6", label: "Intercity Rides", href: "#" },
    { number: "5", label: "24/7 Road Assistant", href: "#" },
    { number: "4", label: "Chauffeur Services", href: "#" },
    { number: "3", label: "Long-Term Leasing", href: "#" },
    { number: "2", label: "Airport Transfers", href: "#" },
  ],
  viewAllCta: { label: "View All Services", href: "#services" },
};

export const promo = {
  card: {
    image: { src: "/images/promo-card.svg", alt: "Hand holding a car key" },
    heading: "Affordable rentals, premium cars, unmatched service",
    cta: { label: "Rent a Car", href: "#fleet" },
  },
  secondaryImages: [
    { src: "/images/promo-secondary-1.svg", alt: "Hands exchanging a car key" },
    {
      src: "/images/promo-secondary-2.svg",
      alt: "SUV parked on a hilltop landscape",
    },
  ],
};

export const stats = {
  experience: {
    value: "10+",
    label: "Experience in Car Rentals",
    image: {
      src: "/images/stats-experience.svg",
      alt: "Close-up of hand on a steering wheel",
    },
  },
  tagline:
    "Your ultimate travel companion for seamless car rentals, wherever the road takes you.",
};

export const amenities = {
  eyebrow: "Modern Amenities",
  heading: "Reliable Road Power",
  features: [
    { icon: "navigation", label: "GPS Navigation" },
    { icon: "shield", label: "Insurance Coverage" },
    { icon: "calendar", label: "Flexible Booking" },
    { icon: "tag", label: "Affordable Pricing" },
    { icon: "leaf", label: "Eco-Friendly" },
    { icon: "road", label: "Unlimited Mileage" },
  ],
  images: [
    { src: "/images/amenities-interior-1.svg", alt: "Car rear seats interior" },
    {
      src: "/images/amenities-interior-2.svg",
      alt: "Car steering wheel and dashboard",
    },
  ],
};

export const testimonials = {
  eyebrow: "Testimonials",
  heading: "Customers Review",
  items: [
    {
      id: 1,
      quote:
        "This is by far the best car rental service I've ever used. From the moment I made the reservation, I knew I was in good hands. The website was easy to navigate & the rates were competitive.",
      name: "Leslie Alexander",
      avatar: "/images/testimonial-avatar.svg",
    },
    {
      id: 2,
      quote:
        "Booking was effortless and the car was spotless at pickup. Customer support answered every question within minutes — I'll be renting with El Menshawi again on my next trip.",
      name: "Marcus Bennett",
      avatar: "/images/testimonial-avatar.svg",
    },
    {
      id: 3,
      quote:
        "Flexible pickup times and transparent pricing made planning our road trip so much easier. Highly recommend El Menshawi to anyone who wants a hassle-free rental experience.",
      name: "Amara Okafor",
      avatar: "/images/testimonial-avatar.svg",
    },
  ],
  video: {
    src: "/images/testimonial-video.svg",
    alt: "Woman smiling behind the wheel of a car",
  },
};

export const blog = {
  id: "blog",
  eyebrow: "Blogs",
  heading: "Latest Articles",
  posts: [
    {
      id: "choosing-the-right-rental-car",
      image: "/images/blog-post-1.svg",
      title:
        "The complete guide to choosing the right rental car for your next adventure",
      date: "Dec 5, 2024",
      category: "Road Trips",
      href: "#",
    },
    {
      id: "stress-free-road-trip",
      image: "/images/blog-post-2.svg",
      title:
        "How to plan a stress-free road trip using a reliable rental car service",
      date: "Dec 5, 2024",
      category: "Eco Friendly",
      href: "#",
    },
    {
      id: "electric-hybrid-benefits",
      image: "/images/blog-post-3.svg",
      title:
        "Exploring the benefits of electric & hybrid vehicles in the car rental industry",
      date: "Dec 5, 2024",
      category: "Safe Driving",
      href: "#",
    },
  ],
  viewAllCta: { label: "View All Blogs", href: "#blog" },
};

export const appPromo = {
  heading: "Experience travel ease with our app",
  description:
    "Experience by scanning the QR code to instantly download our app and access seamless car rental services at your fingertips.",
  note: "Scan the QR code with your device camera and download the app.",
  phoneImage: {
    src: "/images/app-phone.svg",
    alt: "Phone showing the El Menshawi app",
  },
  qrImage: {
    src: "/images/app-qr.svg",
    alt: "QR code to download the El Menshawi app",
  },
};

export const footer = {
  id: "footer",
  copyright: "© 2026 El Menshawi.",
  developer: "https://aaaportfolio.vercel.app/",
  columns: [
    {
      title: "What We Do",
      links: [
        { label: "Intercity Rides", href: "#" },
        { label: "24/7 Road Assistant", href: "#" },
        { label: "Chauffeur Services", href: "#" },
        { label: "Long-Term Leasing", href: "#" },
        { label: "Airport Transfers", href: "#" },
        { label: "Business Travel Packages", href: "#" },
      ],
    },
    {
      title: "Pages",
      links: [
        { label: "About us", href: "#about" },
        { label: "Category", href: "#car-types" },
        { label: "Services", href: "#services" },
        { label: "Car Fleet", href: "#fleet" },
        { label: "Blogs", href: "#blog" },
        { label: "Contact us", href: "#footer" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Reviews", href: "#testimonials" },
        { label: "FAQ", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Cancellation Policy", href: "#" },
        { label: "License", href: "#" },
      ],
    },
  ],
  contact: {
    office: {
      label: "Office",
      value: "4517 Washington Ave. Manchester, Kentucky 39495",
    },
    email: { label: "Email", value: "info@example.io" },
    phone: { label: "Phone", value: "+1 (378) 555-0108" },
  },
  social: [
    { platform: "facebook", href: "#" },
    { platform: "instagram", href: "#" },
    { platform: "twitter", href: "#" },
    { platform: "youtube", href: "#" },
  ],
};
