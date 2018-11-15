import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import classes from './SignUpContainer.scss';
import logo from '../../assets/images/logo.svg';

// import {Auth} from '../../store/actions/AuthActions';

class SignUpContainer extends PureComponent {

    componentDidMount() {
        console.log(classes);
    }

    render() {
        return (
            <div className={classes["signup-container"]}>
                <img className={classes.logo} src={logo} alt="Sweet TV"/>
                <h1>Введите свой номер телефона для подключения</h1>
            </div>
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
