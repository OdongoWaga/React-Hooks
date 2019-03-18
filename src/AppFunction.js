import React, { useState, useEffect } from "react";

const initialLocationState = {
	latitude: null,
	longitude: null,
	speed: null
};

const AppFunction = () => {
	const [count, setCount] = useState(0);
	const [isOn, setIsOn] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });
	const [status, setStatus] = useState(navigator.online);
	const [location, setLocation] = useState(initialLocationState);

	useEffect(() => {
		document.title = `You have clicked ${count} times`;
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		//Clean Up function
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, [count]);

	const handleMouseMove = (e) => {
		setMousePosition({
			x: e.pageX,
			y: e.pageY
		});
	};

	const handleOffline = () => {
		setStatus(false);
	};

	const handleOnline = () => {
		setStatus(true);
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

			<h2> Network Status </h2>
			<p>
				{" "}
				You Are <strong>{status ? "online" : "offline"} </strong>{" "}
			</p>
		</>
	);
};

export default AppFunction;
