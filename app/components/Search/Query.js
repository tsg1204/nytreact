// Include React and React-Router dependencies
var React = require('react');

var Query = React.createClass({

	//Set initial variables for the component to be blanks
	getInitialState: function(){
		return {
			search: "",
			start: "",
			end: "",
		}
	},
  //register any change in the textbox, .
    handleChange: function(event) {
    	console.log("TEXT CHANGED");
      var newState = {};
  		newState[event.target.id] = event.target.value;
  		this.setState(newState);
  	},

    /*This code handles the sending of the search terms to the parent Search component*/
	handleSubmit: function(){
		console.log("CLICKED");
		this.props.updateSearch(this.state.search, this.state.start, this.state.end);
		return false;
	},
  render: function(){
		return(
			{/* First panel is for handling the search parameters */}
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
				</div>
				<div className="panel-body">

					{/* Here we create an HTML Form for handling the inputs */}
					<form role="form">

				  	  {/* Here we create the text box for capturing the search term */}
					  <div className="form-group">
					    <label for="search">Search Term: </label>
					    <input type="text" value={this.state.search} className="form-control" id="term" onChange={this.handleChange} required />
					  </div>

					  {/* Here we capture the number of records that the user wants to retrieve */} 
					  <div className="form-group">
					    <label for="numRecordsSelect">Number of Records to Retrieve:</label>
						<select className="form-control" id="numRecordsSelect">
							<option value=1>1</option>
							{/* Setting the option for 5 as default */}
							<option value=5 selected>5</option>
							<option value=10>10</option>
						</select>			  
					  </div>

				  	  {/* Here we capture the Start Year Parameter */}
					  <div className="form-group">
					    <label for="start">Start Year (Optional):</label>
					    <input type="number" value={this.state.start} className="form-control" id="start" onChange={this.handleChange} required />
					  </div>

				  	  {/* Here we capture the End Year Parameter */}
					  <div className="form-group">
					    <label for="end">End Year (Optional):</label>
					    <input type="text" value={this.state.end} className="form-control" id="end" onChange={this.handleChange} required />
					  </div>

					  {/* Here we have our final submit button */}
					  <button type="submit" className="btn btn-default" onClick={this.handleSubmit} id="runSearch"><i className="fa fa-search"></i> Search</button>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = Query;