import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';
import '../styles/Contact.css';

function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
            if (!validateEmail(email)) {
                setErrorMessage('Email is invalid');    
            } else { 
                setErrorMessage('');
            }
        } else {
            setMessage(inputValue);
            if (message === '') {
                setErrorMessage('Message is required');    
            } else { 
                setErrorMessage('');
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(email);
    }

    return (
        <div className="row justify-content-md-center p-3">
          <div className='col-6'>
            <h1>Contact</h1>
            <form target='blank' action='mailto:cpolknytx@gmail.com' method='post' enctype="text/plain" >
              <div className='mb-3'>
                <input name="name" type="text" className="form-control" placeholder='Name' onBlur={handleInputChange} required />
              </div>
              <div className='mb-3'>
                <input name="email" type="email" className="form-control" placeholder='Email Address' onBlur={handleInputChange} required />
              </div>
              <div className="mb-3"> 
                <textarea placeholder="Your Message" className="form-control" name="message" rows="5" onBlur={handleInputChange} required> </textarea>
              </div>
              <button type="submit" className="btn btn-lg btn-dark btn-block" onBlur={handleInputChange}>Submit Form</button>
            </form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
          )}
          </div>
        </div>
      );
}

export default Contact;