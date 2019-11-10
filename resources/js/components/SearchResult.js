import React, { Component } from 'react';

class SearchResult extends Component {
	constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="card col-md-8 mt-2">
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="cart-text">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default SearchResult;
