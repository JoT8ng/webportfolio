import Template from '../../components/template2'
import Layout from '../../components/layout'
import data from '../../data/data'
import Image from 'next/image'
import nilebody from '../../media/nile-dams/NileBodyA2-01.png'
import nileeco from '../../media/nile-dams/NileBodyA2_ECOLOGICAL_PRINT.jpg'
import cairogrowth from '../../media/nile-dams/CairoGrowth_Classified2DRAWING.jpg'
import khartoum from '../../media/nile-dams/KhartoumFlood.gif'
import merowe from '../../media/nile-dams/MeroweDam.gif'
import niledelta from '../../media/nile-dams/NileDelta_ClimateChangeFlood.jpg'
import erosion from '../../media/nile-dams/NileDelta_CoastalErosion_ZOOM-01.jpg'
import aswan from '../../media/nile-dams/AswanDam_DRAWING.jpg'
import gerd from '../../media/nile-dams/GERDDamLapseSCALE_DRAWING_WHITE_DEM.jpg'
import nilegrowth from '../../media/nile-dams/NileGrowth.gif'
import ethiopiaenergy from '../../media/nile-dams/EthiopiaOverall_EnergyMap-01.png'
import ethiopiaforest from '../../media/nile-dams/EthiopiaOverall_ForestCoverLoss-01.jpg'
import ethiopianight from '../../media/nile-dams/EthiopiaOverall_EnergyMap_NightLights.jpg'


const Niledams = () => {
    return (
        <Layout>
            <div>
                <Template info={data.GISProjects[0]} />
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
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Unreal Engine 4</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>MultiSpec- Multispectral Image Data Analysis System</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Landsat 8, 7, 5 Satellite</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Copernicus Sentinel</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col bg-gray-light sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20 sm:px-10 pb-20'>
                    <Image src={nilebody} />
                    <Image src={nileeco} />
                    <Image src={cairogrowth} />
                    <Image src={khartoum} />
                    <Image src={merowe} />
                    <Image src={niledelta} />
                    <Image src={erosion} />
                    <Image src={aswan} />
                    <Image src={gerd} />
                    <Image src={nilegrowth} />
                    <Image src={ethiopiaenergy} />
                    <Image src={ethiopiaforest} />
                    <Image src={ethiopianight} />
                </div>
            </div>
        </Layout>
    )
}

export default Niledams;
