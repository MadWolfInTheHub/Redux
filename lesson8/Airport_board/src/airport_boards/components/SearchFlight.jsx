import React, { Component } from 'react';
import FlightsList from './FlightsList';
import SearchForm from './SearchForm';

class SearchFlight extends Component{
  state = {
    isDeparture: true,
  };

  handleIsDeparture = () => {
    this.setState({
      isDeparture: !this.state.isDeparture,
    });
  };

  handleChange = (event) => {
    this.props.flightToSearch(event.target.value)
  };

  handleFlightsDateToCheck = (event) => {
    this.props.flightsDateToCheck(event.target.value)
  }

  onSubmit = event => {
    event.preventDefault();
  };
  
  render() {
    const { flightsList, date, searchInfo, flightToSearch } = this.props
    return (
      <>
        <SearchForm
          handleIsDeparture={this.handleIsDeparture}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          isDeparture={this.state.isDeparture}
          date={date}
          flightsDateToCheck={this.handleFlightsDateToCheck}
          searchInfo={searchInfo}
          flightToSearch={flightToSearch}
        />
        {
          this.state.isDeparture 
            ?  <FlightsList 
                flightData={flightsList.departure}
                searchInfo={searchInfo}
                isDeparture={this.state.isDeparture}
              />
            :  <FlightsList 
                flightData={flightsList.arrival} 
                searchInfo={searchInfo}
                isDeparture={this.state.isDeparture}  
              />
        }
      </>
    );
  }
};

export default SearchFlight;