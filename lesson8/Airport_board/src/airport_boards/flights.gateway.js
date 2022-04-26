import moment from "moment";

const baseUrl = "https://api.iev.aero/api/flights/10-02-2020"

export const fetchFlights = (date) => {
  return fetch(baseUrl) /* `${baseUrl}/${moment(date).format('DD-MM-YYYY')}` */
    .then(response => {
      if(response.ok) {
        return response.json()
      }
    })
    .then(fligthsList => fligthsList);
};