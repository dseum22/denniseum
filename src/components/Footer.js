import React from 'react'
import { GitHub, Linkedin } from 'react-feather';

const Footer = () => {
    return (
        <footer className='text-center w-full text-sm pb-6'>
            <span>&copy; {new Date().getFullYear()} Dennis Eum</span>
            <div className='flex justify-center mt-3'>
                <a className='social' href='https://www.linkedin.com/in/denniseum/' target='_blank' rel='noreferrer'><Linkedin /></a>
                <a className='social' href='https://github.com/dseum22' target='_blank' rel='noreferrer'><GitHub /></a>
            </div>
        </footer>
    )
}

export default Footer
