import React, { useState } from 'react'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from "react-icons/bs"


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className='bg-gray-light'>
            <Link href='/'>
                <span className='logo-text'>JT.</span>
            </Link>
            <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
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
        </nav>
    );
}

export default Navbar;