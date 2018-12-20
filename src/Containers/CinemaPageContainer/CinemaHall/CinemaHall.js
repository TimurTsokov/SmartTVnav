import React, {Component} from 'react';
import './CinemaHall.scss'
import Nav, {navHorizontal} from 'react-navtree';

export default class CinemaHall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addsort: false,
            addfilter: false
        }
    };

    toggleClassSort = () => {
        this.setState({
            ...this.state,
            addsort: !this.state.addsort,
            addfilter: false
        });
    };
    toggleClassFilter = () => {
        this.setState({
            ...this.state,
            addfilter: !this.state.addfilter,
            addsort: false
        });
    };

    sortFunc() {
        return (
            <React.Fragment>
                <Nav className={"sort" + (this.state.addsort ? ' active' : '')}
                     func={(key) => {
                         if (key === 'enter') {
                             this.toggleClassSort();
                         }
                     }}
                     onClick={() => this.toggleClassSort()}
                     defaultFocused={true}

                >Сортировка
                </Nav>
                <ul className={"banner__items_list" + (this.state.addsort ? ' display' : '')}>
                    <Nav className="item">Назад</Nav>
                    <Nav className="item">По названию</Nav>
                    <Nav className="item">По году выпуска</Nav>
                    <Nav className="item">По рейтингу</Nav>
                    <Nav className="item">По умолчанию</Nav>
                </ul>
            </React.Fragment>
        )
    }

    filterFunc() {
        return (
            <React.Fragment>
                <Nav className={"filter" + (this.state.addfilter ? ' active' : '')}
                     func={(key) => {
                         if (key === 'enter') {
                             this.toggleClassFilter()
                         }
                     }}
                     onClick={() => this.toggleClassFilter()}
                >Фильтр</Nav>
                <ul className={"banner__items_list" + (this.state.addfilter ? ' display' : '')}>
                    <Nav className="item">Назад</Nav>
                    <Nav className="item">Год</Nav>
                    <Nav className="item">Страна</Nav>
                    <Nav className="item">По умолчанию</Nav>
                </ul>
            </React.Fragment>
        )
    }

    infoFilm() {
        return (
            <div className="banner__info">
                <h2 className="banner__info_title">Суперсемейка 2</h2>
                <blockquote className="banner__info_quote">
                    «It's been too long, dahlings»
                </blockquote>
                <div className="banner__info_text">
                    <span>18+</span>
                    <span>1 час 35 минут</span>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="banner">
                <div className="banner__items">
                    {this.sortFunc()}
                    {this.filterFunc()}
                </div>
                {this.infoFilm()}
            </div>
        );
    }
}

