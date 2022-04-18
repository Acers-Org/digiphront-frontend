import Hero, { Soft } from "../../components/hero/hero";
import Layout from "../../layout/Layout";
import Pricing from "../../components/pricing/Pricing";
import Works from "../../components/works/Works";
import FAQ from "../../components/pricing/FAQ";
import Testimony from "../../components/pricing/Testimony";
import Foot from "../../components/pricing/Foot";
import Contact from "../../components/pricing/Contact";

const Landing = () => {

    return (
        <div>
            <Layout>
                <Hero/>
                 <Soft/>
                <Works/>
                <Pricing/>
                {/*<FAQ/>
                <Testimony/>*/}
                <Contact/>
                <Foot/>
            </Layout>
        </div>
    )
}
export default Landing;