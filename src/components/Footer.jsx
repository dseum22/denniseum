import React from 'react'

const Footer = () => {
    return (
        <footer className='text-center pb-4 md:pb-6'>
            <span className='text-gray-600 text-base'>&copy; {new Date().getFullYear()} Dennis Eum</span>
        </footer>
    )
}

export default Footer
