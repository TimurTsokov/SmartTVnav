import React from 'react';
import Nav, {navHorizontal} from 'react-navtree';
import '../CinemaGenres.scss'

const Slide = ({genre, width, height, resolveFunc}) => {

    const styles = {
        backgroundImage: `url(${genre.path})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
    };
    return (

            <Nav
                defaultFocused={genre.id === 1}
                func={key => {
                    resolveFunc(key);
                    console.log('key', key)
                }}
                className="slide" style={styles}>
                <span className="text">{genre.label}</span>
            </Nav>

    )
};
/*Slide.defaultProps = {
    width: 300,
    height: 600
};*/
// Slider.propTypes = {
//     genre: PropTypes.string.isRequired,
//     width: PropTypes.number.isRequired,
//     height: PropTypes.number.isRequired
// };
export default Slide;
