import React, { Component } from 'react';
import './GenresList.scss';
import Card from './Components/Card';
import data from './Components/data';

// class component
class GenresList extends Component {

    constructor(props){
        super(props);
        this.state = {
            genres: data.genres,
            genre: data.genres[0]
        }
    }

    nextProperty = () => {
        const newId = this.state.genre.id+1;
        this.setState({
            genre: data.genres[newId]
        })
    };

    prevProperty = () => {
        const newId = this.state.genre.id-1;
        this.setState({
            genre: data.genres[newId]
        })
    };

    render() {
        const {genres, genre} = this.state;
        return (
            <div className="genres">

                <button
                    onClick={() => this.nextProperty()}
                    disabled={genre.id === data.genres.length-1}
                >Next</button>
                <button
                    onClick={() => this.prevProperty()}
                    disabled={genre.id === 0}
                >Prev</button>

                <div className="genres__list">

                    <div className="col">
                        <div className={`cards-slider active-slide-${genre.id}`}>
                            <div className="cards-slider-wrapper" style={{
                                'transform': `translateX(-${genre.id*(100/genres.length)}%)`
                            }}>
                                {
                                    genres.map(genre => <Card key={genre.id} genre={genre} />)
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default GenresList;
