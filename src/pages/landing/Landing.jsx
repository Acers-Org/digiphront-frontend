import Hero, { Soft } from "../../components/hero/hero";
import Pricing from "../../components/pricing/Pricing";
import Works from "../../components/works/Works";
import FAQ from "../../components/pricing/FAQ";
import Foot from "../../components/pricing/Foot";
import Contact from "../../components/contact/Contact";

const Landing = () => {
  return (
    <div>
        <Hero />
        <Soft />
        <Works />
        <Pricing />
        <FAQ />
        <Contact />
        <Foot />
    </div>
  );
};
export default Landing;
