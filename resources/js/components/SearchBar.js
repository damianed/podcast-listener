import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component {
    render() {
        return (
            <div id="searchbar" className="col-md-8 input-group flex-nowrap">
                <input id="searchInput" className="form-control" type="text" placeholder="Type podcast name to search"></input>
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">
                        <FontAwesomeIcon className="align-middle" icon={faSearch}/>
                    </span>
                </div>
            </div>
        )
    }
}

export default SearchBar;