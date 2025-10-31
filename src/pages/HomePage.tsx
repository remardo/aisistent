import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { CaseStudies } from "../components/CaseStudies";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { Blog } from "../components/Blog";
import { News } from "../components/News";
import { ContactForm } from "../components/ContactForm";

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <Blog />
      <News />
      <ContactForm />
    </>
  );
}
