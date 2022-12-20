import React from 'react';

function Project(props) {
    return (
        <div>
            <h1>Project {props.title}</h1>
            <p> Stack {props.stack}</p>
            <div> This is description of project {props.title}</div>
        </div>
    )
}

export default Project;