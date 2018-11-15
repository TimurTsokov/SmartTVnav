import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import classes from './SignUpContainer.scss';
import logo from '../../assets/images/logo.svg';
import {GetCountries, GetInfo} from '../../store/actions/SignUpActions';

class SignUpContainer extends PureComponent {

    componentDidMount() {
        this.props.GetCountries();
        this.props.GetInfo();
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

const mapStateToProps = state => {
    return {
        countries: state.countries,
        countryId: state.countryId,
        partnerId: state.partnerId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetCountries: () => dispatch(GetCountries()),
        GetInfo: () => dispatch(GetInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
