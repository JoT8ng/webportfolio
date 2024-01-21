import Layout from '../components/layout'
import Link from 'next/link';
import data from '../data/data'
import Image from 'next/image'
import proimg1 from '../media/hydrodamsapp.jpg'
import proimg2 from '../media/README_HomePic.png'
import group1 from '../media/GroupLight.png'
import proimg3 from '../media/Placeholder.png'


const GisProjects = () => {
    const projectImage = { proimg1, proimg2, group1, proimg3 }

    return (
        <Layout>
            <div>
            <section className='grid bg-gray-light dark:bg-gray-dark p-10 xs:grid-cols-1 lg:grid-cols-2 gap-8 content-center justify-items-center'>
                    {data.Projects.map(project => (
                        <div key={`${project.name}1`} className='relative overflow-hidden'>
                            <div key={`${project.name}2`} className='relative aspect-w-16 aspect-h-9'>
                                <Image src={projectImage[project.thumbnail]} alt={project.name} className='rectangle shadow-md opacity-100 hover:opacity-30 transition duration-300' priority />
                            </div>
                            <div key={`${project.name}3`} className='absolute top-0 left-0 w-full rectangle overflow-hidden shadow-md opacity-0 hover:opacity-70 transition duration-300 bg-gray-dark  flex justify-center items-center px-6'>
                                <div key={`${project.name}4`} className='text-center'>
                                    <Link href={project.internal}>
                                        <p className='font-roboto-bold font-bold pb-3 text-gray-light'>{project.name}</p>
                                    </Link>
                                    <Link href={project.link} className='p-3 text-sm text-gradient bg-clip-text text-transparent'>Link</Link>
                                    <Link href={project.github} className='p-3 text-sm text-gradient bg-clip-text text-transparent'>Github</Link>
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