import React from 'react';
import '../index.css';
import './title-style.css';

const weatherURL = "http://api.openweathermap.org/data/2.5/weather?id=3441575&appid=0823e272568368a3ed22b2cd2a830e01&units=metric";

// function fetchWeatherData(){
//     fetch(weatherURL)
//       .then(response => response.json())
//       .then((jsonData) => {
//         // jsonData is parsed json object received from url
//         return "jsonData";
//       })
//       .catch((error) => {
//         // handle your errors here
//         console.error(error)
//         return null;
//     });
// }
// async function fetchWeatherData() {
//     return await fetch(
//         weatherURL
//     )
//     .then((response) => {
//         return response.json();
//     })
//     .catch((error) => console.log(error));
// }

let test;
class Title extends React.Component {
    render() {
        return(
            <h1 className="title">Current weather for is</h1>
        );
    }
};

export default Title;