import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './searchbar/searchBar.js';
import Title from './title/title.js';
import CurrentWeather from './temperature/temperature.js';

const APIKEY = '0823e272568368a3ed22b2cd2a830e01';
const CITY = 'Montevideo,UY';
const UNITS = 'metric';

export default { APIKEY, CITY, UNITS };

class MainLayout extends React.Component {
    render() {
        return (
            <div className="mainLayout">
                <SearchBar/>
                <Title/>
                <CurrentWeather/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainLayout/>,
    document.getElementById('root')
);
