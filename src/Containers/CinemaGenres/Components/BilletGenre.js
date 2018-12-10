import React from 'react';
import './BilletGenre.scss';
// import { Focusable } from 'react-key-navigation';
import Nav from 'react-navtree';
import PropTypes from 'prop-types';

// const BilletGenre = (props) => {
//
//         return (
//             <Nav defaultFocused={props.id === 1}
//                  func={(key) => props.resolveFunc(key)}
//                  className="genres__list_item nav">
//                 {props.children}
//             </Nav>
//         );
//
// };
//
// export default BilletGenre;

const Slider = ({genre, width, height}) => {
    // const backgroundImage = require(`${genre.link}`);
    const styles = {
        backgroundImage: `url(${genre.path})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        float: 'left',
        width: `${width}px`,
        height: `${height}px`
    };
    return (
        <Nav defaultFocused={genre.id === 1}
             className="slide" style={styles}>
            <span className="text">{genre.label}</span>
        </Nav>
    )
};
Slider.defaultProps = {
    width: 300,
    height: 600
};
Slider.propTypes = {
    genre: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};
export default Slider;