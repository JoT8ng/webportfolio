import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { BsGithub, BsLinkedin, BsSunFill } from "react-icons/bs"
import { IoIosMenu, IoMdClose } from "react-icons/io"
import Image from 'next/image'
import logo from '../media/JTDesignLogoCombined.png'
import darklogo from '../media/JTDesignLogoCombinedDARK.png'
import { useTheme } from '../context/ThemeProvider'


const Navbar = () => {
    const router = useRouter()
    const [menuClick, setMenuClick] = useState(false)
    const { isDarkMode, toggleTheme } = useTheme()

    const handleClick = () => {
    	setMenuClick(!menuClick);
    }

    const content = (
        <div className='md:hidden absolute bg-gray-light dark:bg-gray-dark left-0 right-0 top-16 w-full flex items-center justify-start px-8 pb-8 z-50'>
            <ul className='flex flex-col gap-8'>
                <li>
                    <Link href='/projects' className='active font-sans font-normal text-sm text-black dark:text-white hover:text-gradient'>Projects</Link>
                </li>
                <li>
                    <Link href='/gisprojects' className='active font-sans font-normal text-sm text-black dark:text-white hover:text-gradient'>GIS Projects</Link>
                </li>
                <li>
                    <Link href='/about' className='active font-sans font-normal text-sm text-black dark:text-white hover:text-gradient'>About</Link>
                </li>
                <li>
                    <Link href='https://github.com/JoT8ng/'>
                        <BsGithub className='w-5 h-5 text-black dark:text-white hover:text-salmon-100' />
                    </Link>
                </li>
                <li>
                    <Link href='https://www.linkedin.com/in/jocelyntang/'>
                        <BsLinkedin className='w-5 h-5 text-black dark:text-white hover:text-salmon-100' />
                    </Link>
                </li>
                <li>
                    <button onClick={toggleTheme}>
                        <BsSunFill className='text-black dark:text-white' />
                    </button>
                </li>
            </ul>
        </div>
    )

    return(
        <nav className='bg-gray-light dark:bg-gray-dark z-50'>
            <div className='flex justify-between flex-1 p-5'>
                <div>
                    {isDarkMode ?
                        <Link href='/'>
                            <Image src={darklogo} width={50} alt='logo' />
                        </Link>
                        :
                        <Link href='/'>
                            <Image src={logo} width={50} alt='logo' />
                        </Link>
                    }
                </div>
                <div className='hidden md:flex md:static md:flex-1 text-center sm:hidden justify-end'>
                    <ul className='flex md:gap-8'>
                        <li>
                            <Link href='/projects' className={`font-sans font-normal text-sm text-black dark:text-white hover:text-gradient ${router.pathname === '/' ? 'text-gradient' : ''}`}>Projects</Link>
                        </li>
                        <li>
                            <Link href='/gisprojects' className={`font-sans font-normal text-sm text-black dark:text-white hover:text-gradient ${router.pathname === '/gisprojects' ? 'text-gradient' : ''}`}>GIS Projects</Link>
                        </li>
                        <li>
                            <Link href='/about' className={`${router.pathname === '/about' ? 'text-gradient' : ''} font-sans font-normal text-sm text-black dark:text-white hover:text-gradient`}>About</Link>
                        </li>
                        <li>
                            <Link href='https://github.com/JoT8ng/'>
                                <BsGithub className='w-5 h-5 text-black dark:text-white hover:text-salmon-100' />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.linkedin.com/in/jocelyntang/'>
                                <BsLinkedin className='w-5 h-5 text-black dark:text-white hover:text-salmon-100' />
                            </Link>
                        </li>
                        <li>
                            <button onClick={toggleTheme}>
                                <BsSunFill className='text-black dark:text-white' />
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    {menuClick && content}
                </div>
                <div className='flex items-center gap-6'>
                    <button className='block md:hidden transition' onClick={handleClick}>
                        {menuClick ? <IoMdClose className='w-6 h-6 text-black dark:text-white' /> : <IoIosMenu className='w-6 h-6 text-black dark:text-white' />}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
