import Hero, { Soft } from "../../components/hero/hero";
import Layout from "../../layout/Layout";
import Pricing from "../../components/pricing/Pricing";
import Works from "../../components/works/Works";
import FAQ from "../../components/pricing/FAQ";
import Testimony from "../../components/pricing/Testimony";

const Landing = () => {

    return (
        <div>
            <Layout>
                <Hero/>
                <Soft/>
                <Works/>
                <Pricing/>
                <FAQ/>
                <Testimony/>
            </Layout>
        </div>
    )
}
export default Landing;