import React from 'react'
import PageLayout from '../components/PageLayout'
import CardItem from '../components/cards/CardItem'
import CardHeader from '../components/cards/CardHeader'
import ListBody from '../components/lists/ListBody'
import ListCollapse from '../components/lists/ListCollapse'
import ListBox from '../components/lists/ListBox'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <PageLayout name='Dennis Eum'>
            <p className='text-xl sm:text-2xl'>
                Hey! My name is Dennis Eum, and I am a student based in Minnesota. I do full stack development and am also an avid cellist and debater.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 md:mt-6'>
                <div className='grid grid-cols-1 gap-4 sm:gap-6'>
                    <CardItem>
                        <CardHeader name='Linguistic'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </CardHeader>
                        <ListBody>
                            <ListCollapse name='English' info='Native' />
                            <ListCollapse name='Korean' info='Native' />
                            <ListCollapse name='Spanish' info='Fluent' />
                        </ListBody>
                    </CardItem>
                    <CardItem>
                        <CardHeader name='Technical'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' />
                        </CardHeader>
                        <ListBody>
                            <ListCollapse name='HTML' info='Native, JSX' />
                            <ListCollapse name='JS' info='React, Alpine, Inertia' />
                            <ListCollapse name='CSS' info='Tailwind, Bootstrap' />
                            <ListCollapse name='PHP' info='Laravel, Google API' />
                            <ListCollapse name='SQL' info='MySQL, PostgreSQL' />
                            <ListCollapse name='Python' info='Algorithms, Data science' />
                            <ListCollapse name='Tools' info='Docker, Figma, Photoshop, Vite, Google Cloud, Firebase, GitHub' />
                        </ListBody>
                    </CardItem>
                </div>
                <CardItem>
                    <CardHeader name='Projects'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' />
                    </CardHeader>
                    <ListBody>
                        <ListBox name='tfa-calendar' info='A web app to facilitate scheduling for tutors and students. Made for a non-profit&apos;s tutoring program.' />
                        <ListBox name='tfa-main' info='A frontend-focused project for the main website of a non-profit. Using React, Tailwind, and Firebase.' />
                        <ListBox name='denniseum' info='My personal website, utilizing a variety of my technical skills. Relying on Firebase for backend.' />
                        <ListBox name='rfa-coldemailing' info='A Google Apps script that automates publicity emails to increase awareness of a non-profit&apos;s programs.' />
                        <Link to='/projects'>
                            <li className='transition-colors duration-200 mt-2 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 select-none rounded flex flex-nowrap text-gray-500'>
                                <span className='text-lg sm:text-xl'>View more projects</span>
                                <svg className='h-6 w-6 my-auto' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </li>
                        </Link>
                    </ListBody>
                </CardItem>
            </div>
        </PageLayout>
    )
}

export default Home
