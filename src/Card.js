import React from 'react';
import './Card.css'; 

const Card = ({ id, name, email }) => {
    return (
        <div className='dib br3 pa3 ma2 grow bw2 shadow-5 tc' id='cards'>
            <img alt='robo' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;