import React, { Component } from "react";

class App extends Component {
	state = {
		count: 0,
		isOn: false,
		x: null,
		y: null
	};

	componentDidMount() {
		document.title = `You have been clicked ${this.state.count} times`;
		window.addEventListener("mousemove", this.handleMouseMove);
	}
	componentDidUpdate() {
		document.title = `You have been clicked ${this.state.count} times`;
	}

	componentWillUnmount() {
		window.removeEventListener("mousemove", this.handleMouseMove);
	}

	handleMouseMove = (e) => {
		this.setState({
			x: e.pageX,
			y: e.pageY
		});
	};

	incrementCount = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1
		}));
	};

	toggleLight = () => {
		this.setState((prevState) => ({
			isOn: !prevState.isOn
		}));
	};

	render() {
		return (
			<>
				<h2> Counter </h2>
				<button onClick={this.incrementCount}>
					<p>I was clicked {this.state.count} times</p>
				</button>

				<h2> Toggle Light </h2>
				<div
					style={{
						height: "50px",
						width: "50px",
						background: this.state.isOn ? "yellow" : "grey"
					}}
					onClick={this.toggleLight}
				/>

				<h2> Mouse Position </h2>
				<p> X Position: {this.state.x} </p>
				<p> Y Position: {this.state.y} </p>
			</>
		);
	}
}

export default App;
