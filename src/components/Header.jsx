import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageLink from './links/PageLink'
import SocialLink from './links/SocialLink'

const Header = () => {
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => setIsOpen(false), [pathname])
    return (
        <header className='pt-6 md:pt-10'>
            <div className='border-t border-b border-gray-400 mt-1 transition-all'>
                <div className='flex justify-between'>
                    <div className='flex justify-between lg:justify-start w-full'>
                        <Link className='px-1 sm:px-2 md:px-3 my-auto text-3xl sm:text-4xl font-bold' to='/'>DSE</Link>
                        <div className='hidden lg:flex'>
                            <PageLink to='/projects'>Projects</PageLink>
                            <PageLink to='/cello'>Cello</PageLink>
                            <PageLink to='/contact'>Contact</PageLink>
                        </div>
                    </div>
                    <div className='hidden lg:flex'>
                        <SocialLink href='https://www.linkedin.com/in/denniseum/'>LinkedIn</SocialLink>
                        <SocialLink href='https://twitter.com/dseum22/'>Twitter</SocialLink>
                        <SocialLink href='https://github.com/dseum22/'>GitHub</SocialLink>
                    </div>
                    <button className='lg:hidden h-12 btn-toggle pr-1 sm:pr-2 md:pr-3' type='button' aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                        <span className='mb-2 w-8'></span>
                        <span className='mb-2 w-8'></span>
                        <span className='w-5 ml-auto'></span>
                    </button>
                </div>
                <div className={`lg:hidden ${isOpen ? '' : 'hidden'}`}>
                    <PageLink className='block !pt-0 sm:!pt-1' to='/projects'>Projects</PageLink>
                    <PageLink className='block !pt-0' to='/cello'>Cello</PageLink>
                    <PageLink className='block !pt-0' to='/contact'>Contact</PageLink>
                </div>
            </div>
        </header >
    )
}

export default Header
