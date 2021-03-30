import React from 'react'

const PageLayout = (props) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 '>
            <span className='text-4xl sm:text-5xl font-bold'>{props.name}</span>
            <div className='mt-4 sm:mt-5 lg:mt-0 lg:col-span-3'>
                {props.children}
            </div>
        </div>
    )
}

export default PageLayout
