import React from 'react'
import CardItem from '../components/CardItem'
import CardHeader from '../components/CardHeader'
import ListBody from '../components/ListBody'
import ListItem from '../components/ListItem'

const Home = () => {
    return (
        <>
            <p className='text-xl sm:text-2xl'>
                Hey! I'm Dennis Eum, and I am a student based in Minnesota. I do full stack development and am also an avid cellist and debater.
            </p>
            <div className='grid grid-cols-1 gap-4 mt-4 md:mt-6'>
                <CardItem>
                    <CardHeader name='Linguistic'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </CardHeader>
                    <ListBody>
                        <ListItem names={['English', 'Native']} />
                        <ListItem names={['Korean', 'Native']} />
                        <ListItem names={['Spanish', 'Fluent']} />
                    </ListBody>
                </CardItem>
                <CardItem>
                    <CardHeader name='Technical'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' />
                    </CardHeader>
                    <ListBody>
                        <ListItem names={['HTML', 'Native, JSX']} />
                        <ListItem names={['JS', 'React, Alpine, Inertia']} />
                        <ListItem names={['CSS', 'Tailwind, Bootstrap']} />
                        <ListItem names={['PHP', 'Laravel, Google API']} />
                        <ListItem names={['SQL', 'MySQL, PostgreSQL']} />
                        <ListItem names={['Python', 'Algorithms, Data science']} />
                        <ListItem names={['Tools', 'Docker, Figma, Photoshop, Vite, GitHub']} />
                    </ListBody>
                </CardItem>
            </div>
        </>
    )
}

export default Home
