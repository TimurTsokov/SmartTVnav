import React, {Component} from 'react';
import './SearchPageContainer.scss'

class SearchPageContainer extends Component {

    render() {
        return (
            <div className={'container search' + (this.props.visible ? ' visible' : '')}>
                <h1>SearchPageContainer</h1>
            </div>
        );
    }
}

export default SearchPageContainer;
