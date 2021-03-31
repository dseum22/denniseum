import React from 'react'
import { Link } from 'react-router-dom'

const InlineLink = (props) => {
    if (props.href) {
        return (
            <a className='border-b border-gray-800 text-gray-800 hover:border-gray-600 hover:text-gray-600 transition-colors duration-200' href={props.href} target='_blank' rel='noreferrer'>{props.children}</a>
        )
    } else {
        return (
            <Link className='border-b border-gray-800 text-gray-800 hover:border-gray-600 hover:text-gray-600 transition-colors duration-200' to={props.to}>{props.children}</Link>
        )
    }
}

export default InlineLink
