import Template from '../../components/template'
import Layout from '../../components/layout'
import data from '../../data/data'


const Epdata = () => {
    return (
        <Layout>
            <div>
                <Template info={data.Projects[0]} />
            </div>
        </Layout>
    )
}

export default Epdata;