import React from 'react'

const BtnProgram = (props) => {
    return (
        <>
            <button className={`btn-classic text-6xl lg:text-8xl tooltip-top mt-6 ${props.className}`} disabled>
                <i className={props.icon}></i>
                <span className='tooltip-text text-sm font-mono hidden md:block rounded-md'>{props.name}</span>
            </button>
        </>
    )
}

export default BtnProgram
