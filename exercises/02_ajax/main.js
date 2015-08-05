var SearchContainer = React.createClass({
	render: function(){
		return (
			<div>
				<input type="text" ref="query" />
				<select ref="category">
					<option value="software">Apps</option>
					<option value="movie">Films</option>
					<option value="music">Music</option>
				</select>
				<input type="submit" onClick={this.createAjax} />
			</div>
		);
	},

	createAjax: function(){
		var query 	 	= React.findDOMNode(this.refs.query).value;
		var category 	= React.findDOMNode(this.refs.category).value;
		var URL = 'https://itunes.apple.com/search?term=' + query +'&country=us&entity=' + category;
		this.props.search(URL)
	}
});

var ResultContainer = React.createClass({
	render: function(){
		var apps = this.props.searchResult.map(function(app,index){
			return <li key={index}>{app.trackName}</li>
		})
		return(
			<ul>
				{apps}
			</ul>			
		);
	}
});

/*var Item = React.createClass({
	render: function(){
		return(

		);
	}
});
*/

var App = React.createClass({
	
	getInitialState: function(){
		return {
			searchResult: []
		}
	},

	render: function(){
		return (
			<div>
			<SearchContainer 
				search={this.search} />
			<ResultContainer 
				searchResult={this.state.searchResult} />

			</div>
		);
	},

	showApps: function(response){
		console.log(response.results);
		this.setState({
			searchResult: response.results
		})
	},

	search: function(URL){
		$.ajax({
			type: "GET",
			dataType: 'jsonp',
			url: URL,
			success: function(response){
				this.showApps(response);
			}.bind(this)
		});
	}


});



React.render(<App />,  document.getElementById("content"));
