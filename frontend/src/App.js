import "./App.css";
import {lazy, useContext, useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import initializeApp from "./components/auth/init.js";
import {themeChange} from "theme-change";
import {UserContext} from "./services/UserContextProvider.js";
import ThemeContext from "./contexts/ThemeContext.js";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.js"));

const Jobs = lazy(() => import("./components/jobs.js"));
const PageNotFound = lazy(() => import("./pages/pageNotFound.js"));
const ForgotPassword = lazy(() => import("./components/user/ForgotPassword.js"));
const Register = lazy(() => import("./components/user/Register.js"));
const HomePageLayout = lazy(() => import("./pages/HomePage/HomePageLayout.js"));
const DashboardLayout = lazy(() => import("./features/dashboard/DashboardLayout.js"));
const Login = lazy(() => import('./components/user/Login.js'));

initializeApp()
// const token = checkAuth();

const App = () => {
    const {isAuthenticated} = useContext(UserContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const themeContextValue = {theme, setTheme};

    useEffect(() => {
        themeChange(false)
    }, [])
    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                <Router>
                    <Routes>
                        <Route path={'/login'} element={!isAuthenticated ? <Login/> : <Navigate to={'/dashboard'}/>}/>
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

                        <Route path={"/jobs"} element={
                            <Jobs/>}/>

                        <Route path={'/*'} element={<PageNotFound/>}/>

                        <Route path="*"
                               element={<Navigate to={isAuthenticated ? "/dashboard" : '/*'} replace/>}/>
                        <Route path={'/'} element={<HomePage/>}/>
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
