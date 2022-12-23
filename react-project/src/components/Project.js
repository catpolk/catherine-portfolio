import React from 'react';
import './styles/Project.css';

function Project(props) {
    return (
        <div className='col-lg-3 pad'>
            <div className='card'>
                <div className='card-body'>
                    <h1 className='card-title'><a href={`${props.href}`}>{props.title}</a></h1>
                    <p className='card-subtitle mb-2'><a href={`${props.deployed}`}>{props.stack} </a></p>
                </div>
            </div>
        </div>
    )
}

export default Project;