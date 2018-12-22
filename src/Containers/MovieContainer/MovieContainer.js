import React, {Component} from 'react';
import '../CinemaPageContainer/CinemaHall/CinemaHall.scss'
import './MovieContainer.scss'
// import CinemaHall from "../CinemaPageContainer/CinemaHall/CinemaHall";
import InfoFilm from "../../Components/ImfoFilm/InfoFilm";
import Nav from "react-navtree";

export default class MovieContainer extends Component {

    render() {
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
                        События первой части принесли Суперсемейке грандиозную славу, из-за чего журналисты не оставляют в покое героев ни днем, ни ночью. Они следуют буквально по пятам за Миссис Исключительной – настоящей медийной звездой, в тени которой оказались в итоге и муж, и дети. Пока супруга блистает на светских мероприятиях...
                    </div>
                </div>
            </div>
        );
    }
}
