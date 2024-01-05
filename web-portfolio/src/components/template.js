import Link from 'next/link'
import Image from 'next/image'
import proimg1 from '../media/hydrodams-preview.jpg'
import proimg2 from '../media/epdata-preview.png'


const Template = ({ info }) => {
    const projectImage = { proimg1, proimg2 };

    return (
        <div className='bg-gray-light dark:bg-gray-dark'>
            <div className='flex mx-auto w-full'>
                <Image src={projectImage[info.thumbnail]} alt={info.name} />
            </div>
            <div className='px-20 py-10'>
                <div className='flex mx-auto w-full'>
                    <h2 className='text-black dark:text-white font-sans font-bold text-2xl pb-3'>{info.name}</h2>
                </div>
                <div className='flex mx-auto w-full pb-3 text-sm'>
                    <Link href={info.link} className='pr-3 font-bold text-base text-gradient bg-clip-text text-transparent'>Link</Link>
                    <p className='pr-3 font-bold text-base text-gradient bg-clip-text text-transparent'>|</p>
                    <Link href={info.github} className='font-bold text-base text-gradient bg-clip-text text-transparent'>Github</Link>
                </div>
                <div className='flex mx-auto w-full'>
                    <p className='text-black dark:text-white font-mono text-xs'>{info.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Template;