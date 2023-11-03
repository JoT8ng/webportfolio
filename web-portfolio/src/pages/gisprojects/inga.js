import Template from '../../components/template'
import Layout from '../../components/layout'
import data from '../../data/data'


const Inga = () => {
    return (
        <Layout>
            <div>
                <Template info={data.GISProjects[1]} />
            </div>
        </Layout>
    )
}

export default Inga;