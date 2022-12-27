import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

//switch statement that switches between pages user visits and returns a component of the page 
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

    //renders a component 
    return (
        <div className='container pt-4'>
            <Component />
        </div>
    );
}

export default PagesContainer;