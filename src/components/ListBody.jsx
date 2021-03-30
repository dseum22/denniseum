import React from 'react'

const ListBody = (props) => {
    return (
        <ul className='text-lg sm:text-xl mt-1 md:mt-3'>
            {props.children}
        </ul>
    )
}

export default ListBody
