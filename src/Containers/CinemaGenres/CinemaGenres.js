import React, {Component} from 'react';
import './CinemaGenres.scss';
// import BilletGenre from './Components/BilletGenre'
// import Card from "./Components/Card";
// import data from "./Components/data";
// import imgNun from "./image/NUN.jpg";
// import {Focusable, HorizontalList} from 'react-key-navigation';
import Slide from './Components/BilletGenre'
import Nav, {navHorizontal, navVertical} from "react-navtree";

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: [
                {label: "Ужасы", id: 1, marked: true, path: "https://i.ibb.co/X7142qG/NUN.jpg"},
                {label: "Мультфильмы", id: 2, marked: false, path: "https://i.ibb.co/KyfDyT1/monstr.jpg"},
                {label: "Фантастика", id: 3, marked: false, path: "https://i.ibb.co/JrC2m5d/aquaman.jpg"},
                {label: "Боевики", id: 4, marked: false, path: "https://i.ibb.co/jhRvmRy/denzel.jpg"},
                {label: "Документальные", id: 5, marked: false, path: "https://i.ibb.co/55RbJgm/passenger.jpg"},
                {label: "Исторические", id: 6, marked: false, path: "https://i.ibb.co/1Z3BkHx/vasilisa.jpg"},
                {label: "Ужасы", id: 7, marked: false, path: "https://i.ibb.co/X7142qG/NUN.jpg"},
                {label: "Мультфильмы", id: 8, marked: false, path: "https://i.ibb.co/KyfDyT1/monstr.jpg"},
                {label: "Фантастика", id: 9, marked: false, path: "https://i.ibb.co/JrC2m5d/aquaman.jpg"}
            ]
        }
    }

    resolveFunc = (key) => {
        switch (key) {
            case 'left':
               this.slideLeft();
                break;
            case 'right':
                this.slideRight();
                break;
        }

    };
    slideLeft() {
        let last = this.state.genres.slice(-1);
        let rest = this.state.genres.slice(0, -1);
        let genres = [last[0], ...rest];
        this.setState({genres: genres});
    }

    slideRight() {
        let [first, ...rest] = this.state.genres;
        let genres = [...rest, first];
        this.setState({genres: genres});
    }

    renderNavigation() {
        return (
            <div className="slider-arrows">
                <a className="arrow left"
                   onClick={() => this.slideLeft()}
                   disabled={this.state.genres.id === 1}>
                    <img src={require('./image/left.svg')}/>
                </a>
                <a className="arrow right"
                   onClick={() => this.slideRight()}
                   disabled={this.state.genres.id === this.state.genres.length - 1}>
                    <img src={require('./image/right.svg')}/>
                </a>
            </div>
        )
    }

    renderSlides() {
        const genres = this.state.genres;
        return (
            <div className="slider-items">
                {
                    genres.map((genre, index) => {
                        return (
                               <Slide resolveFunc={this.resolveFunc}
                                   genre={genre}
                                   key={index}/>
                             )
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <div className="slider">
                {this.renderNavigation()}
                {this.renderSlides()}
            </div>
        )
    }
}
