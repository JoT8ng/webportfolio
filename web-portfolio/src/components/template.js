import Link from 'next/link';


const Template = ({ info }) => {
    return (
        <div>
            <h2>{info.name}</h2>
            <Link href={info.link}>Link</Link>
            <Link href={info.github}>Github</Link>
            <p>{info.description}</p>
        </div>
    )
}

export default Template;