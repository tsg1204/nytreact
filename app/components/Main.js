//this is the main app component.. sets up the header and static content

//include react & react-router
var React = require('react');
var Search = require('./Search.js');
// var Router = require('react-router');

//create the main component - createClass is a function within React so you need React before createClass
var Main = React.createClass({
	//every component has to have a render function
	render: function(){
		return ( 
			<div className="container">
				<div className="jumbotron" style="background-color: #20315A ; color: white;">
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
					<p className="lead text-center"> Articles of interest </p>
				</div>

				<div className="row">
					<div className="col-sm-12">
					<br>	
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Main;
