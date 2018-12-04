import React, {Component} from 'react';
import './CinemaGenres.scss';
import BilletGenre from './Components/BilletGenre'
import imgNun from "./image/NUN.jpg";

class CinemaGenres extends Component {
    state = {
        genres: [
            {label: "Ужасы", id: 1, marked: true, link: "https://i.ibb.co/X7142qG/NUN.jpg"},
            {label: "Мультфильмы", id: 2, marked: false, link:"https://i.ibb.co/KyfDyT1/monstr.jpg" },
            {label: "Фантастика", id: 3, marked: false, link:"https://i.ibb.co/JrC2m5d/aquaman.jpg" },
            {label: "Боевики", id: 4, marked: false, link:"https://i.ibb.co/jhRvmRy/denzel.jpg" },
            {label: "Документальные", id: 5, marked: false, link:"https://i.ibb.co/55RbJgm/passenger.jpg" }
        ]
    };

    render() {
        const genres = this.state.genres.map(genre => {
            return (
                <BilletGenre>
                    <img className="genres__list_picture" src={genre.link} alt={genre.label}/>
                    <p className="genres__list_text">{genre.label}</p>
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

