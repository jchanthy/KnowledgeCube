import { useEffect, useState } from "react";
import "./App.css";
import Header from "./pages/header.js";
import Home from "./pages/home.js";

const App = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const courseData = async () => {
			try {
				const response = await fetch("/courses");
				const data = await response.json();
				setCourses(data);
			} catch (error) {
				console.error("Erorr fetching courses:", error);
			}
		};
		courseData();
	}, []);

	return (
		<>
			<Home />
		</>
	);
};

export default App;
