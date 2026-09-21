export const brand = {
  name: "El Menshawi",
  subtitle: "Rent Car",
  href: "#top",
};

export const contact = {
  office: {
    label: "Office",
    value: "84511 Elkawther street, Hurghada, Red Sea Governorate",
  },
  email: { label: "Email", value: "info@example.io" },
  phone: { label: "Phone", value: "+201270951250" },
};

export const social = [
  {
    platform: "facebook",
    href: "https://www.facebook.com/ElmenshawiRentCarHurghada/",
  },
  {
    platform: "instagram",
    href: "https://www.instagram.com/elmenshawi.rent.car/",
  },
  {
    platform: "whatsapp",
    href: `https://wa.me/${contact.phone.value.replace(/\D/g, "")}`,
  },
  {
    platform: "location",
    href: "https://maps.app.goo.gl/nFxTCEnzmupdo7yK7?g_st=ic",
  },
];

export const navbar = {
  links: [
    { label: "About Us", href: "#about" },
    { label: "Car Fleet", href: "#fleet" },
    { label: "Our Services", href: "#services" },
    { label: "Book Now", href: "#book" },
  ],
  contactCta: { label: "Contact us", href: "#footer" },
};

export const hero = {
  heading: "Rent Your Ride In Hurghada,",
  subheading: "Anytime & Anywhere.",
  subtext:
    "Discover the ease of car rentals designed to fit your lifestyle. Whether you're planning a quick city drive in El Kawther, a weekend getaway across the Red Sea, or a long-term journey, El Menshawi Car Rent provides top-tier 2026 models tailored to your needs.",
  primaryCta: { label: "Booking Now", href: "#booking" },
  secondaryCta: { label: "See All Cars", href: "#fleet" },
  image: {
    src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789989551/Workspace/elmenshawi/706595150_18041092562628614_2115252401596689539_n_lgaesz.jpg",
    alt: "El Menshawi Rent Car",
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
        "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789985043/Workspace/elmenshawi/WhatsApp_Image_2026-09-20_at_22.10.11_e1tywn.jpg",
      href: "#booking",
    },
    {
      id: "sedan",
      label: "Sedan",
      image:
        "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789986411/Workspace/elmenshawi/753541250_18049864145628614_1449880406198340291_n_wme2dj.jpg",
      href: "#booking",
    },
    {
      id: "suv",
      label: "SUV",
      image:
        "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789986625/Workspace/elmenshawi/754142567_18049864142628614_8273999791725079766_n_nibo1s.jpg",
      href: "#booking",
    },
    {
      id: "economy",
      label: "Economy",
      image:
        "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789986775/Workspace/elmenshawi/660107234_18032434292628614_3773229428010826428_n_cewqay.jpg",
      href: "#booking",
    },
  ],
};

