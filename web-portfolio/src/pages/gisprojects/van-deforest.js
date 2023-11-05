import Template from '../../components/template2'
import Layout from '../../components/layout'
import data from '../../data/data'
import Image from 'next/image'
import classification from '../../media/van-deforest/MtHorneOldGrowthDeforestationClassified-01.jpg'


const Vandeforest = () => {
    return (
        <Layout>
            <div>
                <Template info={data.GISProjects[3]} />
                <div className='bg-gray-light pb-20 px-20 flex justify-items-center gap-8'>
                    <div className='group flex-col overflow-hidden shadow-md bg-green-light flex justify-start p-8'>
                        <p className='font-sans font-bold text-sm text-black group-hover:text-salmon-100 pb-3'>Software Used:</p>
                        <ul>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>QGIS</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Adobe Illustrator</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Adobe Photoshop</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>MultiSpec- Multispectral Image Data Analysis System</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Landsat 8, 7, 5 Satellite</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Copernicus Sentinel</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col bg-gray-light grid-cols-1 gap-8 md:px-20 sm:px-10 pb-20'>
                        <Image src={classification} alt='Vancouver Old Growth Remote Sensing' />
                </div>
            </div>
        </Layout>
    )
}

export default Vandeforest;
