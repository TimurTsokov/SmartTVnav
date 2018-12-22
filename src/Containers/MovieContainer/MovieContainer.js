import React, {Component, Fragment, PureComponent} from 'react';
import '../CinemaPageContainer/CinemaHall/CinemaHall.scss'
import './MovieContainer.scss'
// import CinemaHall from "../CinemaPageContainer/CinemaHall/CinemaHall";
import {Route, withRouter} from 'react-router-dom';
import InfoFilm from "../../Components/ImfoFilm/InfoFilm";
import {GetGenreMovies, GetMovieInfo} from "../../store/actions/MoviesActions";
import SeriesBlockComponent from "./SeriesBlock/SeriesBlockComponent";
import Nav from "react-navtree";

import connect from "react-redux/es/connect/connect";

export default class MovieContainer extends PureComponent {

    constructor() {
        super();
        this.state = {
            series: [
                {id: 1, title: "1 сезон 26 серия", poster: "https://www.patee.ru/r/x4/59/67/390x.jpg"},
                {id: 2, title: "1 сезон 27 серия", poster: "https://www.patee.ru/r/x4/59/67/390x.jpg"},
                {id: 3, title: "1 сезон 28 серия", poster: "https://www.patee.ru/r/x4/59/67/390x.jpg"},
                {id: 4, title: "1 сезон 29 серия", poster: "https://www.patee.ru/r/x4/59/67/390x.jpg"},
                {id: 5, title: "1 сезон 30 серия", poster: "https://www.patee.ru/r/x4/59/67/390x.jpg"},
                {id: 6, title: "1 сезон 31 серия", poster: "https://www.patee.ru/r/x4/59/67/390x.jpg"},
                {id: 7, title: "1 сезон 32 серия", poster: "https://www.patee.ru/r/x4/59/67/390x.jpg"}
            ]
        }
    }

    slideLeft() {
        const last = this.state.series.slice(-1);
        const rest = this.state.series.slice(0, -1);
        const series = [last[0], ...rest];
        return {
            ...this.state,
            series: series,
        }
    }

    slideRight() {
        const [first, ...rest] = this.state.series;
        const series = [...rest, first];
        return {
            ...this.state,
            series: series,
        };
    }


    resolveFunc = (key) => {
        switch (key) {
            case 'left':
                this.slideLeft();
                break;
            case 'right':
                this.slideRight();
                break;
            case 'enter':
                /* this.openMovie(id);*/
                break;
        }
        // console.log(key)
    };

    /* componentWillMount() {
         const {itemID, authToken} = this.props;
         this.props.GetGenreMovies(itemID, authToken).then(() => {
             const {moviesID} = this.props;
             this.props.GetMovieInfo(moviesID, authToken);
         })
     };*/

    renderSeries() {
        const series = this.state.series;
        return (
            <div className="series">
                <div className="series__items">
                    <h2 className="series__title">Серии</h2>
                    {series != undefined ?
                        series.map((series, index) => {
                            return (
                                <SeriesBlockComponent resolveFunc={this.resolveFunc}
                                                      series={series}
                                                      key={index}
                                />
                            );
                        }) : ''}
                </div>
            </div>
        )
    };

    renderBanner() {
        return (
            <div className="banner">
                <InfoFilm/>
                <div className="banner__play">
                    <Nav className="btn-view">Смотреть</Nav>
                    <div className="btn-favorite">
                        <img src={require("./image/icon-heart.svg")} alt="favorite"/>
                    </div>
                </div>
                <div className="banner__description">
                    <ul className="banner__description_list">
                        <li>Страна:</li>
                        <li>Аудиодорожка:</li>
                        <li>Субтитры:</li>
                    </ul>
                    <ul className="banner__description_list info">
                        <li>Сша</li>
                        <li>русский/украинский</li>
                        <li>английский/русский/украинский</li>
                    </ul>
                    <div className="banner__description_about">
                        События первой части принесли Суперсемейке грандиозную славу, из-за чего журналисты не оставляют
                        в покое героев ни днем, ни ночью. Они следуют буквально по пятам за Миссис Исключительной –
                        настоящей медийной звездой, в тени которой оказались в итоге и муж, и дети. Пока супруга
                        блистает на светских мероприятиях...
                    </div>
                </div>
            </div>

        );
    }

    render() {
        return (
            <React.Fragment>
                {this.renderBanner()}
                {this.renderSeries()}
            </React.Fragment>
        )
    }
}

/*const mapStateToProps = state => {
    return {
        moviesID: state.movieGenres.moviesID,
        movies: state.movieGenres.movies,
        authToken: state.signUp.authToken
    };
};*/

/*
const mapDispatchToProps = dispatch => {
    return {
        slideLeft: () => dispatch({type: 'GO_LEFT'}),
        slideRight: () => dispatch({type: 'GO_RIGHT'})
    };
};

export default withRouter(connect(mapDispatchToProps)(MovieContainer));
*/
