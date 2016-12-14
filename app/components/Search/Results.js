// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');

// Include the Helper (for the query)
var helpers = require('../../utils/helpers');
var Results = React.createClass({
	getInitialState: function(){
		return{

		}
	},
	handleClick: function(item, event){
		console.log("clicked");
  },
  render: function(){
      return(
        {/*This row will handle all of the retrieved articles */}
          <div className="col-sm-12">
          <br>

            {/* This panel will initially be made up of a panel and wells for each of the articles retrieved */}
            <div className="panel panel-primary">

              {/*Panel Heading for the retrieved articles box */}
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
              </div>

              {/* This main panel will hold each of the resulting articles */} 
              <div className="panel-body" id="wellSection"> {articles} </div>
            </div>
          </div>
      )
    }
});

module.exports = Results;
