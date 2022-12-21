import React from 'react';
import Project from '../Project';

const applications = [
    { title: 'Social Network API', href: 'https://github.com/catpolk/Social-Network-API', stack: 'NoSQL', deployed: 'https://drive.google.com/file/d/1gddjAs22LzDAaH7jFJTLWF588mAjN5iv/view?usp=share_link-connect-social-network' },
    { title: 'Employee Tracking App', href: 'https://github.com/catpolk/employee-tracking-application', stack: 'SQL', deployed: 'https://drive.google.com/file/d/1OP9Vs2sW2AgBxfXC5VeITRmGJ1twCynf/view?usp=share_link'},
    { title: 'Note Taking App', href: 'https://github.com/catpolk/note-taking-application', stack: 'Express', deployed: 'https://catpolk.github.io/note-taking-application/' },
    { title: 'My Team Profile Generator', href: 'https://github.com/catpolk/my-team-profile-generator', stack: 'OOP', deployed: 'https://catpolk.github.io/my-team-profile-generator/myTeam.html' },
    { title: 'README Generator', href: 'https://github.com/catpolk/README-generator', stack: 'Node.js', deployed: 'https://drive.google.com/file/d/1l7t-vNUWHCf1W0zRWAEy6D67ZvdlNqn3/view?usp=share_link' },
    { title: 'The Arrays', href: 'https://github.com/catpolk/project-2-The-Arrays', stack: 'MVC, Charts.js', deployed: 'https://evening-hollows-21055.herokuapp.com/' },
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