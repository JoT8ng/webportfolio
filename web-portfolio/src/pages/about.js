import Layout from '../components/layout'
import Image from 'next/image'
import profile from '../media/profile.jpg'


const About = () => {
    return (
        <Layout>
            <div className='bg-gray-light dark:bg-gray-dark p-20 justify-between gap-8 md:h-screen'>
                <div className='md:flex'>
                    <div>
                        <Image src={profile} alt='profile' className='w-[800px]' />
                    </div>
                    <div className='md:pl-8'>
                        <h1 className='font-sans font-bold text-black dark:text-white text-3xl pb-8'>About Me</h1>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            Hi! I&#39;m Jocelyn, a Software Developer based in Toronto Canada 
                            with a background in architecture and GIS &#40;Geographic Information Systems&#41;.
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            My journey into tech began with automating tasks and creating software to improve efficiency in 
                            my architectural work. I discovered a passion for developing software that solves real-world problems 
                            and automates tasks. Attending Harvard's CS50X Introduction to Computer Science, fostered a passion for 
                            programming and problem solving. 
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            I believe my skills and previous work experiences are transferable to software engineering. Some of 
                            the skills I can bring are: complex problem solving, project management, graphic design, software 
                            proficiency, team collaboration, synthesizing complex information, critical thinking, and communication 
                            and presentation skills.
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            With strengths in time management, I am able to work productively in many environments and situations. 
                            I am also committed to continuous learning and mastering new technologies to develop innovative solutions.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;
