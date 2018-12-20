import React from 'react';
import Nav, {navHorizontal} from 'react-navtree';
import { Link } from "react-router-dom";
import '../CinemaGenres.scss';
import './BilletGenre.scss';

const Slide = ({genre, width, height, resolveFunc}) => {

    const styles = {
        backgroundImage: `url(${genre.icon_url})`
    };

    return (
            <Nav
                defaultFocused={genre.id === 1}
                func={key => {
                    resolveFunc(key, genre.id);
                    console.log('key', key)
                }}
                className="slide" style={styles}>
                    <span className="text">{genre.title}</span>
            </Nav>
    )
};
export default Slide;
