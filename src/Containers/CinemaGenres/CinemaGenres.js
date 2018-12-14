import React, {Component} from 'react';
import './CinemaGenres.scss';
import Slide from './Components/BilletGenre'

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

  /*  getValue = (val, values, dir) => {
        let pos = values.indexOf(val)

        let shiftPos = dir === 'next' ? 1 : -1

        let newPos

        if (pos === -1) {
            newPos = shiftPos > 0 ? 0 : values.length - 1
        } else {
            newPos = pos + shiftPos
        }

        if (newPos >= 0 && newPos < values.length) {
            return values[newPos]
        } else {
            return false
        }
    };*/

    // navHorizontal = (key, navTree) => {
    //
    //     let {focusedNode, nodesId} = navTree;
    //
    //     if (key === 'left' || key === 'right') {
    //         return this.getValue(focusedNode, nodesId, key === 'left' ? 'prev' : 'next')
    //     } else {
    //         return focusedNode !== null ? false : nodesId[0]
    //     }
    // };
    resolveFunc = (key) => {
        switch (key) {
            case 'left':
               this.slideLeft();
                break;
            case 'right':
                this.slideRight();
                break;
        }
         // console.log(key)
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
            <div className={"cinema-genres" + (this.props.visible ? ' visible' : '')}>
                {this.renderNavigation()}
                {this.renderSlides()}
            </div>
        )
    }
}
