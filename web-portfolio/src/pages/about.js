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
                            Hi! I&#39;m Jocelyn, a GIS Data Analyst at Ratio.City a division of Esri Canada with a background from architecture.
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            During my studies I learned GIS and remote sensing, applying them to projects analyzing urban patterns 
                            and engaging in humanitarian efforts. My interest in working with geospatial data and desire to create 
                            GIS web applications ignited an interest in programming. My journey into tech began with automating tasks 
                            and creating software to improve efficiency in my architectural work. I discovered a passion for developing 
                            software for the AEC industry to tackle real-world problems and the climate crises.
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            I have a keen interest in creating data visualizations, particularly using geospatial data. My experience 
                            includes developing GIS web applications for climate advocacy work with an NGO, where I leveraged geospatial 
                            data to drive impactful projects.
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            Some of the skills I can bring are: complex problem solving, project management, graphic design, software 
                            proficiency, team collaboration, synthesizing complex information, critical thinking, and communication and 
                            presentation skills.
                        </p>
                        <p className='font-sans text-sm text-black dark:text-white pb-3 text-justify'>
                            I am committed to continuous learning and mastering new technologies to develop innovative solutions. I am 
                            excited about the opportunity to bring my unique blend of GIS, architecture, and software development skills.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;
