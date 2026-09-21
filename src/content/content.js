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
  ],
  contactCta: { label: "Contact us", href: "#footer" },
};

export const hero = {
  heading: "Rent Your Ride In Hurghada,",
  subheading: "Anytime & Anywhere.",
  subtext:
    "Discover the ease of car rentals designed to fit your lifestyle. Whether you're planning a quick city drive in El Kawther, a weekend getaway across the Red Sea, or a long-term journey, El Menshawi Car Rent provides top-tier 2026 models tailored to your needs.",
  primaryCta: { label: "Booking Now", href: "#fleet" },
  secondaryCta: { label: "See All Cars", href: "#fleet" },
  image: {
    src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789985043/Workspace/elmenshawi/WhatsApp_Image_2026-09-20_at_22.10.11_e1tywn.jpg",
    alt: "White sedan driving through a city street",
  },
};

export const carTypes = {
  eyebrow: "Vehicles Options",
  heading: "Browse by car types",
  items: [
    {
      id: "luxury",
      label: "Luxury",
      image:
        "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789985099/Workspace/elmenshawi/707434600_18041101352628614_4308445507500434762_n_jgk9et.jpg",
      href: "#reservation",
    },
    {
      id: "sedan",
      label: "Sedan",
      image:
        "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789986411/Workspace/elmenshawi/753541250_18049864145628614_1449880406198340291_n_wme2dj.jpg",
      href: "#reservation",
    },
    {
      id: "suv",
      label: "SUV",
      image:
        "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789986625/Workspace/elmenshawi/754142567_18049864142628614_8273999791725079766_n_nibo1s.jpg",
      href: "#reservation",
    },
    {
      id: "economy",
      label: "Economy",
      image:
        "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789986775/Workspace/elmenshawi/660107234_18032434292628614_3773229428010826428_n_cewqay.jpg",
      href: "#reservation",
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
      id: "haval-h6-2026",
      name: "Haval H6 2026",
      category: "SUV",
      image: "/images/fleet-haval-h6.svg",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "hyundai-elantra-ad-2026",
      name: "Hyundai Elantra AD 2026",
      category: "Sedan",
      image: "/images/fleet-hyundai-ad.svg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "tiggo-8-pro-2026",
      name: "Chery Tiggo 8 Pro 2026",
      category: "SUV",
      image: "/images/fleet-tiggo-8-pro.svg",
      specs: { seats: 7, bags: 4, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "tiggo-4-pro-2026",
      name: "Chery Tiggo 4 Pro 2026",
      category: "SUV",
      image: "/images/fleet-tiggo-4-pro.svg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "changan-cs55-2026",
      name: "Changan CS55 Plus 2026",
      category: "SUV",
      image: "/images/fleet-changan-cs55.svg",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "mg-5-2026",
      name: "MG 5 2026",
      category: "Sedan",
      image: "/images/fleet-mg-5.svg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "mg-zs-2026",
      name: "MG ZS 2026",
      category: "SUV",
      image: "/images/fleet-mg-zs.svg",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "nissan-sunny-2026",
      name: "Nissan Sunny 2026",
      category: "Economy",
      image: "/images/fleet-nissan-sunny.svg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "kia-sportage-2026",
      name: "Kia Sportage 2026",
      category: "SUV",
      image: "/images/fleet-kia-sportage.svg",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "hyundai-tucson-2026",
      name: "Hyundai Tucson 2026",
      category: "SUV",
      image: "/images/fleet-hyundai-tucson.svg",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "chevrolet-optra-2026",
      name: "Chevrolet New Optra 2026",
      category: "Sedan",
      image: "/images/fleet-new-optra.svg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "tiggo-3-2026",
      name: "Chery Tiggo 3 2026",
      category: "SUV",
      image: "/images/fleet-tiggo-3.svg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
    },
    {
      id: "hyundai-accent-2026",
      name: "Hyundai Accent 2026",
      category: "Sedan",
      image: "/images/fleet-hyundai-accent.svg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#reservation",
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
