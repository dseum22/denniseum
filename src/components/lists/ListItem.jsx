import React from 'react'

const ListItem = (props) => {
    if (props.href && props.href === '#') {
        return (
            <li className='transition-colors duration-200 mt-2 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 select-none rounded text-gray-500 flex flex-nowrap justify-between'>
                <span className='text-lg sm:text-xl'>{props.name}</span>
                <svg className='h-6 w-6 my-auto flex-shrink-0' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                </svg>
            </li>
        )
    } else if (props.href) {
        return (
            <a href={props.href} target='_blank' rel='noreferrer'>
                <li className='transition-colors duration-200 mt-2 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 select-none rounded text-gray-500 flex flex-nowrap justify-between'>
                    <span className='text-lg sm:text-xl'>{props.name}</span>
                    <svg className='h-6 w-6 my-auto flex-shrink-0' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                </li>
            </a >
        )
    } else {
        return (
            <li className='transition-colors duration-200 mt-2 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 select-none rounded text-gray-500'>
                <span className='text-lg sm:text-xl'>{props.name}</span>
            </li>
        )
    }
}

export default ListItem
