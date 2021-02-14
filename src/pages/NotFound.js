import React from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <header className='pt-10 md:pt-14 lg:pt-16'>
                <div className='flex justify-between flex-wrap'>
                    <div>
                        <h1 className='text-6xl lg:text-8xl font-bold flex flex-wrap mr-6'>404 error</h1>
                        <Fade duration={500} bottom cascade>
                            <div className='text-3xl lg:text-4xl font-bold mt-3 sm:flex tracking-wider'>
                                <div>This page does not exist. Please redirect to the <Link className='border-b-2 md:border-b-4 text-gray-200 hover:text-gray-400 border-gray-200 hover:border-gray-400' to='/'>homepage</Link>.</div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <Fade duration={750} bottom cascade>
                    <div className='pt-6 border-b-4 md:border-b-8 border-white mb-12'></div>
                </Fade>
            </header>
        </>
    )
}

export default NotFound
