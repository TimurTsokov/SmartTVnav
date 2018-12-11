import React, {Component} from 'react';
import  './HeaderContainer.scss';
import logo_image from '../../assets/images/logo.svg';
import arrow_image from '../../assets/images/arrowHeader.svg';
import Nav, {navHorizontal} from 'react-navtree';

export default class HeaderContainer extends Component  {

    constructor(props) {
        super(props)
        this.state = {tab: 'main'}
    };

    // changeState = e => {
    //     console.log('1',e);
    //     // const { navId } = e.target;
    //
    //     this.setState({
    //         tab: 'main'
    //     })
    // };


    render() {

        const {tab} = this.state;
        console.log('tab',tab);
        let classNames = "menu__item";
        return (
            <div className='header'>
                <Nav className="header__logo"><img src={logo_image} alt="Sweet TV"/></Nav>
                <Nav
                    className='header__menu' func={navHorizontal}
                >
                    <span className="header__arrow header__arrow--left"><img src={arrow_image} alt="arrow left"/></span>
                    <Nav
                        className={classNames + (tab === 'search' ? ' active' : '')}
                        navId = "search"
                        func = {(key) => {
                            if (key === 'enter')
                                this.setState({tab: "search"});
                            }
                        }
                        onKeyPress = {this.changeState}>
                        <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.4303 36.9349L36.3979 30.7407C36.3404 30.6832 36.2829 30.6448 36.2253 30.5873C38.2773 27.4806 39.4662 23.7411 39.4662 19.7331C39.4662 8.84059 30.6257 0 19.7331 0C8.84059 0 0 8.84059 0 19.7331C0 30.6256 8.84059 39.4662 19.7331 39.4662C23.7411 39.4662 27.4614 38.2773 30.5873 36.2253C30.6448 36.2829 30.6832 36.3404 30.7407 36.3979L37.491 44.7399C39.0635 46.3124 42.2277 44.7399 43.8002 43.1866C45.3536 41.6141 47.0028 38.4882 45.4303 36.9349ZM19.7331 32.6201C12.6185 32.6201 6.84619 26.8478 6.84619 19.7331C6.84619 12.6185 12.6185 6.84618 19.7331 6.84618C26.8478 6.84618 32.6201 12.6185 32.6201 19.7331C32.6201 26.8478 26.8478 32.6201 19.7331 32.6201Z" fill="white"/>
                        </svg>
                    </Nav>
                    <Nav
                        className={classNames + (tab === 'main' ? ' active' : '')}
                        navId = "main"
                        defaultFocused={true}
                        func = {(key) => {
                            if (key === 'enter')
                                this.setState({tab: "main"});
                            }
                        }>
                       Главная
                    </Nav>
                    <Nav
                        className={classNames + (tab === 'newcinema' ? ' active' : '')}
                        navId = "newcinema"
                        func = {(key) => {
                            if (key === 'enter')
                                this.setState({tab: "newcinema"});
                        }
                        }>
                        Новинки
                    </Nav>
                    <Nav
                        className={classNames + (tab === 'cinema' ? ' active' : '')}
                        navId = "cinema"
                        func = {(key) => {
                            if (key === 'enter')
                                this.setState({tab: "cinema"});
                        }
                        }>
                        Кинозал
                    </Nav>
                    <Nav
                        className={classNames + (tab === 'tv' ? ' active' : '')}
                        navId = "tv"
                        func = {(key) => {
                            if (key === 'enter')
                                this.setState({tab: "tv"});
                        }
                        }>
                        Телевидение
                    </Nav>
                    <span className="header__arrow header__arrow--right"><img src={arrow_image} alt="arrow right"/></span>
                </Nav>
            </div>
            )
    };
}

{/*<HeaderItem*/}

    {/*navId = "search"*/}
    {/*keyPress = {this.props.changePage}*/}
{/*>*/}
    {/*<svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*<path d="M45.4303 36.9349L36.3979 30.7407C36.3404 30.6832 36.2829 30.6448 36.2253 30.5873C38.2773 27.4806 39.4662 23.7411 39.4662 19.7331C39.4662 8.84059 30.6257 0 19.7331 0C8.84059 0 0 8.84059 0 19.7331C0 30.6256 8.84059 39.4662 19.7331 39.4662C23.7411 39.4662 27.4614 38.2773 30.5873 36.2253C30.6448 36.2829 30.6832 36.3404 30.7407 36.3979L37.491 44.7399C39.0635 46.3124 42.2277 44.7399 43.8002 43.1866C45.3536 41.6141 47.0028 38.4882 45.4303 36.9349ZM19.7331 32.6201C12.6185 32.6201 6.84619 26.8478 6.84619 19.7331C6.84619 12.6185 12.6185 6.84618 19.7331 6.84618C26.8478 6.84618 32.6201 12.6185 32.6201 19.7331C32.6201 26.8478 26.8478 32.6201 19.7331 32.6201Z" fill="white"/>*/}
    {/*</svg>*/}
{/*</HeaderItem>*/}
{/*<HeaderItem*/}
{/*defaultFocused = {true}*/}
{/*navId = "main"*/}
{/*keyPress = {this.props.changePage}*/}
{/*>*/}
{/*main*/}
{/*</HeaderItem>*/}
{/*<HeaderItem*/}
{/*navId = "newcinema"*/}
{/*keyPress = {this.props.changePage}*/}
{/*>*/}
{/*newcinema*/}
{/*</HeaderItem>*/}
{/*<HeaderItem*/}
{/*navId = "cinema"*/}
{/*keyPress = {this.props.changePage}*/}
{/*>*/}
{/*cinema*/}
{/*</HeaderItem>*/}
{/*<HeaderItem*/}
{/*navId = "tv"*/}
{/*keyPress = {this.props.changePage}*/}
{/*>*/}
{/*tv*/}
{/*</HeaderItem>*/}
