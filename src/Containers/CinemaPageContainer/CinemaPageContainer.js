import React, {PureComponent, Fragment} from 'react';
import MovieBlockComponent from "./MovieBlock/MovieBlockComponent";
import CinemaHall from "./CinemaHall/CinemaHall";
import {Route, withRouter} from 'react-router-dom';
import {GetGenreMovies, GetMovieInfo} from "../../store/actions/MoviesActions";
import connect from "react-redux/es/connect/connect";


class CinemaPageContainer extends PureComponent {
    state = {
        moveBottom: 0,
        moveTop: 0
    };

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
            case 'down':
                this.setState({
                    ...this.state,
                    moveBottom: this.state.moveBottom + 170
                });
                break;
            case 'up':
                this.setState({
                    ...this.state,
                    moveTop : this.state.moveTop - 170
                });
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
/*
resolveFunc = (key) => {
    switch (key) {
        case 'left':
            this.setState({
                ...this.state,
                listStyle: this.state.listStyle + 170
            });
            break;
        case 'right':
            this.setState({
                ...this.state,
                listStyle: this.state.listStyle - 170
            });
            break;
    }
    console.log(key)
};

render() {
    const genres = this.state.genres.map(genre => {
        return (
            <BilletGenre
                key={genre.id}
                resolveFunc={this.resolveFunc}
                id={genre.id}
                genre={genre}>
                <img className="genres__list_picture" src={genre.link} alt={genre.label}/>
                <p className="genres__list_text">{genre.label}</p>
            </BilletGenre>
        )
    });
    return (
        <div className="genres">
            <ul className="genres__list" style={{marginLeft: this.state.listStyle + 'px'}}>
                    <span className="prev"
                          onClick={() => this.prevProperty()}
                          disabled={this.state.genre.id === 0}
                    >Prev</span>
                <span className="next"
                      onClick={() => this.nextProperty()}
                      disabled={this.state.genre.id === data.genres.length - 1}
                >Next</span>
                {genres}
            </ul>
        </div>
    )

}
}

export default CinemaGenres;*/
