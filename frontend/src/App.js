import "./App.css";
import CourseList from "./components/CourseList/courseList.js";
import Tutorials from "./components/Tutorials/tutorials.js";
import Home from "./pages/home.js";
import PageNotFound from "./pages/pageNotFound.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserProfile from "./components/Profile/UserProfile";
import Settings from "./components/Settings/setting";
import Login from "./components/Auth/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home/>}
                />
                <Route
                    path='/courses'
                    element={<CourseList/>}
                />
                <Route
                    path='/tutorials'
                    element={<Tutorials/>}
                />
                <Route
                    path='/profile'
                    element={<UserProfile/>}
                >
                </Route>
                <Route
                    path='/settings'
                    element={<Settings/>}
                >
                </Route>
                <Route path='/login' element={<Login/>}>

                </Route>
                <Route
                    path='*'
                    element={<PageNotFound/>}
                />

            </Routes>
        </BrowserRouter>
    );
};

export default App;
