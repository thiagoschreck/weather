import React, { useState }from 'react';
import '../index.css';
import './title-style.css';

const APIKEY = '0823e272568368a3ed22b2cd2a830e01';
const CITY = 'Montevideo,UY';
const UNITS = 'metric';

export default class Title extends React.Component {
    state = {}
  
    componentDidMount() {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}&units=${UNITS}`)
        .then((response) => response.json())
        .then((data) => this.setState({ data }));
    }
  
    render() {
      const { data } = this.state
      return data ? <h1 className="title">Current weather for {data.name},{data.sys.country} is</h1> : <h1 className="title">Loading...</h1>;
    }
  }