export const about = {
  id: "about",
  heading: "The story behind our commitment to quality and service",
  image: {
    src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789985099/Workspace/elmenshawi/707434600_18041101352628614_4308445507500434762_n_jgk9et.jpg",
    alt: "El Menshawi founding team smiling together",
  },
  panelTitle: "Established in Hurghada",
  description:
    "Whether it's a quick trip around the city or a Red Sea adventure, our diverse fleet of vehicles ensures you'll find the ideal car for every occasion with complete comfort and reliability.",
  stats: [
    { label: "Founder", value: "El Menshawi" },
    { label: "Headquarters", value: "El Kawther, Hurghada, Red Sea" },
    { label: "Fleet Size", value: "2026 Latest Models" },
    { label: "Service Areas", value: "Hurghada & Red Sea Governorate" },
  ],
  cta: { label: "Booking Now", href: "#booking" },
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
      image:
        "https://legion-images.hatla2ee.com/original_image/1e5405e6-a672-4945-bb34-82fc7a30c9f7/large.png",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "hyundai-elantra-ad-2026",
      name: "Hyundai Elantra AD 2026",
      category: "Sedan",
      image:
        "https://imgy.pro/elmasria-auto/768x433/1120253022324779620834.jpg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "tiggo-8-pro-2026",
      name: "Chery Tiggo 8 Pro 2026",
      category: "SUV",
      image:
        "https://s3.eu-central-1.amazonaws.com/v3-ncg.motory.com/vehicle-new/800x600/l-1676796344.3908-63f1e1b85f6b0.webp",
      specs: { seats: 7, bags: 4, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "tiggo-4-pro-2026",
      name: "Chery Tiggo 4 Pro 2026",
      category: "SUV",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATUdpkQE5zmxQrgihRxSFzCR7f1z4YXVxp9LZH-cUIjTluTRwBKlxXuw&s=10",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "changan-cs55-2026",
      name: "Changan CS55 Plus 2026",
      category: "SUV",
      image:
        "https://changan.com.eg/wp-content/uploads/2022/08/Rectangle-1-2.jpg",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "mg-5-2026",
      name: "MG 5 2026",
      category: "Sedan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe012LO39JO_b-Lpo8T98cB5WRDp2dMGMW0w1IKEJ5PiOuSxe-zzyReXt&s=10",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "mg-zs-2026",
      name: "MG ZS 2026",
      category: "SUV",
      image:
        "https://imagecdn.zigwheels.ae/large/gallery/exterior/67/2267/mg-zs-53906.jpg",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "nissan-sunny-2026",
      name: "Nissan Sunny 2026",
      category: "Economy",
      image:
        "https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sunny/product_code/product_version/design/964X354_B.jpg.ximg.l_12_m.smart.jpg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "kia-sportage-2026",
      name: "Kia Sportage 2026",
      category: "SUV",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdD5t-hxmGaSHFrAxRTEiQQ-O4z9P7X-fhzkvFn_8HqXJ-9oVLGMZLMfw&s=10",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "hyundai-tucson-2026",
      name: "Hyundai Tucson 2026",
      category: "SUV",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaW02RnsuOkpLkrS4t1dMxiZoVfvF7-SMTMJFbv82GXYpWi5-mn1ONcnU&s=10",
      specs: { seats: 5, bags: 3, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "chevrolet-optra-2026",
      name: "Chevrolet New Optra 2026",
      category: "Sedan",
      image:
        "https://egypt.yallamotor.com/_next/image?url=https%3A%2F%2Fymimg1.b8cdn.com%2Fresized%2Fcar_model%2F12770%2Fpictures%2F15982263%2Fwebp_listing_main_Chevrolet-Optra-2025-Exterior-2.webp&w=1920&q=75",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "tiggo-3-2026",
      name: "Chery Tiggo 3 2026",
      category: "SUV",
      image:
        "https://legion-images.hatla2ee.com/original_image/1757d54f-191b-4d33-b098-5a41da9c500b/medium.png",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
    },
    {
      id: "hyundai-accent-2026",
      name: "Hyundai Accent 2026",
      category: "Sedan",
      image:
        "https://legion-images.hatla2ee.com/original_image/e70f27a2-6152-4c50-b480-3f6f62176b17/large.jpg",
      specs: { seats: 5, bags: 2, transmission: "Automatic", fuel: "Petrol" },
      price: 1000,
      currency: "EGP",
      period: "Per Day",
      href: "#booking",
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
      src: "https://res.cloudinary.com/dirbnpgsp/video/upload/v1789993433/Workspace/elmenshawi/WhatsApp_Video_2026-09-21_at_15.22.39_dtfti0.mp4",
      alt: "Driver's point of view steering through the city",
    },
    secondary: {
      src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789986772/Workspace/elmenshawi/649251568_18028696208628614_51804009530412269_n_wcbqq1.webp",
      alt: "Luxury car with gull-wing door open",
    },
  },
  items: [
    { number: "1", label: "Daily & Flexible Rental" },
    { number: "2", label: "Airport Transfers" },
    { number: "3", label: "Long-Term Leasing" },
    { number: "4", label: "Chauffeur Services" },
    { number: "5", label: "Intercity Rides" },
  ],
  viewAllCta: { label: "Booking Now", href: "#booking" },
};

export const promo = {
  card: {
    image: {
      src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789994555/Workspace/elmenshawi/675196f9d0ac88495bd32238_cards-01-p-500_mc0ayz.jpg",
      alt: "Hand holding a car key",
    },
    heading: "Affordable rentals, premium cars, unmatched service",
    cta: { label: "Rent a Car", href: "#booking" },
  },
  experience: {
    image: {
      src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789994669/Workspace/elmenshawi/675196f22d1e5c9c1fae7a5a_cards-02-p-500_cloleb.jpg",
      alt: "Hands exchanging a car key",
    },
    label: "Experience in Car Rentals",
    value: "10+",
  },
  landscape: {
    image: {
      src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789994558/Workspace/elmenshawi/646128647_18027212459628614_79292570416733246_n_aczihg.jpg",
      alt: "SUV parked on a hilltop landscape",
    },
    tagline:
      "Your ultimate travel companion for seamless car rentals, wherever the road takes you.",
  },
};

