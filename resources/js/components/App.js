import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }
    handleSearchBarInput() {
        this.setState({results: [<SearchResult />]})
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <SearchBar onChange={() => this.handleSearchBarInput(this)} />
                    {this.state.results}
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
