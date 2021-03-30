import React from 'react'
import { NavLink } from 'react-router-dom'

const PageLink = (props) => {
    return (
        <NavLink className='transition-colors duration-300 text-gray-600 text-xl sm:text-2xl hover:text-gray-900 px-1 py-2 sm:px-2 md:p-3 mt-auto' to={props.to} activeClassName='bg-gray-100 !text-gray-900'>{props.children}</NavLink>
    )
}

export default PageLink
