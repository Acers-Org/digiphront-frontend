import Hero, { Soft } from "../../components/hero/hero";
import Layout from "../../components/layout/Layout";
import Works from "../../components/works/Works";

const Landing = () => {

    return (
        <div>
            <Layout>
                <Hero/>
                <Soft/>
                <Works/>
            </Layout>
        </div>
    )
}
export default Landing;