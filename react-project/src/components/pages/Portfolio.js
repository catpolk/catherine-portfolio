import React from 'react';
import Project from '../Project';
import '../styles/Project.css';



const applications = [
    [
        { title: 'Social Network API', href: 'https://github.com/catpolk/Social-Network-API', stack: 'NoSQL', deployed: 'https://drive.google.com/file/d/1gddjAs22LzDAaH7jFJTLWF588mAjN5iv/view?usp=share_link-connect-social-network', img: 'social'  },
        { title: 'Employee Tracking App', href: 'https://github.com/catpolk/employee-tracking-application', stack: 'SQL', deployed: 'https://drive.google.com/file/d/1OP9Vs2sW2AgBxfXC5VeITRmGJ1twCynf/view?usp=share_link', img: 'employee' }
    ],
    [
        { title: 'Note Taking App', href: 'https://github.com/catpolk/note-taking-application', stack: 'Express', deployed: 'https://catpolk.github.io/note-taking-application/', img: 'note' },
        { title: 'My Team Profile Generator', href: 'https://github.com/catpolk/my-team-profile-generator', stack: 'OOP', deployed: 'https://catpolk.github.io/my-team-profile-generator/myTeam.html', img: 'team' },
    ],
    [
        { title: 'README Generator', href: 'https://github.com/catpolk/README-generator', stack: 'Node.js', deployed: 'https://drive.google.com/file/d/1l7t-vNUWHCf1W0zRWAEy6D67ZvdlNqn3/view?usp=share_link', img: 'readme' },
        { title: 'The Arrays', href: 'https://github.com/catpolk/project-2-The-Arrays', stack: 'MVC, Charts.js', deployed: 'https://evening-hollows-21055.herokuapp.com/', img: 'chart'  },
    ]
    
    
]

function Portfolio () {
    const projects = applications.map((projectsRow) => { 
        const projectsList = projectsRow.map((project) => {
            return(
                <Project 
                    title={project.title} 
                    stack={project.stack} 
                    href={project.href}
                    deployed={project.deployed}
                    img={project.img}
                />
            )
        });

        return (<div className="row justify-content-md-center">{projectsList}</div>);
    })

    return (
        <div className='container'>{projects}</div>
    )
}

export default Portfolio;