export const rentalCategories = {
  heading: "Our rental categories",
  items: [
    {
      id: "business",
      label: "Business",
      image: {
        src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789985043/Workspace/elmenshawi/WhatsApp_Image_2026-09-20_at_22.10.11_e1tywn.jpg",
        alt: "Business rental car with a client dressed for a formal event",
      },
    },
    {
      id: "family",
      label: "Family",
      image: {
        src: "https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efb4/67503e9df37eca688967d1ab_category-03.avif",
        alt: "Family loading an SUV for a trip",
      },
    },
    {
      id: "crossovers",
      label: "City Crossovers",
      image: {
        src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1789996721/Workspace/elmenshawi/663126469_1378548000958228_932231066452021338_n_pseizn.jpg",
        alt: "Off-road vehicle set up for an outdoor adventure",
      },
    },
    {
      id: "wedding",
      label: "Wedding",
      image: {
        src: "https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efb4/67503e655e4774eb97cc82ea_category-01.avif",
        alt: "Car decorated with flowers for a wedding",
      },
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
        "Renting a Hyundai Tucson from El Menshawi was seamless. The car was brand new, spotless, and handed over right on time in El Kawther. Exceptional service!",
      name: "Mark Stevens",
    },
    {
      id: 2,
      quote:
        "Flexible pickup times and transparent pricing made planning our Red Sea road trip so much easier. Highly recommend El Menshawi to anyone visiting Hurghada.",
      name: "Amara Okafor",
    },
    {
      id: 3,
      quote:
        "Best car rental experience in Hurghada! The staff is professional, the 2026 models are in top condition, and no hidden fees at all.",
      name: "Karim El-Sayed",
    },
    {
      id: 4,
      quote:
        "Outstanding customer support and smoothly arranged airport delivery. Drives around Hurghada were super comfortable with our Tiggo 8 Pro.",
      name: "Elena Rostova",
    },
    {
      id: 5,
      quote:
        "Great daily rates for brand new cars. Booking was quick and easy over WhatsApp, and the team in El Kawther made everything effortless.",
      name: "David Miller",
    },
  ],
};

export const booking = {
  id: "booking",
  eyebrow: "Get In Touch",
  heading: "Book Your Ride",
  intro:
    "Have questions about our services or need assistance with your car rental? Our dedicated team is here to help you every step of the way.",
  findUsLabel: "Find us:",
  followLabel: "Follow on us:",
  form: {
    firstName: { label: "First name", placeholder: "Enter first name" },
    lastName: { label: "Last name", placeholder: "Enter last name" },
    email: { label: "Email", placeholder: "you@example.com" },
    phone: { label: "Phone", placeholder: "+20 1xx xxx xxxx" },
    pickupDate: { label: "Pick-up date" },
    dropoffDate: { label: "Drop-off date" },
    carType: { label: "Car type", placeholder: "Select a car type" },
    message: { label: "Message", placeholder: "Tell us about your trip" },
    consentLabel: "I agree to the",
    termsLabel: "Terms & Conditions",
    privacyLabel: "Privacy Policy",
    submitLabel: "Book Now",
  },
};

export const termsAndPrivacy = [
  {
    id: "terms-and-privacy",
    title: "Terms of Service & Privacy Policy",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "1. Driver Requirements",
        content:
          "Renters must be at least 21 years old and hold a valid Egyptian driving license or an official International Driving Permit for foreign visitors.",
      },
      {
        heading: "2. Vehicle Usage & Guidelines",
        content:
          "All vehicles are for personal transportation on paved roads. Off-roading, racing, or using vehicles for unauthorized commercial transport is strictly prohibited.",
      },
      {
        heading: "3. Payment, Deposits & Fuel",
        content:
          "Rental rates are calculated on a 24-hour basis. Payments and security deposits are settled upon delivery, and vehicles must be returned with the same fuel level as received.",
      },
      {
        heading: "4. Information Collection & Use",
        content:
          "We collect personal details (name, phone number, ID/Passport, driving license) solely to process rental agreements, verify legal status, and provide customer support.",
      },
      {
        heading: "5. Data Security & Contact",
        content:
          "Your data is protected using security measures and will never be shared with third parties. For inquiries, visit our office in El Kawther, Hurghada, or contact El Menshawi Car Rent directly.",
      },
    ],
  },
];

export const footer = {
  id: "footer",
  copyright: "© 2026 El Menshawi.",
  development: "https://aaaportfolio.vercel.app/",
  columns: [
    {
      title: "What We Do",
      links: [
        { label: "Daily Rental", href: "#services" },
        { label: "Airport Transfers", href: "#services" },
        { label: "Long-Term Leasing", href: "#services" },
        { label: "Chauffeur Services", href: "#services" },
        { label: "Intercity Rides", href: "#services" },
      ],
    },
    {
      title: "Pages",
      links: [
        { label: "Home", href: "#top" },
        { label: "About Us", href: "#about" },
        { label: "Car Fleet", href: "#fleet" },
        { label: "Our Services", href: "#services" },
        { label: "Book Now", href: "#book" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Testimonials", href: "#testimonials" },
        { label: "Terms & Conditions", action: "terms" },
        { label: "Privacy Policy", action: "terms" },
        { label: "Contact Us", action: "whatsapp" },
      ],
    },
  ],
};
