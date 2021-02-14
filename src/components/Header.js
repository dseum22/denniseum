import React from 'react'
import { Mail, GitHub, Linkedin, Instagram, Facebook } from 'react-feather'
import { Fade } from 'react-reveal'
import BtnSocial from './buttons/BtnSocial'

const Header = () => {
    const scrollToContact = () => {
        document.querySelector('form').scrollIntoView({ behavior: "smooth" });
    }
    return (
        <header className='pt-10 md:pt-14 lg:pt-16'>
            <div className='flex justify-between flex-wrap'>
                <div>
                    <h1 className='text-6xl lg:text-8xl font-bold'>Dennis&nbsp;Eum</h1>
                    <Fade duration={500} bottom cascade>
                        <div className='text-3xl lg:text-4xl font-bold mt-3 sm:flex tracking-wider'>
                            <div>/Programmer</div>
                            <div className='sm:ml-6'>/Cellist</div>
                            <div className='sm:ml-6'>/Debater</div>
                        </div>
                    </Fade>
                </div>
                <Fade duration={500} bottom cascade>
                    <div className='flex mt-6 md:ml-auto md:mt-auto'>
                        <button className='btn-classic w-10 h-10 mr-6 focus:outline-none' onClick={scrollToContact}><Mail className='inline-block align-middle' /></button>
                        <BtnSocial className='mr-6' href='https://www.linkedin.com/in/denniseum/'><Linkedin /></BtnSocial>
                        <BtnSocial className='mr-6' href='https://github.com/dseum22/'><GitHub /></BtnSocial>
                        <BtnSocial className='mr-6' href='https://www.facebook.com/denniseum/'><Facebook /></BtnSocial>
                        <BtnSocial href='http://instagram.com/denniseum/'><Instagram /></BtnSocial>
                    </div>
                </Fade>
            </div>
            <Fade duration={750} bottom cascade>
                <div className='pt-6 border-b-4 md:border-b-8 border-white'></div>
            </Fade>
        </header>
    )
}

export default Header
