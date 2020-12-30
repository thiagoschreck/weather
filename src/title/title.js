import React, { useState }from 'react';
import '../index.css';
import './title-style.css';

const CITY = 'Montevideo,UY';
const APIKEY = '0823e272568368a3ed22b2cd2a830e01';
const UNITS = 'metric';

console.clear();

// const req = new XMLHttpRequest();
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}&units=${UNITS}`
// req.open("GET", url), true;

// req.onreadystatechange=(e)=>{
//     console.log(req.responseText)
// }

// req.send();

// var getJSON = function(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function() {
//       var status = xhr.status;
//       if (status === 200) {
//         callback(null, xhr.response);
//       } else {
//         callback(status, xhr.response);
//       }
//     };
//     xhr.send();
// };

// var req = new XMLHttpRequest();
// req.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}&units=${UNITS}`, true);
// req.onreadystatechange = function (aEvt) {
//   if (req.readyState === 4) {
//      if(req.status === 200)
//       console.log(req.responseText);
//      else
//       console.log("Error loading page\n");
//   }
// };
// req.send(null); 

// let resulta = getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}&units=${UNITS}`,
// function(err, data) {
//   if (err !== null) {
//     alert('Something went wrong: ' + err);
//   } else {
//     console.log('Data ' + JSON.stringify(data));
//     return JSON.stringify(data);
//   }
// });

// function getJSONData(){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}&units=${UNITS}`)
//         .then(response => response.json())
//         .then(data => {return(data.name)});
//     }

// class Title extends React.Component {
//     render() {
//         return(
//             <h1 className="title">Current weather for {getJSONData()} is</h1>
//         );
//     }
// };

// export default Title;


// function getJSONData(){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}&units=${UNITS}`)
//         .then(response => response.json())
//         .then(data => {return(data.name)});
//     }

// class Title extends React.Component {
//     state = {data: {}}
//     componentDidMount(){
//       getJSONData();
//     }
//     render() {
//         return(
//             <h1 className="title">Current weather for {JSON.stringify(this.state.data)} is</h1>
//         );
//     }
// };

export default class Title extends React.Component {
    state = {}
  
    componentDidMount() {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}&units=${UNITS}`)
        .then((response) => response.json())
        .then((data) => this.setState({ data }));
    }
  
    render() {
      const { data } = this.state
      return data ? <h1 className="title">Current weather for {data.name} is</h1> : "Loading...";
    }
  }