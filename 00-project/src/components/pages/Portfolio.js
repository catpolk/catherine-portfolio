import React from 'react';
import Project from '../Project';

const projects = [
    { title: 'React', stack: 'MERN' },
    { title: 'Express', stack: 'MERN' },
]

function Portfolio () {
    const projectsList = projects.map((project) => { 
        return <Project title={project.title} stack={project.stack} />
    })

    return (
        <>{projectsList}</>
    )
}

export default Portfolio;