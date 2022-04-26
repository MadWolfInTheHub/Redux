import moment from 'moment';
import React from 'react';

const FlightsList = ({ flightData, flightToSearch }) => {
  const filterdData = flightToSearch === '' 
    ? flightData
    : flightData.filter(flight => `${flight['carrierID.IATA']}${flight.fltNo}` === flightToSearch);

  return (
    <table className='flightBoard'>
      <tbody>
        <tr>
          <th className='terminal'>Terminal</th>
          <th className='localTtime'>Local time</th>
          <th className='destination'>Destination</th>
          <th className='status'>Status</th>
          <th className='airline'>Airline</th>
          <th className='flight'>Flight</th>
        </tr>
        {
          filterdData.map(flight => (
            <tr key={flight.id}>
              <td className='terminal'>{flight.term}</td>
              <td className='localTtime'>{moment(flight.timeDepFact).format('hh:mm')}</td>
              <td className='destination'>{flight['airportToID.city_en']}</td>
              <td className='status'>{flight.status}</td>
              <td className='airline'>{flight.airline.en.name}</td>
              <td className='flight'>{`${flight['carrierID.IATA']}${flight.fltNo}`}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default FlightsList;