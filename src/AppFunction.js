import React, { useState, useEffect } from "react";

const AppFunction = () => {
	const [count, setCount] = useState(0);
	const [isOn, setIsOn] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	useEffect(() => {
		document.title = `You have clicked ${count} times`;
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [count]);

	const handleMouseMove = (e) => {
		setMousePosition({
			x: e.pageX,
			y: e.pageY
		});
	};

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const toggleLight = () => {
		setIsOn((prevIson) => !prevIson);
	};

	return (
		<>
			<h2>Counter </h2>
			<button onClick={incrementCount}>I was clicked {count} times</button>

			<h2> Toggle Light </h2>
			<div
				style={{
					height: "50px",
					width: "50px",
					background: isOn ? "yellow" : "grey"
				}}
				onClick={toggleLight}
			/>

			<h2> Mouse Position </h2>
			{JSON.stringify(mousePosition, null, 2)}

			<br />
		</>
	);
};

export default AppFunction;
