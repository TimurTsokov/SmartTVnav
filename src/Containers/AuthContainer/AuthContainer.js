import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './AuthContainer.scss'
import {Auth} from '../../store/actions/AuthActions';
import {Route, Switch, withRouter} from "react-router-dom";
import SignUpContainer from "../../Containers/SignUpContainer/SignUpContainer";
import MainPageContainer from "../../Containers/MainPageContainer/MainPageContainer";

class AuthContainer extends Component {

    componentWillMount() {
        this.props.Auth().then(() => {
            if (this.props.needSignUp) {
                this.props.history.push({pathname: ''})
            }
        })
    }

    render() {
        return (
            <div className={classes["auth-container"]}>
                <Switch>
                    <Route path="" exact component={SignUpContainer}/>

                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        needSignUp: state.auth.needSignUp
    };
};

const mapDispatchToProps = dispatch => {
    return {
        Auth: () => dispatch(Auth())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));

{/*<Route path="/main/" exact component={MainPageContainer}/>*/}