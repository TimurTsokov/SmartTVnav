import React, {Component} from 'react';
import {connect} from 'react-redux';
// import classes from './AuthContainer.css'
// import {Auth} from '../../store/actions/AuthActions';

class SignUpContainer extends Component {

    // componentDidMount() {
    //
    // }

    render() {
        return (
            <div className={classes["auth-container"]}>{this.props.needSignUp}</div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         needSignUp: state.needSignUp
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onAuthCheck: () => dispatch(Auth())
//     };
// };

export default SignUpContainer;
