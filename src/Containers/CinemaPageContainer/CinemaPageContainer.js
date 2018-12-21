import React, {PureComponent, Fragment} from 'react';
import MovieBlockComponent from "./MovieBlock/MovieBlockComponent";
import CinemaHall from "./CinemaHall/CinemaHall";
import {Route, withRouter} from 'react-router-dom';
import {GetGenreMovies, GetMovieInfo} from "../../store/actions/MoviesActions";
import connect from "react-redux/es/connect/connect";


class CinemaPageContainer extends PureComponent {

    componentWillMount() {
        const {itemID, authToken} = this.props;
        this.props.GetGenreMovies(itemID, authToken).then(() => {
            const {moviesID} = this.props;
            this.props.GetMovieInfo(moviesID, authToken);
        })
    };

    resolveFunc = (key, id) => {
        switch (key) {
            case 'left':
                this.props.slideLeft();
                break;
            case 'right':
                this.props.slideRight();
                break;
            case 'enter':
                this.openMovie(id);
                break;
        }
        // console.log(key)
    };

    openMovie(id) {
        this.props.history.push({pathname: '/' + id})
    }

    renderMovies() {
        const {movies, genres} = this.props;
        return (
            <div className="movies-items">
                <h3 className="collection__title">Лучшая подборка мультфильмов</h3>
                {movies != undefined ?
                    movies.map((movie, index) => {
                        return (
                            <MovieBlockComponent resolveFunc={this.resolveFunc}
                                                 movie={movie}
                                                 key={index}
                                                 genres={genres}

                            />
                        );
                    }) : ''}
                <h3 className="collection__title">Мультфильмы ноября 2018</h3>
                {movies != undefined ?
                    movies.map((movie, index) => {
                        return (
                            <MovieBlockComponent resolveFunc={this.resolveFunc}
                                                 movie={movie}
                                                 key={index}
                                                 genres={genres}

                            />
                        );
                    }) : ''}
            </div>
        )
    };

    render() {

        const {itemID, genres} = this.props;
        return (
            <Fragment>
                <div className="collection">
                    <CinemaHall/>
                    {this.renderMovies()}
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        moviesID: state.movieGenres.moviesID,
        movies: state.movieGenres.movies,
        authToken: state.signUp.authToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetGenreMovies: (id, authToken) => dispatch(GetGenreMovies(id, authToken)),
        GetMovieInfo: (moviesID, authToken) => dispatch(GetMovieInfo(moviesID, authToken)),
        slideLeft: () => dispatch({type: 'GO_LEFT'}),
        slideRight: () => dispatch({type: 'GO_RIGHT'})
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CinemaPageContainer));

//<Route path="/:id"
//render = {({match, history}) => {
// onst {id} = match.params;
//  return  <MovieContainer itemID={id}/>
//}}/>
