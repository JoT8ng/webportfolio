import Layout from '../components/layout'
import Image from 'next/image'
import profile from '../media/profile.jpg'


const About = () => {
    return (
        <Layout>
            <div className='bg-gray-light dark:bg-gray-dark p-20 justify-between gap-8 md:h-screen'>
                <div className='md:flex'>
                    <div>
                        <Image src={profile} alt='profile' />
                    </div>
                    <div className='md:pl-8'>
                        <h1 className='font-sans font-bold text-black dark:text-white text-3xl pb-8'>About Me</h1>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            Hi! I&#39;m Jocelyn, a dedicated Software Developer based in Toronto &#40;Canada&#41; and London &#40;UK&#41;.
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            I blend expertise in architecture/construction, GIS, and software development to craft innovative solutions. 
                            I leverage critical thinking and problem-solving skills to develop efficient software solutions to streamline 
                            workflows and address climate/sustainability challenges. I am also passionate about making geospatial data 
                            accessible to the wider public to conduct humanitarian or climate advocacy work through GIS web applications. 
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            My diverse skill sets and multi-disciplinary background have equipped me with invaluable teamwork 
                            experiences, enabling me to excel in communication while collaborating with diverse teams and clients. 
                            Additionally, I possess a talent for swiftly mastering a wide array of technologies and frameworks.
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            My projects reflect a balance between client objectives and technical feasibility, showcasing a commitment 
                            to excellence and continuous self-improvement.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;
