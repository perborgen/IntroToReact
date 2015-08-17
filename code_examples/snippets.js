var ButtonForm = React.createClass({
	render: function(){
		return (
			<div>
				<input type="submit" onClick={this.props.onUserClick} />
				<h3>You have pressed the button {this.props.counter} times!</h3>
			</div>
		);
	}
});

var App = React.createClass({
	getInitialState: function(){
		return {
			counter: 0
		}
	},
	onUserClick: function(){
		var newCount = this.state.counter += 1;
		this.setState({
			counter: newCount
		});
	},
	render: function(){
		return (
			<div>
				<h1>Welcome to the counter app</h1>
				<ButtonForm counter={this.state.counter} onUserClick={this.onUserClick} />
			</div>
		);
	}
});

React.render(<App />,  document.getElementById("content"));


var App = React.createClass({

	getInitialState: function(){
		return {
			active: true
		}
	},

	handleClick: function(){
		this.setState({
			active: !this.state.active
		});
	},
	
	render: function(){
		var buttonSwitch = this.state.active ? "On" : "Off";

		return (
			<div>
				<h1>Welcome to the button app</h1>
				<input type="submit" onClick={this.handleClick} />
				<p>{buttonSwitch}</p>
			</div>
		);
	}
});

React.render(<App />,  document.getElementById("content"));



var ButtonForm = React.createClass({
	render: function(){
		return (
			<div>
				<h3>{this.props.text}</h3>
				<input type="submit" />
			</div>
		);
	}
});

var App = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Welcome to the button app</h1>
				<ButtonForm text={this.props.text} />
			</div>
		);
	}
});

var buttonText = "Click the button";

React.render(<App text={buttonText} />,  document.getElementById("content"));






var HelloMessage = React.createClass({
  	render: function() {
    	return <div>Hello {this.props.name}</div>;
  	}
});

React.render(<HelloMessage name="John" />, mountNode);


var ButtonForm = React.createClass({
	render: function(){
		return (
			<div>		
				<h3>Click the button</h3>
				<input type="submit" />
			</div>
		);
	}
});

var App = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Welcome to the button app</h1>
				<ButtonForm />
			</div>
		);
	}
});

React.render(<App />,  document.getElementById("content"));
        




