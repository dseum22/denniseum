import React, { Component } from 'react'
import { Send } from 'react-feather'
import { Fade } from 'react-reveal'
import { DateTime } from 'luxon'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verifyset: [1, 2],
            content: <> </>,
            disabled: false,
            validated: 'hidden'
        }
        this.form = React.createRef();
    }
    componentDidMount = () => {
        this.reloadVerify();
    }
    reloadVerify = () => {
        const a = this.randomInt(9);
        const b = this.randomInt(9);
        this.setState({
            verifyset: [a, b],
            content: <>Send <Send className='ml-3' /></>
        });
    }
    randomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    checkVerify = (input) => {
        let verifycode = document.querySelector('[data-verify="input"]');
        console.log(input);
        console.log(verifycode.value);
        if (input[0] * input[1] === parseInt(verifycode.value)) {
            verifycode.setCustomValidity('');
        } else {
            verifycode.setCustomValidity('Incorrect code.');
        }
    }
    submitForm = () => {
        const form = this.form.current;
        this.checkVerify(this.state.verifyset);
        if (form.checkValidity()) {
            this.setState({
                validated: 'hidden',
                disabled: true,
                content: <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> Processing...</>
            });
            const now = DateTime.local().setZone('America/Chicago');
            firebase.firestore().collection('responses').doc(now.toFormat('yyyy-MM-dd hh:mm:ss a')).set({
                to: atob('ZHNldW0yMkBnbWFpbC5jb20='),
                message: {
                    subject: `Message @ ${now.toFormat('ff')}`,
                    html: `<b>Name:</b> ${form.querySelector('input[name="name"]').value}<br><br><b>Email:</b> ${form.querySelector('input[name="email"]').value}<br><br><b>Message:</b><br>${form.querySelector('textarea[name="message"]').value}`
                },
                map: {
                    name: form.querySelector('input[name="name"]').value,
                    email: form.querySelector('input[name="email"]').value,
                    message: form.querySelector('textarea[name="message"]').value
                }
            }).then(() => {
                this.reloadVerify();
                this.setState({ disabled: false });
                form.reset();
            });
        } else {
            this.setState({
                validated: ''
            });
        }
    }
    render() {
        return (
            <>
                <Fade duration={500} bottom cascade>
                    <div className='pt-10 border-b-4 md:border-b-8 border-white'></div>
                </Fade>
                <div className='text-center'>
                    <Fade duration={500} bottom>
                        <h2 className='mt-8 text-4xl'>Contact Me</h2>
                    </Fade>
                    <form className='mt-8 w-11/12 md:w-4/12 mx-auto font-mono' id='form-contact' ref={this.form}>
                        <div className={`text-left my-2 pl-2 ${this.state.validated}`}>
                            <label className='text-red-500'>One of the fields is invalid.</label>
                        </div>
                        <Fade duration={250} bottom cascade>
                            <fieldset disabled={this.state.disabled}>
                                <input className='mb-3' name='name' placeholder='Name' type='text' required></input>
                                <input className='mb-3' name='email' placeholder='Email' type='email' required></input>
                                <textarea className='mb-3' name='message' placeholder='Message' rows='5' required></textarea>
                                <div className='text-left my-2 pl-2'>
                                    <label data-verify='label'>{`What is ${this.state.verifyset[0].toString()} times ${this.state.verifyset[1].toString()}?`}</label>
                                </div>
                                <input data-verify='input' className='mb-3' placeholder='Verification code' type='text' required></input>
                                <button type='button' className='btn w-full flex justify-center py-3' onClick={this.submitForm} disabled={this.state.disabled}>{this.state.content}
                                </button>
                            </fieldset>
                        </Fade>
                    </form>
                </div>
            </>
        )
    }
}