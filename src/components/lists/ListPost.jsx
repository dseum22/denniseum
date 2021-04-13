import React from 'react'
import { Link } from 'react-router-dom'

const ListPost = (props) => {
    const convertTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }
    return (
        <Link to={`/blog/${props.parameter}`}>
            <li className='transition-colors duration-200 mt-2 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 select-none rounded'>
                <div className='flex items-center'>
                    <span className='text-gray-500 text-lg sm:text-xl mr-2'>{props.name}</span>
                    <span className='text-gray-500 text-sm sm:text-base px-2 bg-gray-100 rounded'>{convertTimestamp(props.timestamp)}</span>
                </div>
                <p className='text-gray-400 text-base sm:text-lg'>
                    {props.description}
                </p>
            </li>
        </Link>
    )
}

export default ListPost
