import React, {Component} from 'react';
import './CinemaGenres.scss';
// import BilletGenre from './Components/BilletGenre'
// import Card from "./Components/Card";
// import data from "./Components/data";
// import imgNun from "./image/NUN.jpg";
// import {Focusable, HorizontalList} from 'react-key-navigation';
import Slide from './Components/BilletGenre'

/*
const data = {
    genres: [
        {label: "Ужасы", id: 1, marked: true, link: "https://i.ibb.co/X7142qG/NUN.jpg"},
        {label: "Мультфильмы", id: 2, marked: false, link: "https://i.ibb.co/KyfDyT1/monstr.jpg"},
        {label: "Фантастика", id: 3, marked: false, link: "https://i.ibb.co/JrC2m5d/aquaman.jpg"},
        {label: "Боевики", id: 4, marked: false, link: "https://i.ibb.co/jhRvmRy/denzel.jpg"},
        {label: "Документальные", id: 5, marked: false, link: "https://i.ibb.co/55RbJgm/passenger.jpg"},
        {label: "Исторические", id: 6, marked: false, link: "https://i.ibb.co/1Z3BkHx/vasilisa.jpg"},
        {label: "Ужасы", id: 7, marked: false, link: "https://i.ibb.co/X7142qG/NUN.jpg"},
        {label: "Мультфильмы", id: 8, marked: false, link: "https://i.ibb.co/KyfDyT1/monstr.jpg"},
        {label: "Фантастика", id: 9, marked: false, link: "https://i.ibb.co/JrC2m5d/aquaman.jpg"}
    ]
};

class CinemaGenres extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genres: data.genres,
            genre: data.genres[0],
            listStyle: 0
        }
    }

    nextProperty = () => {
        const newId = this.state.genre.id + 1;
        this.setState({
            genre: data.genres[newId]
        });
        console.log(newId)
    };

    prevProperty = () => {
        const newId = this.state.genre.id - 1;
        this.setState({
            genre: data.genres[newId]
        });
        console.log(newId)
    };

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

export default CinemaGenres;
*/

/*////////////////////////////////////////////////////////////////////////////*/
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 300,
            height: 670,
          /*  images: ['nature-1.jpg', 'nature-2.jpg', 'nature-3.jpg', 'nature-4.jpg', 'nature-5.jpg', 'nature-6.jpg'],*/
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
    slideLeft () {
        let last = this.state.genres.slice (-1);
        let rest = this.state.genres.slice (0, -1);
        let genres = [last, ... rest];
        this.setState ({genres: genres});
    }
    slideRight () {
        let [first, ... rest] = this.state.genres;
        let genres = [... rest, first];
        this.setState ({genres: genres});
    }
    renderNavigation() {
        return (
            <div className="slider-arrows">
                <a className="arrow left"
                   onClick={() => this.slideLeft()}
                   disabled={this.state.genres.id === 1}>
                    <img src={require('./image/left.svg')} />
                </a>
                <a className="arrow right"
                   onClick={() => this.slideRight()}
                   disabled={this.state.genres.id === this.state.genres.length - 1}>
                    <img src={require('./image/right.svg')} />
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
                            <Slide genre={genre} width={this.state.width} height={this.state.height} key={index} />
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

/*//////////////////////////////////////////////////////////////////////////////////////*/

// export default class CinemaGenres extends Component {
//     state = {
//         genres: [
//             {label: "Ужасы", id: 1, marked: true, link: "https://i.ibb.co/X7142qG/NUN.jpg"},
//             {label: "Мультфильмы", id: 2, marked: false, link: "https://i.ibb.co/KyfDyT1/monstr.jpg"},
//             {label: "Фантастика", id: 3, marked: false, link: "https://i.ibb.co/JrC2m5d/aquaman.jpg"},
//             {label: "Боевики", id: 4, marked: false, link: "https://i.ibb.co/jhRvmRy/denzel.jpg"},
//             {label: "Документальные", id: 5, marked: false, link: "https://i.ibb.co/55RbJgm/passenger.jpg"},
//             {label: "Исторические", id: 6, marked: false, link: "https://i.ibb.co/1Z3BkHx/vasilisa.jpg"}
//         ]
//     };
//
//     constructor() {
//         super();
//         this._lastFocus = null;
//     }
//
//     // componentDidMount() {
//     //     const width = (Math.floor(this.content.scrollWidth / this.content.clientWidth) * this.content.clientWidth) + this.content.clientWidth + 20;
//     //     if (this.content.getElementsByClassName('genres__list')[0]) {
//     //         this.content.getElementsByClassName('genres__list')[0].style.width = width + 'px';
//     //     }
//     // }
//
//     onFocus(index) {
//         if (this._lastFocus === index) {
//             return;
//         }
//
//         if (this.props.onFocus) {
//             this.props.onFocus();
//         }
//
//         if (this.content) {
//             const items = this.content.getElementsByClassName('genres__list_item');
//             const offsetWidth = items[0].offsetWidth + 20;
//             this.content.scrollLeft = offsetWidth * index;
//         }
//
//         this._lastFocus = index;
//     }
//
//     render() {
//         const genres = this.state.genres.map((genre, i) => {
//             return (
//                 <BilletGenre onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true}>
//                     <img className="genres__list_picture" src={genre.link} alt={genre.label}/>
//                     <p className="genres__list_text">{genre.label}</p>
//                 </BilletGenre>
//             )
//         });
//         return (
//             <div className="genres">
//             <HorizontalList className="genres__list"
//                             onFocus={(index) => this.onFocus(index)}
//                             onBlur={() => {
//                                 this._lastFocus = null
//                             }}>
//                 {genres}
//             </HorizontalList>
//             </div>
//         );
//     }
// }
