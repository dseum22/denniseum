import React from 'react'

const BtnSocial = (props) => {
    return (
        <>
            <a className={`btn-classic w-10 h-10 ${props.className}`} href={props.href} target='_blank' rel='noreferrer'><div className='inline-block align-middle'>{props.children}</div></a>
        </>
    )
}

export default BtnSocial
