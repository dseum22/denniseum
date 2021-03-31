import React from 'react'
import PageLayout from '../components/PageLayout'
import CardItem from '../components/cards/CardItem'
import ContactBody from '../components/ContactBody'
import InlineLink from '../components/links/InlineLink'

const Contact = () => {
    return (
        <PageLayout name='Contact'>
            <p className='text-xl sm:text-2xl'>
                I'm generally active on <InlineLink href='https://twitter.com/dseum22/'>Twitter</InlineLink> and <InlineLink href='https://github.com/dseum22/'>GitHub</InlineLink>. If you want to contact me directly, please use the following form.
            </p>
            <div className='mt-4 md:mt-6'>
                <CardItem>
                    <ContactBody />
                </CardItem>
            </div>
        </PageLayout>
    )
}

export default Contact
