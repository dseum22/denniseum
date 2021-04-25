import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import ListBody from '../components/lists/ListBody'
import ListBox from '../components/lists/ListBox'

const Projects = () => {
    return (
        <>
            <Head>
                <meta name="robots" content="none"></meta>
                <link rel="canonical" href="https://denniseum.com/projects"></link>
            </Head>
            <PageLayout name='Projects'>
                <p className='text-xl sm:text-2xl'>
                    These are some of my programming and design projects.
            </p>
                <div className='mt-4 md:mt-6'>
                    <ListBody>
                        <div className='grid sm:grid-cols-2'>
                            <ListBox name='tfa-calendar' info='A web app to facilitate scheduling for tutors and students. Made for a non-profit&apos;s tutoring program.' />
                            <ListBox name='tfa-main' info='A frontend-focused project for the main website of a non-profit. Using React, Tailwind, and Firebase.' />
                            <ListBox name='denniseum' info='My personal website, utilizing a variety of my technical skills. Relying on Firebase for backend.' />
                            <ListBox name='rfa-coldemailing' info='A Google Apps script that automates publicity emails to increase awareness of a non-profit&apos;s programs.' />
                            <ListBox name='formsender-js' info='A JS library for simplifying form implementations. It combines fetch, bot verification, and basic customization.' />
                            <ListBox name='ds-disease-data' info='Pulling from an international database of disease frequency by geography, I applied machine learning to identify patterns of spread.' />
                            <ListBox name='citecreator' info='A web app that automatically creates cites and pushes an entry to a Google spreadsheet for debate evidence.' />
                            <ListBox name='impulse' info='A work in progress note taking app that integrates uniform typography with KaTeX and end-to-end encryption. Influenced heavily by Notion.' />
                        </div>
                    </ListBody>
                </div>
            </PageLayout>
        </>
    )
}

export default Projects
