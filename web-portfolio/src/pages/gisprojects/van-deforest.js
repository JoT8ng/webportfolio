import Template from '../../components/template'
import Layout from '../../components/layout'
import data from '../../data/data'


const Vandeforest = () => {
    return (
        <Layout>
            <div>
                <Template info={data.GISProjects[3]} />
            </div>
        </Layout>
    )
}

export default Vandeforest;