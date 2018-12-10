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

const Slider = ({image, width, height}, props) => {
    const backgroundImage = require(`./img/${image}`);
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        float: 'left',
        width: `${width}px`,
        height: `${height}px`
    };
    return (
        <Nav efaultFocused={props.id === 1}
            className="slide" style={styles}>
        </Nav>
    )
};
Slider.defaultProps = {
    width: 300,
    height: 600
};
Slider.propTypes = {
    image: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};
export default Slider;