import React from 'react';
import './styles/Project.css';

//props that will be used in the Porfolio page 
function Project(props) {
    return (
        <div className='col-lg-4'>
            <div className='card' style={{ backgroundImage: `url("images/${props.img}.png")` }}>
                <div className='card-body' >
                    <h1 className='card-title'><a href={`${props.href}`} target="_blank">{props.title}</a></h1>
                    <p className='card-subtitle mb-2'>{props.stack}</p>
                    <p className='card-subtitle mb-2'><a href={`${props.deployed}`} target="_blank"> View </a></p>
                </div>
            </div>
        </div>
    )
}

export default Project;