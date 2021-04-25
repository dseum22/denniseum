import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import ContactForm from '../components/ContactForm'
import InlineLink from '../components/links/InlineLink'

const Contact = () => {
    return (
        <>
            <Head>
                <meta name="robots" content="none"></meta>
                <link rel="canonical" href="https://denniseum.com/contact"></link>
            </Head>
            <PageLayout name='Contact'>
                <p className='text-xl sm:text-2xl'>
                    I'm generally active on <InlineLink href='https://twitter.com/dseum22/' external>Twitter</InlineLink> and <InlineLink href='https://github.com/dseum22/' external>GitHub</InlineLink>. If you want to contact me directly, please use the following form.
            </p>
                <div className='mt-4 md:mt-6'>
                    <ContactForm />
                </div>
            </PageLayout>
        </>
    )
}

export default Contact
