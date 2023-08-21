
import axios from 'axios' 

const Url = "https://restcountries.com/v2"
export function GetCounters() {
  return axios.get(`${Url}/all`)
}

export  function getCountriesDetails(countryCode) {
  return axios.get(`${Url}/alpha/${countryCode}`) 
             
}
