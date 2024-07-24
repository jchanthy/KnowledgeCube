import "./App.css";
import ThemeContext from "./contexts/ThemeContext.js";
import {useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/login.js";
import Register from "./components/user/Register.js";
import ForgotPassword from "./components/user/ForgotPassword.js";
import Layout from "./pages/layout.js";
import ListCourse from "./components/courses/listCourse.js";
import checkAuth from "./components/auth/auth.js";
import initializeApp from "./components/auth/init.js";
import Dashboard from "./pages/protected/Dashboard.js";

initializeApp()
const token = checkAuth();

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const themeContextValue = {theme, setTheme};


    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                <Router>
                    <Routes>

                        <Route path={'/'} element={
                            <Layout/>
                        }/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/register'} element={<Register/>}/>
                        <Route path={'/forget-password'} element={<ForgotPassword/>}/>
                        <Route path={'/courses'} element={<ListCourse/>}/>
                        <Route path={'/dashboard'} element={<Dashboard/>}/>


                        <Route path="*" element={<Navigate to={token ? "/app/welcome" : "/login"} replace/>}/>
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
