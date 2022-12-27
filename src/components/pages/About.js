import React from 'react';
import '../styles/About.css';

//rendering About page 
function About () {
    return (
        <div className="row justify-content-md-center p-3">
            <div className='col-8'>
                <div> 
                    <h2 className='intro'>About me</h2>
                    <img  src="images/avatar.png" alt="avatar"  className='avatar'/>
                </div>
                <section>
                    <p className='bio'>
                        Hello, my name is Catherine. I was born in Kazakhstan. 
                        I lived in New York City for 10 years, and currently I live in Austin, Texas. 
                        I graduated from Columbia University in the city of New York in 2021 with a degree 
                        in Sustainable development, but later I realized that my true passion is in the technology. 
                        As of now I am studying  full stack web development 
                        in the UT coding bootcamp. 
                    </p>
                    <p className='bio'>
                        In the bootcamp I learned major frameworks, libraries, and technologies that are required for an uprising 
                        full stack web developer. Technologies I learned include: 	
                    </p>
                    <ul className='bio'>
                        <li><strong>Programming Languages: </strong> Java Script, HTML, CSS, SQL, R, Python, GIS.</li>
                        <li><strong>Databases: </strong>SQL, MySQL, NoSQL, MongoDB, IndexedDB.</li>
                        <li><strong>Library/Frameworks: </strong>Bootstrap, jQuery, React.js, Node.js, Express.js, Sequelize, mongoose, moment.js. Tools/Technologies: Handlebars, PWA, MVC, Git.</li>
                    </ul>
                </section>
            </div>
        </div>
    )
        
}

export default About;