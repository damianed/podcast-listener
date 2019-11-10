import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchResult from './SearchResult';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
        };
    }

    render() {
        return (
            <div id="searchbar" className="col-md-8 input-group flex-nowrap">
                <input id="searchInput" className="form-control" type="text" placeholder="Type podcast name to search" onChange={(e) => this.state.props.onChange(e.target)}></input>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">
                        <FontAwesomeIcon className="align-middle" icon={faSearch}/>
                    </span>
                </div>
            </div>
        )
    }
}

export default SearchBar;
