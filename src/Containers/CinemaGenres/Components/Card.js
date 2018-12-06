import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-navtree';
// import './BilletGenre.scss'

const Card = ({genre}) => {
    const {name, link, id} = genre;
    return (
        <Nav defaultFocused={true} id={`card-${id}`} className="card">
            <img src={link} alt={name}/>
            <p className="text">{name}</p>
        </Nav>
    )
};

// Card.propTypes = {
//     property: PropTypes.object.isRequired
// };

export default Card;