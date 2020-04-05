import React from 'react'
import WeatherResults from './weatherResults.js'

function tooManyMatches(){
    return (
        <div>
            <p>too many matches found</p>
        </div>
    )
}
function noMatches(){
    return (
        <div>
            <p>no matches found</p>
        </div>
    )
}
function matchFound(country){
    const langList = country.languages.map(
        language =>
        <li key={language.name}><p>{language.name}</p></li>
    )    
    return (
        <div>
            <h1>{country.name}</h1>
            <p>{country.capital}</p>
            <p>{country.population}</p>
            <ul>
                {langList}
            </ul>
            <img src={country.flag} alt="Smiley face" height="200" width="300" />
            <WeatherResults city={country.capital} />
        </div>
    )
}
function matchesFound(countryList){
    const list = countryList.map(
        country =>
        <li key={country.name}><p>{country.name}</p></li>
    )
    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

const results = (props)=>{

    //console.log(props.filterCountries.length);
    let manyResults=props.filterCountries.length;
    let ret=<div></div>;
    

    if(manyResults==0){ret=noMatches()}else
    if(manyResults==1){ret=matchFound(props.filterCountries[0])}else
    if(manyResults>10){ret=tooManyMatches()}else
    if(manyResults>1){ret=matchesFound(props.filterCountries)}

    return ret
}

export default results