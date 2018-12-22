import React, {Component} from 'react';
import Nav from 'react-navtree';
import './SeriesBlockComponent.scss';


const SeriesBlockComponent = ({series, resolveFunc}) => {

    const styles = {
        backgroundImage: `url(${series.poster})`
    };
    return (
        <Nav
/*
            defaultFocused={series.id === 1}
*/
            func={key => {
                resolveFunc(key, series.id);
                console.log('key', key)
            }}
            className="page__series" style={styles}>
            <div className="page__series-info">
                <div className="page__series-title">{series.title}</div>
            </div>
        </Nav>
    );
};

export default SeriesBlockComponent;
