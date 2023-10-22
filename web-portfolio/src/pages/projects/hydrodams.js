import Template from '../../components/template'
import Layout from '../../components/layout'
import data from '../../data/data'


const Hydrodams = () => {
    return (
        <Layout>
            <div>
                <Template info={data.Projects[1]} />
            </div>
        </Layout>
    )
}

export default Hydrodams;