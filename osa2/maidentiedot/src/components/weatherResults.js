import React from 'react'
import weatherService from '../services/weather.js';
import { useState, useEffect } from 'react';

const WeatherResults = (props) => {

    const [weatherinfo, setweatherinfo] = useState(<p>loading....</p>)
    const hook = () => {
        weatherService
            .getWeather(props.city)
            .then(response => {
                const cityWeather = response.data;
                console.log(cityWeather)

                setweatherinfo(
                    <div>
                        <h2>Weather in {cityWeather.location.name}</h2>
                        <p>temperature: {cityWeather.current.temperature} celsius</p>
                        <img src={cityWeather.current.weather_icons[0]} alt="Smiley face" height="42" width="42" />
                        <p>wind: {cityWeather.current.wind_speed} mph direction {cityWeather.current.wind_dir}</p>
                    </div>)
            })
    }
    useEffect(hook, [])
    return weatherinfo
}

export default WeatherResults