import React, {Component} from 'react';
import './CinemaGenres.scss';
import BilletGenre from './Components/BilletGenre'
// import imgNun from "./image/NUN.jpg";
import {Focusable, HorizontalList} from 'react-key-navigation';

// class CinemaGenres extends Component {
//     state = {
//         genres: [
//             {label: "Ужасы", id: 1, marked: true, link: "https://i.ibb.co/X7142qG/NUN.jpg"},
//             {label: "Мультфильмы", id: 2, marked: false, link:"https://i.ibb.co/KyfDyT1/monstr.jpg" },
//             {label: "Фантастика", id: 3, marked: false, link:"https://i.ibb.co/JrC2m5d/aquaman.jpg" },
//             {label: "Боевики", id: 4, marked: false, link:"https://i.ibb.co/jhRvmRy/denzel.jpg" },
//             {label: "Документальные", id: 5, marked: false, link:"https://i.ibb.co/55RbJgm/passenger.jpg" }
//         ]
//     };
//
//     render() {
//         const genres = this.state.genres.map(genre => {
//             return (
//                 <BilletGenre>
//                     <img className="genres__list_picture" src={genre.link} alt={genre.label}/>
//                     <p className="genres__list_text">{genre.label}</p>
//                 </BilletGenre>
//             )
//         });
//         return (
//             <div className="genres">
//                 <ul className="genres__list">
//                     {genres}
//                 </ul>
//             </div>
//         )
//
//     }
// }
//
// export default CinemaGenres;

export default class CinemaGenres extends Component {
    state = {
        genres: [
            {label: "Ужасы", id: 1, marked: true, link: "https://i.ibb.co/X7142qG/NUN.jpg"},
            {label: "Мультфильмы", id: 2, marked: false, link: "https://i.ibb.co/KyfDyT1/monstr.jpg"},
            {label: "Фантастика", id: 3, marked: false, link: "https://i.ibb.co/JrC2m5d/aquaman.jpg"},
            {label: "Боевики", id: 4, marked: false, link: "https://i.ibb.co/jhRvmRy/denzel.jpg"},
            {label: "Документальные", id: 5, marked: false, link: "https://i.ibb.co/55RbJgm/passenger.jpg"},
            {label: "Исторические", id: 6, marked: false, link: "https://i.ibb.co/1Z3BkHx/vasilisa.jpg"}
        ]
    };

    constructor() {
        super();
        this._lastFocus = null;
    }

    // componentDidMount() {
    //     const width = (Math.floor(this.content.scrollWidth / this.content.clientWidth) * this.content.clientWidth) + this.content.clientWidth + 20;
    //     if (this.content.getElementsByClassName('genres__list')[0]) {
    //         this.content.getElementsByClassName('genres__list')[0].style.width = width + 'px';
    //     }
    // }

    onFocus(index) {
        if (this._lastFocus === index) {
            return;
        }

        if (this.props.onFocus) {
            this.props.onFocus();
        }

        if (this.content) {
            const items = this.content.getElementsByClassName('genres__list_item');
            const offsetWidth = items[0].offsetWidth + 20;
            this.content.scrollLeft = offsetWidth * index;
        }

        this._lastFocus = index;
    }

    render() {
        const genres = this.state.genres.map((genre, i) => {
            return (
                <BilletGenre onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true}>
                    <img className="genres__list_picture" src={genre.link} alt={genre.label}/>
                    <p className="genres__list_text">{genre.label}</p>
                </BilletGenre>
            )
        });
        return (
            <div className="genres">
            <HorizontalList className="genres__list"
                            onFocus={(index) => this.onFocus(index)}
                            onBlur={() => {
                                this._lastFocus = null
                            }}>
                {genres}
            </HorizontalList>
            </div>
        );
    }
}
