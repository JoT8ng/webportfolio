import Template from '../../components/template'
import Layout from '../../components/layout'
import data from '../../data/data'


const Niledams = () => {
    return (
        <Layout>
            <div>
                <Template info={data.GISProjects[0]} />
            </div>
        </Layout>
    )
}

export default Niledams;