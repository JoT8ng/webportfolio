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
                            crafting innovative solutions to streamline workflows. Completing Harvard&#39;s CS50X, fostered a passion for 
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
                            I am currently working on two software projects relating to the calculation and processing of carbon data in 
                            construction projects. One of them is a full-stack web application called EPData. that uses a React frontend and Flask backend with SQL relational databases.
                            The application allows architects and other construction professionals to track and visualize embodied carbon emissions of various 
                            construction material options. The other project uses the Revit API Dynamo Python Primer to calculate embodied carbon emissions of 
                            building components using an existing EPD &#40;environmental product declaration&#41; database within a Revit BIM model. 
                            This enables architects to store and schedule carbon data and conduct analysis of the overall embodied carbon of their 
                            building designs.
                        </p>
                        <p className='font-sans text-sm text-black pb-3 text-justify'>
                            In 2023, I have had the privilege of working on a collaborative web GIS map for an NGO to facilitate humanitarian and 
                            environmental initiatives. The project used React Leaflet and the Mapbox API for the visualisation of the geospatial data and
                            I worked closely with the NGO to develop the frontend design on Figma to reflect their branding and process/visualise their geospaital data using Mapbox API. 
                            Witnessing the tangible impact of the software I helped develop on real-world challenges has fortified my commitment to 
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
