import React, { useState, useEffect } from 'react';
import Searchfield from './searchfield.js';
import Results from './results';
import countriesService from '../services/countries.js';

let countries

countriesService
  .getAll()
  .then(response => {
    countries = response.data;
  })

function App() {
  //console.log('asdasd');
  const [filterCountries, setFilterCountries] = useState([])


//console.log(countries)

  let stringToCheck
  function checkName(country) {
    //console.log(country.name)
    return country.name.toLowerCase().includes(stringToCheck)
  }

  const showFiltered = (event) => {
    //console.log(countries)
    stringToCheck = event.target.value.toLowerCase()
    setFilterCountries(countries.filter(checkName, event.target.value))
    //console.log(filterCountries)
  }

  return (
    <div>
      <Searchfield showFiltered={showFiltered} />
      <Results filterCountries={filterCountries} />
    </div>
  );
}

export default App;
