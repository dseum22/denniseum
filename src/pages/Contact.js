import React from 'react';
import { Send } from 'react-feather';
import 'firebase/firestore';

const Contact = () => {
    const sendMessage = (event) => {
        event.preventDefault();
        const form = document.getElementsByTagName('form');
        checkVerify(verifyset);
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            $('form[name="responseForm"] fieldset').prop('disabled', true);
            $('button[type="submit"]').html('<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> Processing...');
            db.collection('responses').doc((new Date()).toLocaleString('en-US', { timeZone: 'America/Chicago' })).set({ name: $('input[name="firstname"]').val() + $('input[name="lastname"]').val(), email: $('input[name="email"]').val(), message: $('textarea[name="message"]').val() }).then(function () {
                $('button[type="submit"]').html(temp);
                verifyset = reloadVerify();
                $('form[name="responseForm"] fieldset').prop('disabled', false);
                form.reset();
                form.classList.remove('was-validated');
            })
        }
        form.classList.add('was-validated');
    }
    return (
        <div className='text-center'>
            <h1 className='text-xl'>Contact me</h1>
            <form className='mt-8 w-11/12 md:w-4/12 mx-auto' onSubmit={sendMessage}>
                <input className='mb-3' name='name' placeholder='Name' type='text' required></input>
                <input className='mb-3' name='email' placeholder='Email' type='email' required></input>
                <textarea className='mb-3' name='message' placeholder='Message' rows='5' required></textarea>
                <button className='btn w-full flex justify-center py-3' type='submit'>Send <Send className='ml-3' /></button>
            </form>
        </div>
    )
}

export default Contact
