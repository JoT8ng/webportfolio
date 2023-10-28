import Link from 'next/link';
import Layout from '../components/layout'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import data from '../data/data'


const Home = () => {
    return (
        <Layout>
            <div>
                <section className='flex flex-col px-52 py-44 circular-gradient-light'>
                    <h1 className='font-sans font-normal text-4xl pb-3'>Hi,</h1>
                    <h1 className='font-sans font-normal text-4xl pb-3'>I'm Jocelyn Tang, a web developer in London</h1>
                    <p className='font-mono text-base py-3'>
                        I create beautiful and robust web applications with a profound understanding of the importance of 
                        client and user requirements at the core of every successful project.
                    </p>
                    <Link href='/about' className='font-roboto-bold font-bold text-lg py-3'>About me</Link>
                    <div className='flex gap-4'>
                        <Link href='https://github.com/JoT8ng/'>
                            <BsGithub className='w-5 h-5 text-black' />
                        </Link>
                        <Link href='https://uk.linkedin.com/in/jocelyntang'>
                            <BsLinkedin className='w-5 h-5 text-black' />
                        </Link>
                    </div>
                </section>
                <section className='grid p-10 bg-gray-light xs:grid-cols-1 lg:grid-cols-2 gap-8 content-center justify-items-center'>
                    {data.Projects.map(project => (
                        <div key={project.name} className='h-full w-full xs:h-auto xs:rectangle overflow-hidden shadow-md bg-gray-100 px-20 py-40'>
                            <div className='justify-between text-center'>
                                <Link href={`/projects/${project.internal}`}>
                                    <p>{project.name}</p>
                                </Link>
                                <Link href={project.link}>Link</Link>
                                <Link href={project.github}>Github</Link>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </Layout>
    )
}

export default Home;