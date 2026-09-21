import Hero from "../components/landingPage/Hero";
import CarTypes from "../components/landingPage/CarTypes";
import About from "../components/landingPage/About";
import Fleet from "../components/landingPage/Fleet";
import Services from "../components/landingPage/Services";
import Promo from "../components/landingPage/Promo";
import RentalCategories from "../components/landingPage/RentalCategories";
import Testimonials from "../components/landingPage/Testimonials";
import Booking from "../components/landingPage/Booking";
import {
  hero,
  carTypes,
  about,
  fleet,
  services,
  promo,
  rentalCategories,
  testimonials,
  booking,
  contact,
  social,
  termsAndPrivacy,
} from "../content/content";

// Every section of the landing page, in the order they're rendered on the
// page. To reorder sections, reorder them here; to add or remove one, add
// or remove both the component import and its content import above.
export default function LandingPage() {
  return (
    <>
      <Hero {...hero} />
      <CarTypes {...carTypes} />
      <About {...about} />
      <Fleet {...fleet} />
      <Services {...services} />
      <Promo {...promo} />
      <RentalCategories {...rentalCategories} />
      <Testimonials {...testimonials} />
      <Booking
        {...booking}
        contact={contact}
        social={social}
        carTypeOptions={carTypes.items.map((item) => item.label)}
        termsAndPrivacy={termsAndPrivacy}
      />
    </>
  );
}
