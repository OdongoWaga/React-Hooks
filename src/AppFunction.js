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
	const [{ speed, latitude, longitude }, setLocation] = useState(
		initialLocationState
	);
	let mounted = true;

	useEffect(() => {
		document.title = `You have clicked ${count} times`;
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);
		navigator.geolocation.getCurrentPosition(handleGeolocation);
		const watchId = navigator.geolocation.watchPosition(handleGeolocation);

		//Clean Up function
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
			navigator.geolocation.clearWatch(watchId);
			mounted = false;
		};
	}, [count]);

	const handleGeolocation = (e) => {
		if (mounted) {
			setLocation({
				latitude: e.coords.latitude,
				longitude: e.coords.longitude,
				speed: e.coords.speed
			});
		}
	};

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
			<h2> Geolocation </h2>
			<p> Latitude is {latitude} </p>
			<p> Longitude is{longitude} </p>
			<p> Your speed is {speed ? speed : "0"} </p>
		</>
	);
};

export default AppFunction;
