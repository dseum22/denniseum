import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { Redirect } from 'react-router'
import CardHeader from '../../components/cards/CardHeader'

const AdminDashboard = () => {
    const [responseSuccess, responseError] = [
        ['Submitted', 'M5 13l4 4L19 7'],
        ['Error', 'M6 18L18 6M6 6l12 12']
    ]
    const [response, setResponse] = useState(['', ''])
    const [isOpaque, setIsOpaque] = useState(false)
    const [data, setData] = useState({
        name: '',
        body: ''
    })
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [isProcessing, setIsProcessing] = useState(false)
    const [validate, setValidate] = useState(false)
    useEffect(() => firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            setIsLoggedIn(false)
        }
    }), [])
    useEffect(() => {
        response[0] === '' ? setIsOpaque(false) : setIsOpaque(true)
        return () => setIsOpaque(false)
    }, [response])
    useEffect(() => {
        if (isOpaque) {
            setTimeout(() => setIsOpaque(false), 1750)
        }
    }, [isOpaque])
    const handleChange = e => setData(data => ({
        ...data,
        [e.target.name]: e.target.value
    }))
    const handleSubmit = e => {
        e.preventDefault()
        if (e.target.checkValidity()) {
            setIsProcessing(true)
            firebase.firestore().collection('posts').doc(data.name.toLowerCase().split(' ').join('-')).set({
                ...data,
                timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
                body: data.body.split('\n\n')
            }).then(() => {
                setValidate(false)
                setIsProcessing(false)
                setData({
                    name: '',
                    body: ''
                })
                setResponse(responseSuccess)
            }).catch((error) => {
                setIsProcessing(false)
                setResponse(responseError)
            })
        } else {
            setValidate(true)
            setResponse(responseError)
        }
    }
    return isLoggedIn ? (
        <>
            <div className='flex justify-between flex-nowrap'>
                <CardHeader name='Form'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z' />
                </CardHeader>
                <div className={`flex flex-nowrap justify-betweenpy-1 px-2 bg-gray-200 rounded font-base transition-opacity duration-200 ${isOpaque ? '' : 'opacity-0'}`}>
                    <span className='my-auto text-sm sm:text-base'>{response[0]}</span>
                    <svg className='ml-1 my-auto h-4 w-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={response[1]} />
                    </svg>
                </div>
            </div>
            <form className={`mt-3 ${validate ? 'form-validate' : ''}`} onSubmit={handleSubmit} noValidate>
                <fieldset disabled={isProcessing}>
                    <div className='mb-3'>
                        <input className='form-field' name='name' type='text' value={data.name} onChange={handleChange} placeholder='Name' required />
                    </div>
                    <div className='mb-3'>
                        <textarea className='form-field' name='body' value={data.body} onChange={handleChange} placeholder='Body' required></textarea>
                    </div>
                    <button className='btn-primary' type='submit'>Submit</button>
                </fieldset>
            </form>
        </>
    ) : <Redirect to='/admin/login' />
}

export default AdminDashboard
