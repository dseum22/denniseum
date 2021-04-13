import React, { useEffect, useState } from 'react'
import CardHeader from '../../components/cards/CardHeader'
import CardItem from '../../components/cards/CardItem'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Redirect } from 'react-router'

const AdminLogin = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [validate, setValidate] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    useEffect(() => firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setIsLoggedIn(true)
        }
    }), [])
    const handleChange = e => setData(data => ({
        ...data,
        [e.target.name]: e.target.value
    }))
    const handleSubmit = e => {
        e.preventDefault()
        if (e.target.checkValidity()) {
            setIsProcessing(true)
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE).then(() => firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(() => setIsLoggedIn(true)).catch(() => setIsProcessing(false)))
        } else {
            setValidate(true)
        }
    }
    return isLoggedIn ? <Redirect to='/admin/dashboard' /> : (
        <div className='my-auto w-full mx-3 sm:mx-auto sm:w-96'>
            <CardItem>
                <CardHeader name='Login'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' />
                </CardHeader>
                <form className={`mt-3 ${validate ? 'form-validate' : ''}`} onSubmit={handleSubmit} noValidate>
                    <fieldset disabled={isProcessing}>
                        <div className='mb-3'>
                            <input className='form-field' name='email' type='email' value={data.email} onChange={handleChange} placeholder='Email' required />
                        </div>
                        <div className='mb-3'>
                            <input className='form-field' name='password' type='password' value={data.password} onChange={handleChange} placeholder='Password' required />
                        </div>
                        <button className='btn-primary' type='submit'>Login</button>
                    </fieldset>
                </form>
            </CardItem>
        </div>
    )
}

export default AdminLogin
