import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home.js";

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
		<div className='container'>
			<Home />
		</div>
	);
};

export default App;
