import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './SignUpContainer.scss';
import logo from '../../assets/images/logo.svg';
import {GetCountries, GetInfo, SetPhone} from '../../store/actions/SignUpActions';
import CountryCodesList from './Components/CountryCodesList/CountryCodesList';
import Keyboard from '../../Components/Keyboard/Keyboard';

class SignUpContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullCodeList: false,
            selectedCode: null
        };
        this.showFullCodeList = this.showFullCodeList.bind(this);
    }

    componentWillMount() {
        this.props.GetInfo();
        this.props.GetCountries();
    };

    scrollIntoView(id) {
        const element = document.getElementById(id);
        element.scrollIntoView();
    };

    showFullCodeList(id) {
        if (this.state.fullCodeList) {
          this.setState({
            fullCodeList: !this.state.fullCodeList,
            selectedCode: id
          });
        } else {
          this.setState({
            ...this.state,
            fullCodeList: !this.state.fullCodeList
          });
        }
              this.scrollIntoView(id)
    }

    render() {
        let selected = false;
        const {countryId, countries} = this.props;
        const {fullCodeList, selectedCode} = this.state;
        const countryCodes = countries.map(country => {
            if ((countryId === country.id && selectedCode === null) || selectedCode === country.id) {
                selected = true;
            } else {
              selected = false;
            }
            return (
                <CountryCodesList id={country.id}
                                  scrollIntoView={this.scrollIntoView}
                                  focusPath={'code-item-' + country.id}
                                  selected={selected}
                                  fullCodeList={fullCodeList}
                                  showFullCodeList={this.showFullCodeList}
                                  key={country.id}>
                    {country.telephone_code}
                </CountryCodesList>
            )
        });
        return (
            <div className={classes["signup-container"]}>
                <img className={classes.logo} src={logo} alt="Sweet TV"/>
                <h1>Введите свой номер телефона для подключения</h1>
                <ul className={classes["country-codes-list"]}>{countryCodes}</ul>
                <button onClick={this.props.SetPhone}>SetPhone</button>
                <Keyboard/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.signUp.countries,
        countryId: state.signUp.countryId,
        partnerId: state.signUp.partnerId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetCountries: () => dispatch(GetCountries()),
        GetInfo: () => dispatch(GetInfo()),
        SetPhone: () => dispatch(SetPhone())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
