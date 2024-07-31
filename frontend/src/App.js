import "./App.css";
import {lazy, useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import checkAuth from "./components/auth/auth.js";
import initializeApp from "./components/auth/init.js";
import {themeChange} from "theme-change";
import ThemeContext from "./contexts/ThemeContext.js";

const ForgotPassword = lazy(() => import("./components/user/ForgotPassword.js"));
const Register = lazy(() => import("./components/user/Register.js"));
const HomePageLayout = lazy(() => import("./pages/HomePage/HomePageLayout.js"));
const DashboardLayout = lazy(() => import("./features/dashboard/DashboardLayout.js"));
const Login = lazy(() => import('./components/user/Login.js'));

initializeApp()
const token = checkAuth();

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const themeContextValue = {theme, setTheme};

    useEffect(() => {
        // 👆 daisy UI themes initialization
        themeChange(false)
    }, [])
    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login/>}

                        />
                        <Route path="/forget-password" element={

                            <ForgotPassword/>
                        }
                        />
                        <Route path="/register" element={
                            <Register/>
                        }/>

                        <Route path="/dashboard/*" element={
                            <DashboardLayout/>
                        }/>

                        <Route path="/courses" element={
                            <HomePageLayout/>
                        }/>

                        <Route path="*" element={<Navigate to={token ? "/dashboard/welcome" : "/login"} replace/>}/>

                        <Route path={'/'} element={
                            <HomePageLayout/>
                        }/>
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
