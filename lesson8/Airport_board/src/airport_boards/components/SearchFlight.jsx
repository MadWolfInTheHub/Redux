import React, { Component } from 'react';
import FlightsList from './FlightsList';

class SearchFlight extends Component{
  state = {
    value: '',
    flightToSearch: '',
    isDeparture: true,
  };

  hanldeIsdeparture = () => {
    this.setState({
      isDeparture: !this.state.isDeparture
    });
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      flightToSearch: this.state.value,
      value: '',
    });
  };
  
  render() {
    const { flightsList } = this.props
    return (
      <>
        <div className='flights'>
          <form 
            className='flights__search-form'
            onChange={this.handleChange} 
            onSubmit={this.onSubmit}
          >
            <input 
              className='flights__search-form_input'
              placeholder='Airline, destination or flight #'
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
            <button className='flights__search-form_submit btn'>search</button>
          </form>
          <div className='flights__type'>
            <button 
              className='flights__type_btn departures'
              onClick={this.state.isDeparture ? null : this.hanldeIsdeparture}
            >departures</button>
            <button 
              className='flights__type_btn arrivals'
              onClick={this.state.isDeparture ? this.hanldeIsdeparture : null}

            >arrivals</button>
          </div>
        </div>
        {
          this.state.isDeparture 
          ?  <FlightsList flightData={flightsList.departure} flightToSearch={this.state.flightToSearch}/>
          :  <FlightsList flightData={flightsList.arrival} flightToSearch={this.state.flightToSearch}/>
        }
      </>
    );
  }
};

export default SearchFlight;