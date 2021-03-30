import React from 'react'
import { Link } from 'react-router-dom'
import PageLink from './PageLink'
import SocialLink from './SocialLink'

const Header = () => {
    return (
        <header className='pt-10'>
            <div className='border-t border-b border-gray-400 font-inter mt-1 flex justify-between'>
                <div className='flex justify-between lg:justify-start w-full'>
                    <Link className='px-1 sm:px-2 md:px-3 my-auto text-xl sm:text-2xl font-bold' to='/'>DSE</Link>
                    <div className='flex'>
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
            </div>
        </header>
    )
}

export default Header
