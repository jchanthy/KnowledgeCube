import "./App.css";
import ThemeContext from "./contexts/ThemeContext.js";
import {useContext, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import RegisterForm from "./components/user/Register.js";
import ForgotPassword from "./components/user/ForgotPassword.js";
import Layout from "./pages/layout.js";
import ListCourse from "./components/courses/listCourse.js";
import checkAuth from "./components/auth/auth.js";
import Dashboard from "./pages/protected/Dashboard.js";
import initializeApp from "./components/auth/init.js";
import {UserContext} from "./services/UserContextProvider.js";


initializeApp()
const token = checkAuth();

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const themeContextValue = {theme, setTheme};

    const {isAuthenticated} = useContext(UserContext);

    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                <Router>
                    <Routes>
                        <Route path={'/'} element={
                            <Layout/>
                        }/>
                        <Route path={'/login'}
                               element={!isAuthenticated ? <LoginPage/> : <Navigate to={'/dashboard'}/>}/>
                        <Route path={'/register'} element={<RegisterForm/>}/>
                        <Route path={'/forget-password'} element={<ForgotPassword/>}/>
                        <Route path={'/courses'} element={<ListCourse/>}/>
                        <Route path={'/dashboard'} element={<Dashboard/>}/>

                        <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} replace/>}/>
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
