import React from 'react';

//rendering resume page 
function Resume () {
    return (
        <div className="row justify-content-md-center p-3">
            <div className='col-8'>
                {/* an option to download a pdf file  */}
                <h3>Download my <a href='resume_cp.pdf' download> Resume </a></h3>
                <br />
                <div className='resume'>
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
            </div>
        </div>
    )
}

export default Resume;