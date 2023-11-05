import Layout from '../components/layout'
import Link from 'next/link';
import data from '../data/data'
import Image from 'next/image'
import gisimg2 from '../media/Inga3DamMap_LargeWHITE-01.jpg'
import gisimg3 from '../media/JocelynTang_Sample.jpg'
import gisimg4 from '../media/vandeforest-preview.jpg'
import gisimg1 from '../media/nile-preview.png'


const GisProjects = () => {
    const projectImage = { gisimg1, gisimg2, gisimg3, gisimg4 }

    return (
        <Layout>
            <div>
                <section className='grid bg-gray-light p-10 xs:grid-cols-1 lg:grid-cols-2 gap-8 content-center justify-items-center'>
                    {data.GISProjects.map(project => (
                        <div className='relative overflow-hidden'>
                            <div className='relative aspect-w-16 aspect-h-9'>
                                <Image src={projectImage[project.thumbnail]} alt={project.name} className='rectangle shadow-md opacity-100 hover:opacity-30 transition duration-300' />
                            </div>
                            <div key={project.name} className='absolute top-0 left-0 w-full rectangle overflow-hidden shadow-md opacity-0 hover:opacity-70 transition duration-300 bg-gray-dark  flex justify-center items-center px-6'>
                                <div className='text-center'>
                                    <Link href={`/gisprojects/${project.internal}`}>
                                        <p className='font-roboto-bold font-bold pb-3 text-gray-light'>{project.name}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </Layout>
    )
}

export default GisProjects;
