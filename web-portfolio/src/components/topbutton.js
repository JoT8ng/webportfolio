import { useEffect, useState } from 'react';
import Image from 'next/image';
import TopButtonIcon from '../icons/topbutton.svg';


function TopButton() {
    const [topButton, setTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setTopButton(true)
            } else {
                setTopButton(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
        {topButton && (
            <button onClick={scrollUp} className='fixed bottom-16 right-10'>
                <Image src={TopButtonIcon} alt='topbutton' className='w-10 h-10' />
            </button>
        )}
        </div>
    )
}

export default TopButton;