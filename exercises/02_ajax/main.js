var App = React.createClass({
	
	getInitialState: function(){
		return {
			response: {}
		}
	},

	render: function(){
		return (
			<div>
			<input type="submit" onClick={this.getApps} />
			</div>
		);
	},

	showApps: function(apps){
		console.log('apps: ', apps);
		this.setState({
			response: apps
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
