import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './searchbar/searchBar.js';
import Title from './title/title.js';

class MainLayout extends React.Component {
    render() {
        return (
            <div className="mainLayout">
                <SearchBar/>
                <Title/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainLayout/>,
    document.getElementById('root')
);
