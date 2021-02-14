import React from 'react'
import { Fade } from 'react-reveal'
import BtnProgram from '../components/buttons/BtnProgram'
import Project from '../components/Project'

const Resume = () => {
    const celloAwards = ['YPSCA winner (Karen Lundmark Holmes Award)', 'Thursday Musical High School Division (1st place)', 'Salon Se Leve Solo Concerto Performing Invitation', 'Classical MPR Varsity Competition (Semi-finalist)', 'Mary West High School Division (1st place)', 'Thursday Musical Junior High Division (2nd place)', 'Schubert Club Junior High Division (1st place)', 'Mary West Junior High Division (1st place)'];
    return (
        <>
            <Fade delay={150}>
                <h2 className='mt-12 text-4xl'>Technical skills</h2>
            </Fade>
            <Fade delay={250}>
                <div>
                    <BtnProgram className='mr-6' icon='devicon-html5-plain' name='HTML5' />
                    <BtnProgram className='mr-6' icon='devicon-css3-plain' name='CSS3' />
                    <BtnProgram className='mr-6' icon='devicon-javascript-plain' name='JavaScript' />
                    <BtnProgram className='mr-6' icon='devicon-php-plain' name='PHP' />
                    <BtnProgram className='mr-6' icon='devicon-mysql-plain' name='MySQL' />
                    <BtnProgram className='mr-6' icon='devicon-laravel-plain' name='Laravel' />
                    <BtnProgram className='mr-6' icon='devicon-react-plain' name='React' />
                    <BtnProgram icon='devicon-bootstrap-plain' name='Bootstrap' />
                </div>
            </Fade>
            <Fade duration={500} bottom>
                <h2 className='mt-12 text-4xl'>Linguistic skills</h2>
                <div className='mt-6 text-xl flex'>
                    <h3 className='mr-4 sm:mr-6'>English (native)</h3>
                    <h3 className='mr-4 sm:mr-6'>Korean (native)</h3>
                    <h3>Spanish (fluent)</h3>
                </div>
                <h2 className='mt-12 text-4xl'>Projects</h2>
            </Fade>
            <div>
                <Fade duration={500} bottom>
                    <Project title='Schedule Management App' date='2020 Fall - Present' slideSrc='tfa-calendar' slideCount={4} slideDuration={2500}>
                        <p className='text-base'>I personally designed and coded a scheduling management software for a tutoring non-profit with the Laravel framework, utilizing HTML, CSS, JS, SQL, PHP. <span className='hidden lg:block'><br></br>The frontend was designed with the Bootstrap library. I deployed this app onto Google Cloud, utilizing their Cloud Run, Compute Engine, VPC network, and load balancing services.</span></p>
                    </Project>
                    <Project title='Personal Website' date='2020 Summer - Present' slideSrc='personal' slideCount={1} slideConstant={true}>
                        <p className='text-base'>This was a completely frontend-focused project: I utilized React and Tailwind CSS along with other supporting libraries to showcase my abilities.<span className='hidden lg:block'><br></br>The backend is handled by Firebase, using Firestore and Cloud Functions for the contact form as well as some analytics extensions.</span></p>
                    </Project>
                    <Project title='Formsender.js Library' date='2020 Winter' slideSrc='formsender.js' slideCount={2} slideDuration={3000}>
                        <p className='text-base '>I created this JavaScript library to combine static form sending, bot verification, and simple customization feature in an easy to use component. <span className='hidden lg:block'><br></br>This integrated a Google Apps Script API fetch to not only make form handling free, but to also take advantage of Google's extensive mailing and spreadsheet services.</span></p>
                    </Project>
                    <Project title='Disease Data Analysis' date='2019 Summer' slideHide={true}>
                        <p className='text-base'>Pulling from an international database of disease frequency by geography, I cleaned and preprocessed data and applied machine learning to identify patterns of spread. <span className='hidden md:block'><br></br>This was my first introduction functional programming with Mathematica.</span><span className='hidden lg:block'><br></br>In addition, I setup a simple tabular format to display the corresponding analysis with each graph of frequencies in a country.</span></p>
                    </Project>
                    <Project title='Custom Emailing Script' date='2020 Fall' slideSrc='rfa-coldemailing' slideCount={2} slideDuration={2750}>
                        <p className='text-base'>I coded this for a non-profit organization so that emails would be automatically and easily sent for a given contact list.<span className='hidden lg:block'><br></br> This used JavaScript with the Google Apps Script libraries to enhance spreadsheet interactions and speed of work.</span></p>
                    </Project>
                </Fade>
            </div>
            <h2 className='mt-12 text-4xl'>Cello Awards</h2>
            <div>
                <Fade duration={500} bottom cascade>
                    <ul className='font-mono text-xl mt-6'>
                        {celloAwards.map((item, index) => <li className='mt-2' key={index}>{item}</li>)}
                    </ul>
                </Fade>
            </div>
        </>
    )
}

export default Resume
