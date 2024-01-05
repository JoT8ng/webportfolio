import Template from '../../components/template2'
import Layout from '../../components/layout'
import data from '../../data/data'
import Image from 'next/image'
import inga1 from '../../media/inga/Inga3DamMap_LargeWHITE-01.jpg'
import inga2 from '../../media/inga/Inga3DamMap_Large_SATELLITE_reduced.jpg'
import inganight from '../../media/inga/AfricaIngaTrnasmission-01.jpg'
import night from '../../media/inga/DRCEnergyGrid_NightLights-01.jpg'
import kinshasa from '../../media/inga/CampKinshasaZoomMap_Callout-01.jpg'
import biodiversity from '../../media/inga/DRCEnergyGrid_Biodiversity-01.jpg'
import forestcover from '../../media/inga/DRCEnergyGrid_ForestCover-01.jpg'
import forestloss from '../../media/inga/DRCEnergyGrid_ForestLoss-01.jpg'
import energygrid from '../../media/inga/DRCEnergyGrid-01.jpg'
import solar from '../../media/inga/DRCEnergyGrid_SolarPVPotential_Coltan-01.jpg'
import wind from '../../media/inga/DRCEnergyGrid_WindProjectPotential_Coltan-01.jpg'


const Inga = () => {
    return (
        <Layout>
            <div>
                <Template info={data.GISProjects[1]} />
                <div className='bg-gray-light dark:bg-gray-dark pb-20 px-20 flex justify-items-center gap-8'>
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
                <div className='grid bg-gray-light dark:bg-gray-dark grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-20 sm:px-10 pb-20'>
                    <div>
                        <Image className='h-auto max-w-full' src={inga1} alt='inga1' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={inga2} alt='inga2' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={inganight} alt='Africa transmission night' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={night} alt='DRC Night Energy Grid' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={kinshasa} alt='Camp Kinshasa' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={biodiversity} alt='DRC Biodiversity' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={forestcover} alt='DRC Forest Cover' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={forestloss} alt='DRC Forest Loss' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={energygrid} alt='DRC Energy Grid' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={solar} alt='DRC Solar PV Potential' />
                    </div>
                    <div>
                        <Image className='h-auto max-w-full' src={wind} alt='DRC Wind Power Potential' />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Inga;
