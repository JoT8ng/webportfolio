import Link from 'next/link';
import Layout from '../components/layout'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import data from '../data/data'


const Home = () => {
    return (
        <Layout>
            <div>
                <h1>Hi,</h1>
                <h1>I'm Jocelyn Tang, a developer in London</h1>
                <p>Description</p>
                <Link href='/about'>About me</Link>
                <div className='lowbar-icons'>
                    <Link href='https://github.com/JoT8ng/'>
                        <BsGithub style={{width: '30px', height: '30px', color: 'rgb(208,241,241)'}} />
                    </Link>
                    <Link href='https://uk.linkedin.com/in/jocelyntang'>
                        <BsLinkedin style={{width: '50px', height: '50px', color: 'rgb(208,241,241)', paddingLeft: '25px'}} />
                    </Link>
                </div>
            </div>
            <div>
                {data.Projects.map(project => (
                    <div key={project.name}>
                        <Link href={`/projects/${project.internal}`}>
                            <p>{project.name}</p>
                        </Link>
                        <Link href={project.link}>Link</Link>
                        <Link href={project.github}>Github</Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Home;