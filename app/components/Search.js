// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');
// Include the Query and Results componens
var Query = require('./Search/Query');
var Results = require('./Search/Results');

// Include the Helper (for the query)
var helpers = require('../utils/helpers');

// Create the Main component
var Search = React.createClass({
  /*Set the initial state variables allowing to propagate the variables for maniuplation by the children components*/
    getInitialState: function(){
  		return {
  			term: "",
  			start: "",
  			end: "",
  			results: {}
  		}
  	},
    componentDidUpdate: function(prevProps, prevState){
    		console.log("COMPONENT UPDATED");
    		console.log(this.state.term);
    		console.log(this.state.start);
    		console.log(this.state.end);

    		console.log("Previous State ", prevState);
    	},

      setQuery: function(newQuery, newStart, newEnd){
  		this.setState({
  			term: newQuery,
  			start: newStart,
  			end: newEnd
  		})
  	},

  	render: function(){
  		return(
  			<div className="row">
  				<Query updateSearch={this.setQuery} />

  				<Results results={this.state.results} />
  			</div>
  		)
  	}

  });

  module.exports = Search;


