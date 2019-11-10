import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import ApiPetitions from '../ApiPetitions.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }
    handleSearchBarInput(target) {
        console.log(target.value);
        let podcastResults = ApiPetitions.searchPodcast(target.value);
        let searchResults = [];
        for(const result of podcastResults){
          searchResults.push(<SearchResult key={result.id} name={result.name} description={result.description}/>);
        }
        this.setState({results: searchResults});
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <SearchBar onChange={(target) => this.handleSearchBarInput(target)} />
                    {this.state.results}
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
