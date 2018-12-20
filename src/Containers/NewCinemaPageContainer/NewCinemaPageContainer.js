import React, {Component} from 'react';
import './NewCinemaPageContainer.scss'

class NewCinemaPageContainer extends Component {

    render() {
        return (
            <div className={"container new-cinema" + (this.props.visible ? ' visible' : '')}>
                <h1>NewCinemaPage</h1>
            </div>
        );
    }
}

export default NewCinemaPageContainer;
