import React, {Component} from 'react';
import './NavBar.scss';
import './ExitFromApp/ExitFromApp.scss'
import logo_image from '../../assets/images/logo.svg';
import arrow_image from '../../assets/images/arrowHeader.svg';
import NavBarItem from './NavBarItem/NavBarItem';
//import ExitFromApp from './ExitFromApp/ExitFromApp';
import Nav, {navHorizontal} from 'react-navtree';
// import Device from "../../modules/Device";

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 'main',
            currentItems: [
                {index: 0, menuItem: "main", label: "Главная"},
                {index: 1, menuItem: "newcinema", label: "Новинки"},
                {index: 2, menuItem: "cinema", label: "Кинозал"},
                {index: 3, menuItem: "tv", label: "Телевидение"},
                {index: 4, menuItem: "amedia", label: "Амедиатека"},
                {index: 5, menuItem: "personal_area", label: "Кабинет"},
                {index: 6, menuItem: "exit", label: "Выход"},
            ]
        };
    }

    changeActive = (path) => {
        this.setState({
            /*...this.state,*/
            tab: path
        });
    };

    /*   itemLeft() {
           this.goToItem(this.state.currentItem + 1);
       }

       itemRight() {
           this.goToItem(this.state.currentItem - 1);
       }

       goToItem (n) {
           let items = document.querySelectorAll('.menu__item');
           items[this.currentItem].className = 'menu__item';
           this.setState({
               currentItem: (n + items.length) % items.length
           });
           items[this.currentItem].className = 'menu__item active';
       };*/

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
    //
    // nextProperty = () => {
    //     const newIndex = this.state.currentItems.index + 1;
    //     this.setState({
    //         ...this.state,
    //         currentItems: this.state.currentItems[newIndex]
    //     });
    //     console.log(this.state.currentItems)
    // };
    //
    // prevProperty = () => {
    //     const newIndex = this.state.currentItems.index - 1;
    //     this.setState({
    //         ...this.state,
    //         currentItems: this.state.currentItems[newIndex]
    //     });
    //     console.log(this.state.currentItems)
    // };
    slideLeft() {
            let last = this.state.currentItems.slice(-1);
            let rest = this.state.currentItems.slice(0, -1);
            let currentItems = [last[0], ...rest];
            this.setState({currentItems: currentItems});
    }

    slideRight() {
            let [first, ...rest] = this.state.currentItems;
            let currentItems = [...rest, first];
            this.setState({currentItems: currentItems});
    }

    RenderItems() {
        const {tab} = this.state;
        const currentItems = this.state.currentItems;
        return (

            <Nav className="header__menu--width"
                 func={key => {
                     this.resolveFunc(key);
                 }}
                >

                <NavBarItem menuItem="search" menuActive={this.changeActive} currentItem={tab}
                            changeMenuItem={this.props.changePath} selectedItem={this.props.selectedItem}>

                    <svg width="47" height="46" viewBox="0 0 47 46" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M45.4303 36.9349L36.3979 30.7407C36.3404 30.6832 36.2829 30.6448 36.2253 30.5873C38.2773 27.4806 39.4662 23.7411 39.4662 19.7331C39.4662 8.84059 30.6257 0 19.7331 0C8.84059 0 0 8.84059 0 19.7331C0 30.6256 8.84059 39.4662 19.7331 39.4662C23.7411 39.4662 27.4614 38.2773 30.5873 36.2253C30.6448 36.2829 30.6832 36.3404 30.7407 36.3979L37.491 44.7399C39.0635 46.3124 42.2277 44.7399 43.8002 43.1866C45.3536 41.6141 47.0028 38.4882 45.4303 36.9349ZM19.7331 32.6201C12.6185 32.6201 6.84619 26.8478 6.84619 19.7331C6.84619 12.6185 12.6185 6.84618 19.7331 6.84618C26.8478 6.84618 32.6201 12.6185 32.6201 19.7331C32.6201 26.8478 26.8478 32.6201 19.7331 32.6201Z"/>
                    </svg>
                </NavBarItem>

                {
                    currentItems.map((currentItem, index) => {
                        return (
                            <NavBarItem menuItem={currentItem.menuItem}
                                        menuActive={this.changeActive}
                                        currentItem={tab}
                                        changeMenuItem={this.props.changePath}
                                        selectedItem={this.props.selectedItem}
                                        key={index}>
                                {currentItem.label}
                            </NavBarItem>
                        )
                    })
                }
            </Nav>
        )
    }


    render() {
         // const {tab} = this.state;
        return (
            <Nav className='header'>
                <div className="header__logo"><img src={logo_image} alt="Sweet TV"/></div>
                <Nav className='header__menu'
                     func={navHorizontal}>

                    <span className="header__arrow header__arrow--left" onClick={() => this.slideLeft()}>
                        <img src={arrow_image} alt="arrow left"/>
                    </span>

                        {this.RenderItems()}
                    {/*  <div className="header__menu--width">

                        <HeaderItem menuItem="main" menuActive={this.changeActive} currentItem={tab}
                                    changeMenuItem={this.props.changePath}>

                            Главная

                        </HeaderItem>
                        <HeaderItem menuItem="newcinema" menuActive={this.changeActive} currentItem={tab}
                                    changeMenuItem={this.props.changePath}>

                            Новинки

                        </HeaderItem>
                        <HeaderItem menuItem="cinema" menuActive={this.changeActive} currentItem={tab}
                                    changeMenuItem={this.props.changePath}>

                            Кинозал

                        </HeaderItem>
                        <HeaderItem menuItem="tv" menuActive={this.changeActive} currentItem={tab}
                                    changeMenuItem={this.props.changePath}>

                            Телевидение

                        </HeaderItem>
                        <HeaderItem menuItem="exit" menuActive={this.changeActive} currentItem={tab}
                                    changeMenuItem={this.props.changePath}>

                            Выход

                        </HeaderItem>
                    </div>*/}

                    <span className="header__arrow header__arrow--right" onClick={() => this.slideRight()}>
                        <img src={arrow_image} alt="arrow right"/>
                    </span>

                </Nav>

            </Nav>
        )
    };
}

