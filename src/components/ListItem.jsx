import React, { useState } from 'react'

const ListItem = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <li className='mt-2'>
            <div className='flex justify-between'>
                <span>{props.names[0]}</span>
                <button className='ml-1 my-auto focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
                    <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M20 12H4' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                    </svg>
                </button>
            </div>
            <div className={`flex ${isOpen ? '' : 'hidden'}`}>
                <svg className='h-5 w-5 mr-1 md:mr-2 my-auto' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
                <span className='italic'>{props.names[1]}</span>
            </div>
        </li>
    )
}

export default ListItem
