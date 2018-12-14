import React, {Component} from 'react';
import './MainPageContainer.scss';

class MainPageContainer extends Component {

    render() {
        return (
            <div className={"container main-page" + (this.props.visible ? ' visible' : '')}>
                <h1>Main</h1>
            </div>
        );
    }
}

export default MainPageContainer;
