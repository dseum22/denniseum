import React from 'react'

const Footer = () => {
    return (
        <footer className='py-4 md:py-6 flex justify-center sm:justify-between text-gray-600 text-base md:text-lg'>
            <span className='hidden sm:block'>Built with <a className='link-internal' href='https://reactjs.org/' target='_blank' rel='noreferrer'>React</a> and <a className='link-internal' href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>Tailwind</a></span>
            <span>&copy; {new Date().getFullYear()} Dennis Eum</span>
        </footer>
    )
}

export default Footer
