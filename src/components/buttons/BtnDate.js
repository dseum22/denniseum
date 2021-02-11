import React from 'react'

const BtnDate = (props) => {
    return (
        <>
            <button className={`text-gray-200 border-2 rounded-lg p-1 border-gray-200 text-center text-sm cursor-default ${props.className}`} disabled>{props.date}</button>
        </>
    )
}

export default BtnDate
