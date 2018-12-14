import React, {Component} from 'react';
import './TVPageContainer.scss'

class TvPageContainer extends Component {

    render() {
        return (
            <div className={"container tv" + (this.props.visible ? ' visible' : '')}>
                <h1>TvPageContainer</h1>
            </div>
        );
    }
}

export default TvPageContainer;
