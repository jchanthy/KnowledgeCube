import "./App.css";
import ListCourse from "./components/courses/listCourse.js";
import Tutorials from "./components/tutorials/tutorials.js";
import Home from "./pages/home.js";
import PageNotFound from "./pages/pageNotFound.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserProfile from "./components/profile/userProfile.js";
import Settings from "./components/settings/setting.js";
import Login from "./components/auth/login.js";

const App = () => {
    return (
        <>
            <html data-theme="light">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<ListCourse />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
            </html>
        </>

    );
};

export default App;
