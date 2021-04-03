import React from 'react'

const PageLayout = (props) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 '>
            <div>
            <span className='text-4xl sm:text-5xl font-bold border-b-4 border-gray-700 !leading-tight'>{props.name}</span>
            </div>
            <div className='mt-4 sm:mt-5 lg:mt-0 lg:col-span-3'>
                {props.children}
            </div>
        </div>
    )
}

export default PageLayout
