import { fetchFlights } from "./flights.gateway";

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED'

export const flightsListRecieved = flightsList => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    },
  };
  return action;
};

export const getFlightsList = () => {
  const thunkAction = function(dispatch) {
    fetchFlights().then(flightsList => 
      dispatch(flightsListRecieved(flightsList))
    );
  };
  return thunkAction;
};