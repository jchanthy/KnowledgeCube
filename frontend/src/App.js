import "./App.css";
import CourseList from "./components/CourseList/courseList.js";
import Tutorials from "./components/Tutorials/tutorials.js";
import Home from "./pages/home.js";
import PageNotFound from "./pages/pageNotFound.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/courses'
					element={<CourseList />}
				/>
				<Route
					path='*'
					element={<PageNotFound />}
				/>
				<Route
					path='/tutorials'
					element={<Tutorials />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
