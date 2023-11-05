import Template from '../../components/template2'
import Layout from '../../components/layout'
import data from '../../data/data'
import Image from 'next/image'
import sample1 from '../../media/steppe/CombinedSample.png'
import volgograd from '../../media/steppe/volgograd.png'
import cadastre from '../../media/steppe/CadastreRemoveAnimation4.jpg'
import floodplain from '../../media/steppe/FloodplainTransformationVolgograd.gif'
import ndvi from '../../media/steppe/CadastreNDVIAnimation_May.gif'
import fields from '../../media/steppe/fields.png'


const Steppe = () => {
    return (
        <Layout>
            <div>
                <Template info={data.GISProjects[2]} />
                <div className='bg-gray-light pb-20 px-20 flex justify-items-center gap-8'>
                    <div className='group flex-col overflow-hidden shadow-md bg-green-light flex justify-start p-8'>
                        <p className='font-sans font-bold text-sm text-black group-hover:text-salmon-100 pb-3'>Software Used:</p>
                        <ul>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>QGIS</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>ArcMap</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Adobe Illustrator</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Adobe Photoshop</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>MultiSpec- Multispectral Image Data Analysis System</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Landsat 8, 7, 5 Satellite</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Copernicus Sentinel</li>
                        </ul>
                    </div>
                </div>
                <div className='md:flex bg-gray-light justify-center items-center pb-8 md:px-20 sm:px-10'>
                    <Image src={sample1} width={500} alt='Samples' />
                </div>
                <div className='flex flex-col bg-gray-light grid-cols-1 gap-8 md:px-20 sm:px-10 pb-20'>
                    <Image src={volgograd} alt='Volgograd River Infrared' />
                    <Image src={cadastre} alt='Russian Cadastre' />
                    <Image src={floodplain} alt='Infrared Floodplains' />
                    <Image src={ndvi} alt='NDVI Fields May' />
                    <Image src={fields} alt='Fields Remote Sensing' />
                </div>
            </div>
        </Layout>
    )
}

export default Steppe;
