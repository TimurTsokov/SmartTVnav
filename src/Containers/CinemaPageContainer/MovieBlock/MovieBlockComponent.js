import React, {Component} from 'react';
import Nav from 'react-navtree';
import './MovieBlockComponent.scss';
import '../CinemaPageContainer.scss';

const MovieBlockComponent = ({movie, resolveFunc, genres}) => {
     const state = {
         array: [

         ]
     };

    const styles = {
        backgroundImage: `url(${movie.poster_url})`
    };
    return (
        <Nav
            defaultFocused={movie.id === 1}
            func={key => {
                resolveFunc(key, movie.id);
                console.log('key', key)
            }}
            className="page__movie" style={styles}>
            <div className="page__movie-info">
                <div className="page__movie-title">{movie.title}</div>
                <div className="page__movie-subtitle">{movie.year}
                    {genres !== undefined ?
                        genres.map((genre) => {
                            let movieGenres = "";
                            movie.genres.includes(genre.id) ? movieGenres = ', ' + genre.title : '';
                            return movieGenres;
                        })
                        : ''}
                </div>
                {
                    movie.rating_kinopoisk !== 0 || movie.rating_imdb !== 0 ?
                        <div className="page__movie-raiting">
                            <div className="page__movie-raiting--star"></div>
                            <div className="page__movie-raiting--value">
                                {
                                    movie.rating_kinopoisk !== 0 ? Math.round(movie.rating_kinopoisk * 10) / 10 : Math.round(Math.round(movie.rating_imdb * 10) / 10)
                                }
                            </div>
                        </div> : ""
                }

            </div>

        </Nav>
    );
}

export default MovieBlockComponent;
