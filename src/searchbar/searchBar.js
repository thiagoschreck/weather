import React from 'react';
import '../index.css';
import './searchBar-style.css';

class SearchBar extends React.Component {
    render() {
        return(
            <input type="text" name="searchbar" id="searchbar"/>
        );
    }
};

export default SearchBar;