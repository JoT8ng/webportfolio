import React, { useState } from 'react'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { IoIosMenu, IoMdClose } from "react-icons/io"


const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false)

    const handleClick = () => {
    	setMenuClick(!menuClick);
    }

    const content = <>
        <div className='absolute bg-gray-light min-h-[60vh] left-0 top-[-100%] w-full flex items-center justify-end px-5 mx-auto'>
            <ul className='flex flex-col gap-8'>
                <li>
                    <Link href='/' activeClassName='active'>Projects</Link>
                </li>
                <li>
                    <Link href='/gisprojects' activeClassName='active'>GIS Projects</Link>
                </li>
                <li>
                    <Link href='/about' activeClassName='active'>About</Link>
                </li>
                <li>
                    <Link href='/resume' activeClassName='active'>Resume</Link>
                </li>
                <li>
                    <Link href='https://github.com/JoT8ng/'>
                        <BsGithub style={{width: '30px', height: '30px', color: 'rgb(208,241,241)'}} />
                    </Link>
                </li>
                <li>
                    <Link href='https://uk.linkedin.com/in/jocelyntang'>
                        <BsLinkedin style={{width: '50px', height: '50px', color: 'rgb(208,241,241)', paddingLeft: '25px'}} />
                    </Link>
                </li>
            </ul>
        </div>
    </>

    return(
        <nav className='flex justify-between mx-auto bg-gray-light pl-10 pr-10 py-5'>
            <Link href='/'>
                <span className='items-start font-roboto-bold font-bold text-black'>JT.</span>
            </Link>
            <div className='sm:hidden md:static bg-gray-light md:min-h-fit md:w-auto flex items-center justify-end px-5'>
                <ul className='flex md:flex-row  md:items-center md:gap-[4vw]'>
                    <li>
                        <Link href='/' activeClassName='active'>Projects</Link>
                    </li>
                    <li>
                        <Link href='/gisprojects' activeClassName='active'>GIS Projects</Link>
                    </li>
                    <li>
                    	<Link href='/about' activeClassName='active'>About</Link>
                    </li>
                    <li>
                    	<Link href='/resume' activeClassName='active'>Resume</Link>
                    </li>
                    <li>
                    	<Link href='https://github.com/JoT8ng/'>
                        	<BsGithub style={{width: '30px', height: '30px', color: 'rgb(208,241,241)'}} />
                    	</Link>
                    </li>
                    <li>
                    	<Link href='https://uk.linkedin.com/in/jocelyntang'>
                        	<BsLinkedin style={{width: '50px', height: '50px', color: 'rgb(208,241,241)', paddingLeft: '25px'}} />
                    	</Link>
                    </li>
            	</ul>
            </div>
            <div>
		        {menuClick && content}
	        </div>
	        <div className='flex items-center gap-6'>
		        <button className='block md:hidden transition' onClick={handleClick}>
		            {menuClick ? <IoIosMenu /> : <IoMdClose />}
		        </button>
	        </div>
        </nav>
    );
}

export default Navbar;