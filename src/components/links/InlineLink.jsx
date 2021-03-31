import React from 'react'

const InlineLink = (props) => {
    return (
        <a className='border-b border-gray-800 text-gray-800 hover:border-gray-600 hover:text-gray-600 transition-colors duration-200' href={props.href} target='_blank' rel='noreferrer'>{props.children}</a>
    )
}

export default InlineLink
