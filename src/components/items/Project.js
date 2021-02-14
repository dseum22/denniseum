import React from 'react'
import BtnDate from '../buttons/BtnDate'
import Slideshow from './Slideshow'

const Project = (props) => {
    return (
        <>
            <div className={`mt-6 md:pb-6 text-xl grid grid-cols-1 ${!props.slideHide?'md:grid-cols-3':''} font-mono`}>
                <div className='md:col-span-2 md:pr-16'>
                    <div className='flex'>
                        <h3>{props.title}</h3>
                        <BtnDate className='ml-6' date={props.date} />
                    </div>
                    <div className='pt-3 mb-3 border-b-2 border-white'></div>
                    {props.children}
                </div>
                {(() => {
                    if (!props.slideHide) {
                        return <Slideshow className='px-12 pt-3 md:p-0' src={props.slideSrc} count={props.slideCount} duration={props.slideDuration} constant={props.slideConstant ? true : false} />;
                    }
                })()}
            </div>
        </>
    )
}

export default Project
