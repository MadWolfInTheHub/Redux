import { getCitiesData } from "./weather.gateway";

export const WEATHER_DATA = 'WEATHER_DATA';

export const wetherRecived = (weatherData) => {
  return {
    type: WEATHER_DATA,
    payload: {
      weatherData,
    }
  };
};

export const fetchWeather = () => {
  return function(dispatch) {
    getCitiesData()
    .then(data => {
      dispatch(wetherRecived(data))
    });
  };
};
