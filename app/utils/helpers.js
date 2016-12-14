/*Include the Axios library for HTTP requests*/
var axios = require('axios');

/* NYT API Key*/
var APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper Functions (in this case the only one is runQuery)
var helpers = {
  // This will run our query.
  	runQuery: function(term, start, end){
      // Adjust to get search terms in proper format
      		var term = term.trim();
      		var start = start.trim() + "0101";
      		var end = end.trim() + "1231";

		console.log("Query Run");
		// Run a query using Axios. Return the results as an object with an array.
		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
			params: {
			    'api-key': APIKey,
			    'q': term,
			    'begin_date': start,
			    'end_date': end
			}
		})
		.then(function(results){
			console.log("Axios Results", results.data.response);

			return results.data.response;

		});
	},

  	getSaved: function(){
		return axios.get('/api/saved')
			.then(function(results){
				console.log("axios results ", results);
				return restuls;
			})
	},
	postSaved: function(title, date, url){
		var newArticle = {
			title: title,
			date: date,
			url: url
		};
		return axios.post('/api/saved', newArticle)
			.then(function(results){
				console.log("acios results ", results._id);
				return results._id;
			})
	},
	deleteSaved: function(title, date, url){
		return axios.delete('/api/saved', {
			params: {
				'title': title,
				'date': date,
				'url': url,
			}
		})
		.then(function(results){
			console.log("axios results ", results);
			return results;
		})
	}
}
module.exports = helpers;
