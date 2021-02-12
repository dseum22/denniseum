import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 px-6' role='navigation'>
            <Link className='text-2xl tracking-widest' to='/'>DSE</Link>
            <div className='md:block'>
                <Link className='link hidden sm:inline' to='/'>Home</Link>
                <Link className='link' to='/resume'>Résumé</Link>
                <Link className='link' to='/portfolio'>Portfolio</Link>
                <Link className='link' to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
