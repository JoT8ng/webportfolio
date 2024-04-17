import Template from '../../components/template'
import Layout from '../../components/layout'
import data from '../../data/data'


const Epdata = () => {
    return (
        <Layout>
            <div>
                <Template info={data.Projects[0]} />
                <div className='flex-col mx-auto w-full bg-gray-light dark:bg-gray-dark px-20 pb-10'>
                    <li className='text-black dark:text-white font-mono text-xs'>
                        Initiated and developed full-stack application with ReactJS as a frontend and Flask as a backend with a SQL 
                        database using SQLAlchemy in development and PostgresSQL in production.
                    </li>
                    <li className='text-black dark:text-white font-mono text-xs'>
                        Configured the monorepo to operate seamlessly across development, testing, and production environments, 
                        while integrating it into a robust CI/CD pipeline using GitHub Actions with comprehensive testing protocols, 
                        laying the groundwork for scalable software expansion
                    </li>
                    <li className='text-black dark:text-white font-mono text-xs'>
                        Configured unit, integration, and end-to-end testing using Jest and Cypress
                    </li>
                    <li className='text-black dark:text-white font-mono text-xs'>
                        Used Postman to test the REST APIs and configured rate-limiting for all API end points
                    </li>
                </div>
                <div className='grid flex-col bg-gray-light dark:bg-gray-dark pb-20 px-20 md:grid-cols-2 grid-cols-1 justify-items-start gap-8'>
                    <div className='group flex-col overflow-hidden shadow-md bg-green-light flex justify-start p-8'>
                        <p className='font-sans font-bold text-sm text-black group-hover:text-salmon-100 pb-3'>Role:</p>
                        <ul>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Full Stack Web Developer</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>UI design on Figma</li>
                        </ul>
                    </div>
                    <div className='group flex-col overflow-hidden shadow-md bg-green-light flex justify-start p-8'>
                        <p className='font-sans font-bold text-sm text-black group-hover:text-salmon-100 pb-3'>Frameworks, Libraries, and Languages:</p>
                        <ul>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>React</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Flask</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>react-chartjs-2</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>React Tables</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>SQLAlchemy</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>PostgreSQL</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>JavaScript</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Python</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>HTML</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>CSS</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Postman</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Jest</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>Cypress</li>
                            <li className='font-mono text-xs text-black group-hover:text-salmon-100'>GitHub Actions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Epdata;