import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function PagesContainer () {
    let Component 
    switch (window.location.pathname) {
        case "/":
            Component = About
            break
        case "/portfolio":
            Component = Portfolio
            break
        case "/contact":
            Component = Contact
            break
        case "/resume":
            Component = Resume
            break
        default:
            Component = About
            break;
    }

    return (
        <div className='container pt-4'>
            <Component />
        </div>
    );
}

export default PagesContainer;