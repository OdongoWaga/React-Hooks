import React, { Component } from "react";

class App extends Component {
	state = {
		count: 0
	};

	incrementCount = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1
		}));
	};

	render() {
		return (
			<button onClick={this.incrementCount}>
				<p>I was clicked {this.state.count} times</p>
			</button>
		);
	}
}

export default App;
