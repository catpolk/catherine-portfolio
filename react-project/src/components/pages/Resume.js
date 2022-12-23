import React from 'react';

function Resume () {
    return (
        <>
        <div>
            <h3>Download my <a href='resume_cp.pdf' download> Resume </a></h3>
        </div>
        <div>
            <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
        </div>
        <div>
            <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>API's</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequilize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
        </div>
        </>
      
        
    )
}

export default Resume;