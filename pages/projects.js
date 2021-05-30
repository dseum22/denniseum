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
            <PageLayout name="Projects">
                <p className="text-xl sm:text-2xl">
                    These are some of my programming and design projects.
            </p>
                <div className="mt-4 md:mt-6">
                    <ListBody>
                        <div className="grid sm:grid-cols-2">
                            <ListBox href="https://github.com/dseum22/tfa-calendar">
                                <ListBox.Title>tfa-calendar</ListBox.Title>
                                <ListBox.Description>
                                    A web app to facilitate scheduling for tutors and students. Made for a non-profit's tutoring program.
                                </ListBox.Description>
                                <ListBox.Stack>
                                    React, Tailwind, Inertia, Laravel, MySQL, Google Cloud
                                </ListBox.Stack>
                                <ListBox.Info>
                                    The non-profit organization needed a relatively cheap but scalable app to handle the scheduling between tutors and students. Previously using a time-consuming system of trading Google calendar appointments, tfa-calendar centralized all interactions in an intuitively designed and fast website. The app runs on Google Cloud Run as a Docker container while the database is on a Google Compute Engine.
                                </ListBox.Info>
                            </ListBox>
                            <ListBox href="https://github.com/dseum22/tfa-main">
                                <ListBox.Title>tfa-main</ListBox.Title>
                                <ListBox.Description>
                                    A frontend-focused project for the main website of a non-profit. Using React, Tailwind, and Firebase.
                                </ListBox.Description>
                                <ListBox.Stack>
                                    React, Tailwind, Firebase
                                </ListBox.Stack>
                                <ListBox.Info>
                                    This was approached with friendliness in mind to reflect the organization's mission as well as target audience.
                                </ListBox.Info>
                            </ListBox>
                            <ListBox href="https://github.com/dseum22/denniseum">
                                <ListBox.Title>denniseum</ListBox.Title>
                                <ListBox.Description>
                                    My personal website, utilizing a variety of my technical skills. Relying on Firebase for backend.
                                </ListBox.Description>
                                <ListBox.Stack>
                                    Next, Tailwind, Firebase
                                </ListBox.Stack>
                                <ListBox.Info>
                                    For this website, I kept simplicity and organization as the guiding principles. While there is a significant lack of color, it adds a uniformity that makes the site easy to view. Firebase was used to handle form responses and analytics.
                                </ListBox.Info>
                            </ListBox>
                            <ListBox href="https://github.com/dseum22/rfa-coldemailing">
                                <ListBox.Title>rfa-coldemailing</ListBox.Title>
                                <ListBox.Description>
                                    A Google Apps script that automates publicity emails to increase awareness of a non-profit's programs.
                                </ListBox.Description>
                                <ListBox.Stack>
                                    Google Apps Script, Google Spreadsheet
                                </ListBox.Stack>
                                <ListBox.Info>
                                    This was a simple script I used to automate emails sent to prospective schools. It keeps track of responses and the dates emails were sent so that manual work is minimized.
                                </ListBox.Info>
                            </ListBox>
                            <ListBox href="https://github.com/dseum22/formsender-js">
                                <ListBox.Title>formsender-js</ListBox.Title>
                                <ListBox.Description>
                                    A JS library for simplifying form implementations. It combines fetch, bot verification, and basic customization.
                                </ListBox.Description>
                                <ListBox.Stack>
                                    Vanilla JavaScript
                                </ListBox.Stack>
                                <ListBox.Info>
                                    Wanting to explore the creation of libraries, I created this to simplify form creation for a site by making it easy to include basic bot verification and form validation.
                                </ListBox.Info>
                            </ListBox>
                            <ListBox>
                                <ListBox.Title>ds-disease-data</ListBox.Title>
                                <ListBox.Description>
                                    Pulling from an international database of disease frequency by geography, I applied machine learning to identify patterns of spread.
                                </ListBox.Description>
                                <ListBox.Stack>
                                    Mathematica
                                </ListBox.Stack>
                                <ListBox.Info>
                                    During my internship at Augment Software, I used Mathematica to analyze disease frequency by geography. This was a straightforward project I took to improve my understanding of data science while learning more about Mathematica's utility.
                                </ListBox.Info>
                            </ListBox>
                            <ListBox href="https://github.com/dseum22/citecreator">
                                <ListBox.Title>citecreator</ListBox.Title>
                                <ListBox.Description>
                                    A web app that automatically creates cites and pushes an entry to a Google spreadsheet for debate evidence.
                                </ListBox.Description>
                                <ListBox.Stack>
                                    Next, Tailwind, Google Apps Script, Google Spreadsheet
                                </ListBox.Stack>
                                <ListBox.Info>
                                    This automatically formats debate evidence citations and enters the citation entry into the respective Google Spreadsheet to prevent repeat entries between debate teammates.
                                </ListBox.Info>
                            </ListBox>
                            <ListBox>
                                <ListBox.Title>impulse</ListBox.Title>
                                <ListBox.Description>
                                    A work in progress note taking app that integrates uniform typography with KaTeX and end-to-end encryption. Influenced heavily by Notion.
                                </ListBox.Description>
                                <ListBox.Stack>
                                    Next, Tailwind, Inertia, Node, Laravel, PostgreSQL, Google Cloud
                                </ListBox.Stack>
                                <ListBox.Info>
                                    Still a work in progress, the final version and functionality is not finished.
                                </ListBox.Info>
                            </ListBox>
                        </div>
                    </ListBody>
                </div>
            </PageLayout>
        </>
    )
}

export default Projects
