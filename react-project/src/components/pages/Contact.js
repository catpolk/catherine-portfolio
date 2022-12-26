import React, { useState } from 'react';

import { validateEmail,  } from '../../utils/helpers';
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
        <div className='container'>
          <h1>Contact</h1>
          <form target='blank' action='mailto:cpolknytx@gmail.com' method='post' enctype="text/plain" >
            <div className='form-group'>
              <div className='form-row'>
                <div className='col-6'>
                  <input name="name" type="text" class="form-control" placeholder='Name' onBlur={handleInputChange} required />
                </div>
                <br/>
                <div className='col-6'>
                  <input name="email" type="email" class="form-control" placeholder='Email Address' onBlur={handleInputChange} required />
                </div>
                <br/>
              </div>
            </div>
            <div className="form-group"> 
              <textarea className='input-text' placeholder="Your Message" class="form-control" name="message" rows="5" onBlur={handleInputChange} required> </textarea>
            </div>
            <button type="submit" class="btn btn-lg btn-dark btn-block" onBlur={handleInputChange}>Submit Form</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      );
}

export default Contact;