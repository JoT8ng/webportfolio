import Template from '../../components/template'
import Layout from '../../components/layout'
import data from '../../data/data'


const Steppe = () => {
    return (
        <Layout>
            <div>
                <Template info={data.GISProjects[2]} />
            </div>
        </Layout>
    )
}

export default Steppe;