

const Template = ({ info }) => {
    return (
        <div className='bg-gray-light dark:bg-gray-dark'>
            <div className='px-20 py-10'>
                <div className='flex mx-auto w-full'>
                    <h2 className='text-black dark:text-white font-sans font-bold text-2xl pb-3'>{info.name}</h2>
                </div>
                <div className='flex mx-auto w-full'>
                    <p className='text-black dark:text-white font-mono text-xs'>{info.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Template;