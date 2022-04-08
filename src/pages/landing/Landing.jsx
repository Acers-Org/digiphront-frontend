import Hero, { Soft } from "../../components/hero/hero";
import Layout from "../../layout/Layout";
import Pricing from "../../components/pricing/Pricing";
import Works from "../../components/works/Works";
import FAQ from "../../components/pricing/FAQ";

const Landing = () => {

    return (
        <div>
            <Layout>
                <Hero/>
                <Soft/>
                <Works/>
                <Pricing/>
                <FAQ/>
            </Layout>
        </div>
    )
}
export default Landing;