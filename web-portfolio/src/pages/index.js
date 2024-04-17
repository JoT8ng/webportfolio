import Link from 'next/link';
import Layout from '../components/layout'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import data from '../data/data'
import Image from 'next/image'
import proimg1 from '../media/hydrodamsapp.jpg'
import proimg2 from '../media/epdata-thumbnail.png'
import proimg6 from '../media/Placeholder.png'
import group1 from '../media/GroupLight.png'
import GroupDark from '../media/GroupDark.png'
import { useTheme } from '../context/ThemeProvider'
import proimg3 from '../media/movies-preview.png'
import proimg4 from '../media/SnakeGameplay.png'
import proimg5 from '../media/WhaleGameplay.png'


const Home = () => {
    const projectImage = { proimg1, proimg2, group1, proimg3, proimg4, proimg5, proimg6 }
    const { isDarkMode, toggleTheme } = useTheme()

    return (
        <Layout>
            <div>
                <section className={`flex p-20 ${isDarkMode ? 'circular-gradient-dark' : 'circular-gradient-light'}`}>
                    <div className='flex flex-col justify-center center-content'>
                        <h1 className='font-sans font-normal lg:text-4xl pb-3 md:text-2xl sm:text-lg text-black dark:text-white'>Hi,</h1>
                        <h1 className='font-sans font-normal lg:text-4xl pb-3 md:text-2xl sm:text-lg text-black dark:text-white'>
                            I&#39;m <span className='text-gradient bg-clip-text text-transparent font-bold'>Jocelyn Tang</span>, a software developer
                        </h1>
                        <p className='font-mono lg:text-base py-3 md:text-sm sm:text-xs text-black dark:text-white'>
                            I create beautiful and robust web applications with a profound understanding of the importance of 
                            client and user requirements at the core of every successful project.
                        </p>
                        <Link href='/about' className='font-roboto-bold font-bold lg:text-lg py-3 text-black dark:text-white hover:text-gradient md:text-sm sm:text-xs'>About me</Link>
                        <div className='flex gap-4'>
                            <Link href='https://github.com/JoT8ng/'>
                                <BsGithub className='w-5 h-5 text-black dark:text-white' />
                            </Link>
                            <Link href='https://www.linkedin.com/in/jocelyntang/'>
                                <BsLinkedin className='w-5 h-5 text-black dark:text-white hover:text-salmon-100' />
                            </Link>
                        </div>
                    </div>
                    <div className='flex-row hover:opacity-80'>
                        <div className="hidden sm:block">
                            <button onClick={toggleTheme}>
                                {isDarkMode ?
                                    <Image src={GroupDark} alt='homepage dark background graphic' />
                                    :
                                    <Image src={group1} alt='homepage background graphic' />
                                }
                            </button>
                        </div>
                    </div>
                </section>
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

export default Home;
