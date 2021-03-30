import React, { useState } from 'react'

const ListItem = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <li className='transition-colors duration-300 mt-2 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 select-none rounded' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex justify-between text-gray-500 text-lg sm:text-xl'>
                <span>{props.name}</span>
                <span className='ml-1 my-auto focus:outline-none'>
                    <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M20 12H4' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                    </svg>
                </span>
            </div>
            <div className={`text-gray-400 text-base sm:text-lg flex ${isOpen ? '' : 'hidden'}`}>
                <svg className='h-5 w-5 mr-1 md:mr-2 my-auto flex-shrink-0' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
                <span>{props.info}</span>
            </div>
        </li>
    )
}

export default ListItem
