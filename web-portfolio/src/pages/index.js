import Link from 'next/link';
import Layout from '../components/layout'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import data from '../data/data'
import Image from 'next/image'
import proimg1 from '../media/hydrodamsapp.jpg'


const Home = () => {
    return (
        <Layout>
            <div>
                <section className='flex flex-col px-52 py-44 circular-gradient-light'>
                    <h1 className='font-sans font-normal text-4xl pb-3'>Hi,</h1>
                    <h1 className='font-sans font-normal text-4xl pb-3'>
                        I'm <span className='text-gradient bg-clip-text text-transparent font-bold'>Jocelyn Tang</span>, a web developer in London
                    </h1>
                    <p className='font-mono text-base py-3'>
                        I create beautiful and robust web applications with a profound understanding of the importance of 
                        client and user requirements at the core of every successful project.
                    </p>
                    <Link href='/about' className='font-roboto-bold font-bold text-lg py-3 text-black hover:bg-clip-text hover:text-gradient hover:text-transparent'>About me</Link>
                    <div className='flex gap-4'>
                        <Link href='https://github.com/JoT8ng/'>
                            <BsGithub className='w-5 h-5 text-black' />
                        </Link>
                        <Link href='https://uk.linkedin.com/in/jocelyntang'>
                            <BsLinkedin className='w-5 h-5 text-black' />
                        </Link>
                    </div>
                </section>
                <section className='grid bg-gray-light p-10 xs:grid-cols-1 lg:grid-cols-2 gap-8 content-center justify-items-center'>
                    {data.Projects.map(project => (
                        <div className='relative overflow-hidden'>
                            <div className='relative aspect-w-16 aspect-h-9'>
                                <Image src={proimg1} alt='hydrodams thumbnail' className='h-auto max-w-full shadow-md opacity-100 hover:opacity-30 transition duration-300' />
                            </div>
                            <div key={project.name} className='absolute top-0 left-0 w-full rectangle overflow-hidden shadow-md opacity-0 hover:opacity-70 transition duration-300 bg-gray-dark  flex justify-center items-center px-6'>
                                <div className='text-center'>
                                    <Link href={`/projects/${project.internal}`}>
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

export default Home;