import Template from '../../components/template'
import Layout from '../../components/layout'
import data from '../../data/data'


const Hydrodams = () => {
    return (
        <Layout>
            <div>
                <Template info={data.Projects[1]} />
                <div className='grid flex-col bg-gray-light dark:bg-gray-dark pb-20 px-20 md:grid-cols-2 grid-cols-1 justify-items-start gap-8'>
                    <div className='group flex-col overflow-hidden shadow-md bg-green-light flex justify-start p-8'>
                        <p className='font-sans font-bold text-sm text-black group-hover:text-salmon-100 pb-3'>Role:</p>
                        <ul>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>GIS Web Developer and Consultant</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Acquisition and processing of geospatial datasets</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Design, visualisation, and symbology of map using QGIS and Mapbox</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>UI design on Figma</li>
                        </ul>
                    </div>
                    <div className='group flex-col overflow-hidden shadow-md bg-green-light flex justify-start p-8'>
                        <p className='font-sans font-bold text-sm text-black group-hover:text-salmon-100 pb-3'>Frameworks, Libraries, and Languages:</p>
                        <ul>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>React Leaflet</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Leaflet</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Mapbox</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>opensheet</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Next.js</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>GDAL Python</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>TypeScript</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Python</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>HTML</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Hydrodams;