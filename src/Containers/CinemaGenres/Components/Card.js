import React from 'react';
import PropTypes from 'prop-types';
// import './BilletGenre.scss'

const Card = ({genre}) => {
    const {name, link, id} = genre;
    return (
        <div id={`card-${id}`} className="card">
            <img src={link} alt={name}/>
            <p className="text">{name}</p>
        </div>
    )
};

Card.propTypes = {
    property: PropTypes.object.isRequired
};

export default Card;