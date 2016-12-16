// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')

// Include the Helper (for the saved recall)
var helpers = require('../utils/helpers');

// Create the Main component
var Main = React.createClass({

	getInitialState: function(){
		return {
			savedArticles: ""
		}
	},

	componentDidMount: function(){

		helpers.getSaved()
			.then(function(articleData){
				this.setState({
					savedArticles: articleData.data
				});
				console.log("Saved results", articleData.data);
			}.bind(this))
	},

	// /*This code handles the sending of the search terms to the parent Search component*/
	handleClick: function(item, event){
		console.log("CLICKED");
		console.log(item);

		// Delete the list!
		helpers.deleteSaved(item.title, item.date, item.url)
			.then(function(data){

			// Get the revised list!
			helpers.getSaved()
				.then(function(articleData){
					this.setState({
						savedArticles: articleData.data
					});
					console.log("Saved results", articleData.data);
				}.bind(this))



			}.bind(this))
	},

	render: function(){

		if (this.state.savedArticles == "") {
			return(

				<div>

					<h3>
					  	<span><em>Save your first article...</em></span>
					</h3>

			  	</div>

			)
		}

		else {

			var articles = this.state.savedArticles.map(function(article, index){

				return(

						<div className="well" id="articleWell-" + {index}>
							<h3 className="articleHeadline"><span className="label label-primary"> {index} </span><strong> {article.title} </strong></h3>
							<h5> {article.date} </h5>
							<span className="btn-group pull-right" >
								<a href={article.url} target="_blank"><button className="btn btn-default ">View Article</button></a>
								<button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Delete</button>
							</span>
						</div>
				)

			}.bind(this))

		}
 

		return(

			{articles}

		)
	}
});

module.exports = Main;
