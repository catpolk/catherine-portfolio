import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

//switch statement that switches between pages user visits and returns a component of the page 
function PagesContainer () {
    //renders a component 
    return (
        <Routes>
            <Route path="*" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    );
}

export default PagesContainer;