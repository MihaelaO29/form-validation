import { useState } from 'react';
import './form.css';
import user from '../image/user.png';
import padlock from '../image/padlock.png';
import mail from '../image/mail.png';

const Form = () => {
    const [errorMessage, setErrorMessage] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = event.target.user.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const checkpassword = event.target.checkpassword.value;

        const errors = {};
        if (userName === '') {
            errors.userName = 'Username is empty'

        }
        if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            errors.email = 'Email format is wrong'
        }

        if (email === '') {
            errors.email = 'Email is empty'
        }
        if (password === '') {
            errors.password = 'Password is empty'
        }
        if (checkpassword === '') {
            errors.checkpassword = 'Checkpassword is empty'
        }
        if (password !== checkpassword) {
            errors.checkpassword = 'Not the same password'
        }
        setErrorMessage(errors);
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit} className='form-content'>
                <div className='title'>Create Account</div>
                <div className='all_cases'>

                    <div className='form_field'>
                        <div className='form_field_container'>
                            <input
                                name='user'
                                className={'form_field_input' + (errorMessage.userName ? ' errorBorder' : '')}
                                type='text'
                                placeholder='Name'
                            />
                            <img className='form_field_img' src={user} alt='user' />
                        </div>
                    </div>

                    {errorMessage.userName ? (
                        <div className='error'>{errorMessage.userName}</div>
                    ) : ''}

                    <div className='form_field'>
                        <div className='form_field_container'>
                            <input
                                name='email'
                                className={'form_field_input' + (errorMessage.email ? ' errorBorder' : '')}
                                type='email'
                                placeholder='Email'
                            />
                            <img className='form_field_img' src={mail} alt='mail' />
                        </div>
                    </div>

                    {errorMessage.email ? (
                        <div className='error'>{errorMessage.email}</div>
                    ) : ''}
                    <div className='form_field'>
                        <div className='form_field_container'>
                            <input
                                name='password'
                                className={'form_field_input' + (errorMessage.password ? ' errorBorder' : '')}
                                type='password'
                                placeholder='Password'
                            />
                            <img className='form_field_img' src={padlock} alt='padlock' />
                        </div>
                    </div>

                    {errorMessage.password ? (
                        <div className='error'>{errorMessage.password}</div>
                    ) : ''}

                    <div className='form_field'>
                        <div className='form_field_container'>
                            <input
                                name='checkpassword'
                                className={'form_field_input' + (errorMessage.password ? ' errorBorder' : '')}
                                type='password'
                                placeholder='Retype Password'
                            />
                            <img className='form_field_img' src={padlock} alt='padlock' />
                        </div>
                    </div>

                    {errorMessage.checkpassword ? (
                        <div className='error'>{errorMessage.checkpassword}</div>
                    ) : ''}

                    <div className='submit'>
                        <button type='submit' className='submit-button'>Submit</button>
                    </div>
                </div>


            </form>

        </div>

    );
}
export default Form;