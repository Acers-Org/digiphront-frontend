import Hero, { Soft } from "../../components/hero/hero";
import Layout from "../../layout/Layout";
import Pricing from "../../components/pricing/Pricing";
import Works from "../../components/works/Works";

const Landing = () => {

    return (
        <div>
            <Layout>
                <Hero/>
                <Soft/>
                <Works/>
                <Pricing/>
            </Layout>
        </div>
    )
}
export default Landing;lt Landing;