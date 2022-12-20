import React from 'react';
import Project from '../Project';

const applications = [
    { title: 'Social Network API', href: 'https://github.com/catpolk/Social-Network-API', stack: 'NoSQL', deployed: 'https://github.com/catpolk/world-connect-social-network' },
    { title: 'Employee Tracking App', href: 'https://github.com/catpolk/employee-tracking-application', stack: 'SQL' },
    { title: 'Note Taking App', href: 'https://github.com/catpolk/note-taking-application', stack: 'Express' },
    { title: 'My Team Profile Generator', href: 'https://github.com/catpolk/my-team-profile-generator', stack: 'OOP' },
    { title: 'README Generator', href: 'https://github.com/catpolk/README-generator', stack: 'Node.js' },
    { title: 'The Arrays', href: 'https://github.com/catpolk/project-2-The-Arrays', stack: 'MVC, Charts.js' },
]

function Portfolio () {
    const projectsList = applications.map((project) => { 
        return <Project 
            title={project.title} 
            stack={project.stack} 
            href={project.href}
            deployed={project.deployed}
        />
    })

    return (
        <>{projectsList}</>
    )
}

export default Portfolio;