import { useEffect, useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList/courseList";

const App = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const courseData = async () => {
			try {
				const response = await fetch("/courses");
				const data = await response.json();
				setCourses(data);
			} catch (error) {
				console.log("Erorr fetching courses:", error);
			}
			courseData();
		};
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
