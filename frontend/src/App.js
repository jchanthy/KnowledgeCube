import { useEffect, useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList/courseList";

const App = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch("/courses")
			.then((response) => response.json())
			.then((data) => setCourses(data));
	}, []);

	return (
		<div className='App'>
			<header className='bg-gray-800 text-white p-4'>
				<h3>E-Learning Platform</h3>
			</header>
			<CourseList courses={courses}></CourseList>
		</div>
	);
};

export default App;
