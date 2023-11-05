import Layout from '../components/layout'
import Image from 'next/image'
import profile from '../media/profile.jpg'


const About = () => {
    return (
        <Layout>
            <div className='bg-gray-light p-20 justify-between gap-8 md:h-screen'>
                <div className='md:flex'>
                    <div>
                        <Image src={profile} alt='profile' />
                    </div>
                    <div className='md:pl-8'>
                        <h1 className='font-sans font-bold text-black text-3xl pb-8'>About Me</h1>
                        <p className='font-sans text-sm text-black pb-3 text-justify'>
                            Hi! I&#39;m Jocelyn, a dedicated self-taught developer based in London.
                        </p>
                        <p className='font-sans text-sm text-black pb-3 text-justify'>
                            My background from architecture and GIS &#40;geographic information systems&#41;, ignited an interest in 
                            crafting innovative solutions to streamline workflows. Attending Harvard&#39;s CS50X, fostered a passion for 
                            programming and problem solving.
                        </p>
                        <p className='font-sans text-sm text-black pb-3 text-justify'>
                            Being a fast learner and constantly striving for self improvement, I possess a natural aptitude for 
                            mastering diverse software, programming languages, and frameworks. I combine my  design expertise, 
                            attention to detail, and multi-disciplinary skillsets to create beautiful and robust web applications. 
                            My professional background has ingrained in me the significance of effective communication, cohesive 
                            teamwork, meticulous organization/time management, and a profound understanding of the importance of 
                            client and user requirements at the core of every successful project.
                        </p>
                        <p className='font-sans text-sm text-black pb-3 text-justify'>
                            I have had the privilege of working on a web GIS map for an NGO to facilitate humanitarian and 
                            environmental initiatives, which has shaped my development as a software developer. Witnessing the 
                            tangible impact of the software I develop on real-world challenges has fortified my commitment to 
                            creating user-centric solutions. I derive immense fulfillment from the meaningful and impactful work 
                            that I am fortunate to be a part of.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;
