import React, { useEffect, useRef, useState } from 'react'
import CardHeader from '../components/cards/CardHeader'
import { DateTime } from 'luxon'
import firebase from 'firebase/app'
import 'firebase/firestore'

const ContactBody = () => {
    const [responseSuccess, responseError] = [
        ['Submitted', 'M5 13l4 4L19 7'],
        ['Error', 'M6 18L18 6M6 6l12 12']
    ]
    const [response, setResponse] = useState(['', ''])
    const [opacity, setOpacity] = useState(false)
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        verify_code: ''
    })
    const [processing, setProcessing] = useState(false)
    const [validate, setValidate] = useState(false)
    const verifyCodeRef = useRef(null)
    useEffect(() => {
        response[0] === '' ? setOpacity(false) : setOpacity(true)
        return () => setOpacity(false)
    }, [response])
    useEffect(() => {
        if (opacity) {
            setTimeout(() => setOpacity(false), 1750)
        }
    }, [opacity])
    const randomIntSet = () => [Math.floor(Math.random() * 7), Math.floor(Math.random() * 7)]
    const [verifySet, setVerifySet] = useState(randomIntSet())
    const handleChange = e => setData({
        ...data,
        [e.target.name]: e.target.value
    })
    const handleSubmit = e => {
        e.preventDefault()
        if (parseInt(data.verify_code) !== verifySet[0] * verifySet[1]) {
            verifyCodeRef.current.setCustomValidity('Invalid verification code.')
        } else {
            verifyCodeRef.current.setCustomValidity('')
        }
        if (!e.target.checkValidity()) {
            setValidate(true)
            setResponse(responseError)
        } else {
            setProcessing(true)
            const now = DateTime.local().setZone('America/Chicago');
            firebase.firestore().collection('responses').doc(now.toFormat('yyyy-MM-dd hh:mm:ss a')).set({
                to: atob('ZHNldW0yMkBnbWFpbC5jb20='),
                message: {
                    subject: `Message @ ${now.toFormat('ff')}`,
                    html: `<b>Name:</b> ${`${data.first_name} ${data.last_name}`}<br><br><b>Email:</b> ${data.email}<br><br><b>Message:</b><br>${data.message}`
                },
                map: {
                    name: `${data.first_name} ${data.last_name}`,
                    email: data.email,
                    message: data.message
                }
            }).then(() => {
                setValidate(false)
                setProcessing(false)
                setData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    message: '',
                    verify_code: ''
                })
                setVerifySet(randomIntSet())
                setResponse(responseSuccess)
            }).catch(() => {
                setProcessing(false)
                setResponse(responseError)
            });
        }
    }
    return (
        <>
            <div className='flex justify-between flex-nowrap'>
                <CardHeader name='Form'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </CardHeader>
                <div className={`flex flex-nowrap justify-betweenpy-1 px-2 bg-gray-200 rounded font-base transition-opacity duration-200 ${opacity ? '' : 'opacity-0'}`}>
                    <span className='my-auto text-sm sm:text-base'>{response[0]}</span>
                    <svg className='ml-1 my-auto h-4 w-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={response[1]} />
                    </svg>
                </div>
            </div>
            <form className={`relative pt-3 mb-3 ${validate ? 'form-validate' : ''}`} onSubmit={handleSubmit} noValidate>
                <fieldset className='grid grid-cols-1 gap-4 px-1' disabled={processing}>
                    <div className='grid grid-cols-1 gap-4'>
                        <div>
                            <label className='text-gray-600 text-sm sm:text-base'>Information: What is your personal contact?</label>
                            <div className='grid md:grid-cols-2 gap-4'>
                                <input className='form-field' name='first_name' type='text' value={data.first_name} onChange={handleChange} placeholder='First name' required />
                                <input className='form-field' name='last_name' type='text' value={data.last_name} onChange={handleChange} placeholder='Last name' required />
                            </div>
                        </div>
                        <input className='form-field' name='email' type='email' value={data.email} onChange={handleChange} placeholder='Email' required />
                        <textarea className='form-field' name='message' value={data.message} onChange={handleChange} placeholder='Message' required></textarea>
                    </div>
                    <div>
                        <label className='text-gray-600 text-sm sm:text-base'>Verification: What is {verifySet[0]} times {verifySet[1]}?</label>
                        <div className='flex flex-nowrap'>
                            <input className='form-field' name='verify_code' type='text' value={data.verify_code} onChange={handleChange} placeholder='Code' ref={verifyCodeRef} required />
                            <button className='transition transform duration-200 ease-in-out hover:scale-[1.3] w-min flex-shrink-0 ml-3 mr-1 focus:outline-none disabled:transform-none disabled:transition-none disabled:cursor-default' type='submit'>
                                <svg className='h-7 w-7' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default ContactBody
