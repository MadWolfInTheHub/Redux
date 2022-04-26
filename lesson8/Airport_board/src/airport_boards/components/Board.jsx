import React, { Component } from 'react';
import FlightsList from './FlightsList';
import SearchFlight from './SearchFlight';
import { connect } from 'react-redux';
import { fligthsListSelector } from '../flights.selectors';
import * as flightsActions from '../flights.actions';

class Board extends Component {
  componentDidMount() {
    this.props.getFlightsList(/* new Date() */)
  }
  
  
  render() {
    const flightsList = this.props.flightsList
    if (!flightsList) return null;

    console.log(flightsList);
    
    return (
      <section className='airport-board'>
        <h1 className='title'>SEARCH FLIGHT</h1>
        <SearchFlight flightsList={flightsList}/>
      </section>
    );
  };
};

const mapState = state => {
  return {
    flightsList: fligthsListSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
};

export default connect(mapState, mapDispatch)(Board);