/*constructor(props) {
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

}*/

{/*<Nav*/
}
{/*className={classNames + (tab === 'search' ? ' active' : '')}*/
}
{/*navId = "search"*/
}
{/*func = {(key) => {*/
}
{/*if (key === 'enter'){*/
}
{/*this.setState({tab: "search"});*/
}
{/*this.props.changePath(tab)*/
}
{/*}*/
}

{/*}*/
}
{/*}>*/
}

{/*</Nav>*/
}
{/*<Nav*/
}
{/*className={classNames + (tab === 'main' ? ' active' : '')}*/
}
{/*navId = "main"*/
}
{/*defaultFocused={true}*/
}
{/*func = {(key) => {*/
}
{/*if (key === 'enter')*/
}
{/*this.setState({tab: "main"});*/
}
{/*}*/
}
{/*}>*/
}
{/*Главная*/
}
{/*</Nav>*/
}
{/*<Nav*/
}
{/*className={classNames + (tab === 'newcinema' ? ' active' : '')}*/
}
{/*navId = "newcinema"*/
}
{/*func = {(key) => {*/
}
{/*if (key === 'enter')*/
}
{/*this.setState({tab: "newcinema"});*/
}
{/*}*/
}
{/*}>*/
}
{/*Новинки*/
}
{/*</Nav>*/
}
{/*<Nav*/
}
{/*className={classNames + (tab === 'cinema' ? ' active' : '')}*/
}
{/*navId = "cinema"*/
}
{/*func = {(key) => {*/
}
{/*if (key === 'enter')*/
}
{/*this.setState({tab: "cinema"});*/
}
{/*}*/
}
{/*}>*/
}
{/*Кинозал*/
}
{/*</Nav>*/
}
{/*<Nav*/
}
{/*className={classNames + (tab === 'tv' ? ' active' : '')}*/
}
{/*navId = "tv"*/
}
{/*func = {(key) => {*/
}
{/*if (key === 'enter')*/
}
{/*this.setState({tab: "tv"});*/
}
{/*}*/
}
{/*}>*/
}
{/*Телевидение*/
}
{/*</Nav>*/
}
