import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './weather.actions';
import { wheeatherDataselector } from './weather.selectors';


class Weather extends Component {
  componentDidMount() {
    this.props.getWeatherData()
  };
  
  render() {
    if (!this.props.citiesData) {
      return null
    }
    
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
          <ul className="cities-list">
          {
            this.props.citiesData.map(city => (
              <li key={city.id} className="city">
                  <span className="city__name">{city.name}</span>
                  <span className="city__temperature">{city.temperature}</span>
              </li>
            ))
          }
          </ul>
      </main>
    );
  }
};

const mapState = state => {
  return {
    citiesData: wheeatherDataselector(state),
  }
}

const mapDispatch = {
  getWeatherData: usersActions.getWeatherData,

};

export default connect(mapState, mapDispatch)(Weather);