import Hero from "../components/landingPage/Hero";
import CarTypes from "../components/landingPage/CarTypes";
import About from "../components/landingPage/About";
import Fleet from "../components/landingPage/Fleet";
import Services from "../components/landingPage/Services";
import Promo from "../components/landingPage/Promo";
import Stats from "../components/landingPage/Stats";
import Amenities from "../components/landingPage/Amenities";
import Testimonials from "../components/landingPage/Testimonials";
import Blog from "../components/landingPage/Blog";
import AppPromo from "../components/landingPage/AppPromo";
import {
  hero,
  carTypes,
  about,
  fleet,
  services,
  promo,
  stats,
  amenities,
  testimonials,
  blog,
  appPromo,
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
      <Stats {...stats} />
      <Amenities {...amenities} />
      <Testimonials {...testimonials} />
      <Blog {...blog} />
      <AppPromo {...appPromo} />
    </>
  );
}
