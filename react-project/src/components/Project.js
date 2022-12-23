import React from 'react';

function Project(props) {
    return (
        <div>
            <h1><a href={`${props.href}`}>Project: {props.title} </a></h1>
            <p><a href={`${props.deployed}`}> Stack: {props.stack} </a></p>
            <div> This is description of project {props.title}</div>
        </div>
    )
}

export default Project;