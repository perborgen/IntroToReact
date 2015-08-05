var App = React.createClass({
	
	getInitialState: function(){
		return {
			response: []
		}
	},

	render: function(){
		var apps = this.state.response.map(function(app,index){
			return <li key={index}>{app.trackName}</li>
		})
		return (
			<div>
			<input type="submit" onClick={this.getApps} />
			<ul>
				{apps}
			</ul>
			</div>
		);
	},

	showApps: function(response){
		this.setState({
			response: response.results
		})
	},

	getApps: function(){
		$.ajax({
			type: "GET",
			dataType: 'jsonp',
			url: "https://itunes.apple.com/search?term=jack+johnson",
			success: function(response){
				this.showApps(response);
			}.bind(this)
		});
	}


});



React.render(<App />,  document.getElementById("content"));
