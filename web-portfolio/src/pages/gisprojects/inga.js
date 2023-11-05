import Template from '../../components/template2'
import Layout from '../../components/layout'
import data from '../../data/data'


const Inga = () => {
    return (
        <Layout>
            <div>
                <Template info={data.GISProjects[1]} />
                <div className='bg-gray-light pb-20 px-20 flex justify-items-center gap-8'>
                    <div className='group flex-col overflow-hidden shadow-md bg-green-light flex justify-start p-8'>
                        <p className='font-sans font-bold text-sm text-black group-hover:text-salmon-100 pb-3'>Software Used:</p>
                        <ul>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>QGIS</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Adobe Illustrator</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Adobe Photoshop</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Adobe After Effects</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Adobe Premiere Pro</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Cinema 4D</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Rhinoceros 3D</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Landsat 8 Satellite</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Copernicus Sentinel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Inga;
