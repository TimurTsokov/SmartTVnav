import React, {Component} from 'react';
import './CinemaGenres.scss';
import BilletGenre from './Components/BilletGenre'
import imgNun from "./image/NUN.jpg";

class CinemaGenres extends Component {
    state = {
        genres: [
            {label: "Ужасы", id: 1, marked: true, image: {imgNun}},
            {label: "Мультфильмы", id: 2, marked: false, image: {imgNun}},
            {label: "Фантастика", id: 3, marked: false, image: {imgNun}},
            {label: "Боевики", id: 4, marked: false, image: {imgNun}},
            {label: "Документальные", id: 5, marked: false, image: {imgNun}},
            {label: "Исторические", id: 6, marked: false, image: {imgNun}},
        ]
    };

    render() {
        const genres = this.state.genres.map(genre => {
            return (
                <BilletGenre inputText={this.inputText}>
                    <img className="genres__list_picture" src={genre.image} alt={this.state.label}/>
                    <p className="genres__list_text">{this.state.label}</p>
                </BilletGenre>
            )
        });
        return (
            <div className="genres">
                <ul className="genres__list">
                    {genres}
                </ul>
            </div>
        )

    }
}

export default CinemaGenres;

