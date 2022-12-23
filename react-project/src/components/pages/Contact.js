import React, { useState } from 'react';

import { validateEmail,  } from '../../utils/helpers'

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
                setErrorMessage('Message is require');    
            } else { 
                setErrorMessage('');
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(email);
    }

    return (
        <div>
          <form className="form">
            <input
            //   value={email}
              name="name"
              type="text" 
            />
            <input
            //   value={userName}
              name="email"
              onBlur={handleInputChange}
              type="email"
            />
            <textarea
            //   value={password}
              name="message"
              onBlur={handleInputChange}
              type="text"
            />
            <button type="button" onBlur={handleFormSubmit}>Submit</button>
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