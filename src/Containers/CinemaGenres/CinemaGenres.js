import React, {PureComponent, Fragment} from 'react';
import './CinemaGenres.scss';
import { Route,  withRouter } from 'react-router-dom';
import Slide from './Components/BilletGenre';
import Nav, {navHorizontal, navVertical} from "react-navtree";
import CinemaPageContainer from "../CinemaPageContainer/CinemaPageContainer";
import {GetConfuguration} from '../../store/actions/MoviesActions';
import connect from "react-redux/es/connect/connect";



class Slider extends PureComponent {

    componentWillMount() {
        const { authToken } = this.props;
        console.log('authToken ', authToken);
        this.props.GetConfuguration(authToken);

    };

    resolveFunc = (key, id) => {
        switch (key) {
            case 'left':
                this.props.slideLeft();
                break;
            case 'right':
                this.props.slideRight();
                break;
            case 'enter':
                this.openGenre(id);
                break;
        }
         // console.log(key)
    };
    openGenre(id){
        this.props.history.push({pathname: '/' + id})
    }

    renderNavigation() {
        return (
            <div className="slider-arrows">
                <a className="arrow left"
                   onClick={() => this.slideLeft()}
                   >
                    <img src={require('./image/left.svg')}/>
                </a>
                <a className="arrow right"
                   onClick={() => this.slideRight()}
                   >
                    <img src={require('./image/right.svg')}/>
                </a>
            </div>
        )
    }
    // disabled={this.props.genres.id === 1}
    // disabled={this.props.genres.id === this.props.genres.length - 1}

    renderSlides() {
        const genres = this.props.genres;
        return (
            <div className="slider-items">
                {genres != undefined ?
                    genres.map((genre, index) => {
                        return (
                            <Slide resolveFunc={this.resolveFunc}
                                   genre={genre}
                                   key={index}

                            />
                        );
                    }) : ''}
            </div>)
    };

    render() {
        let path = this.props.location.pathname;
        const genres = this.props.genres;
        return (
            <Fragment>
                { path.length < 2 ?
                    <div className="slider">
                        {this.renderNavigation()}
                        {this.renderSlides()}
                    </div> : ''
                }

                <Route path="/:id"
                       render = {({match, history}) => {
                           const {id} = match.params;
                           return <CinemaPageContainer itemID={id} genres={genres}/>
                           }}/>
            </Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        genres: state.movieGenres.genres,
        authToken: state.signUp.authToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetConfuguration:  (authToken) =>  dispatch(GetConfuguration(authToken)),
        slideLeft: () => dispatch({type: 'GO_LEFT'}),
        slideRight: () => dispatch({type: 'GO_RIGHT'})
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slider));
