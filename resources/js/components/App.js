import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar'

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <SearchBar />
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
