import React, { useState } from 'react'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { IoIosMenu, IoMdClose } from "react-icons/io"


const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false)

    const handleClick = () => {
    	setMenuClick(!menuClick);
    }

    const content = (
        <div className='md:hidden absolute bg-gray-light left-0 right-0 top-16 w-full flex items-center justify-start px-8 pb-8'>
            <ul className='flex flex-col gap-8'>
                <li>
                    <Link href='/' activeClassName='active' className='font-sans font-normal text-sm text-black hover:text-gradient'>Projects</Link>
                </li>
                <li>
                    <Link href='/gisprojects' activeClassName='active' className='font-sans font-normal text-sm text-black hover:text-gradient'>GIS Projects</Link>
                </li>
                <li>
                    <Link href='/about' activeClassName='active' className='font-sans font-normal text-sm text-black hover:text-gradient'>About</Link>
                </li>
                <li>
                    <Link href='/resume' activeClassName='active' className='font-sans font-normal text-sm text-black hover:text-gradient'>Resume</Link>
                </li>
                <li>
                    <Link href='https://github.com/JoT8ng/'>
                        <BsGithub className='w-5 h-5 text-black hover:text-salmon-100' />
                    </Link>
                </li>
                <li>
                    <Link href='https://uk.linkedin.com/in/jocelyntang'>
                        <BsLinkedin className='w-5 h-5 text-black hover:text-salmon-100' />
                    </Link>
                </li>
            </ul>
        </div>
    )

    return(
        <nav className='bg-gray-light'>
            <div className='flex justify-between flex-1 p-5'>
                <div>
                    <Link href='/'>
                        <span className='items-start font-roboto-bold font-bold text-black'>JT.</span>
                    </Link>
                </div>
                <div className='hidden md:flex md:static md:flex-1 text-center sm:hidden justify-end'>
                    <ul className='flex md:gap-8'>
                        <li>
                            <Link href='/' activeClassName='active' className='font-sans font-normal text-sm text-black hover:text-gradient'>Projects</Link>
                        </li>
                        <li>
                            <Link href='/gisprojects' activeClassName='active' className='font-sans font-normal text-sm text-black hover:text-gradient'>GIS Projects</Link>
                        </li>
                        <li>
                            <Link href='/about' activeClassName='active' className='font-sans font-normal text-sm text-black hover:text-gradient'>About</Link>
                        </li>
                        <li>
                            <Link href='https://github.com/JoT8ng/'>
                                <BsGithub className='w-5 h-5 text-black hover:text-salmon-100' />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://uk.linkedin.com/in/jocelyntang'>
                                <BsLinkedin className='w-5 h-5 text-black hover:text-salmon-100' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {menuClick && content}
                </div>
                <div className='flex items-center gap-6'>
                    <button className='block md:hidden transition' onClick={handleClick}>
                        {menuClick ? <IoMdClose className='w-6 h-6' /> : <IoIosMenu className='w-6 h-6' />}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;