import React, { useState }from 'react';
import '../index.css';
import './temperature-style.css';

const APIKEY = '0823e272568368a3ed22b2cd2a830e01';
const CITY = 'Montevideo,UY';
const UNITS = 'metric';
const CNT = 7;

let unitSymbol = 'ºC';


if(UNITS === 'standard'){
    unitSymbol = 'ºK';
}
if(UNITS === 'imperial'){
    unitSymbol = 'ºF';
}

function getCurrentWeather(data){
    return (
    <h1 className="temperature">
        {data.main.temp}{unitSymbol} 
        <br></br>
        {data.weather[0].description}
        <br></br>
        Min: {data.main.temp_min}{unitSymbol} Max: {data.main.temp_max}{unitSymbol}
    </h1>
    );
}

// function getWeatherForecast(data){
//     // let collection = [];
//     let element;
//     for(let i=0; i<data.list.length; i++){
//         alert(i);
//         // collection[i] = data.list[i];
//         element += <h1>{data.list[i].dt_txt}</h1>
//     }

//     return(
//         <div class="forecast">{element}</div>
//     );
// }

class CurrentWeather extends React.Component {
    state = {}
  
    componentDidMount() {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}&units=${UNITS}`)
        .then((response) => response.json())
        .then((data) => this.setState({ data }));
    }
  
    render() {
      const { data } = this.state;
      return data ? getCurrentWeather(data) : '';
    }
  }

// class Forecast extends React.Component {
//     state = {}
  
//     componentDidMount() {
//       return fetch(`api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${APIKEY}&units=${UNITS}&cnt=${CNT}`)
//         .then((response) => response.json())
//         .then((data) => this.setState({ data }));
//     }
  
//     render() {
//       const { data } = this.state;
//       return data ? getWeatherForecast(data) : 'Placeholder';
//     }
//   }

export default CurrentWeather;