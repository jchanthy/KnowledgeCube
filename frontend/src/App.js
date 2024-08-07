import "./App.css";
import {lazy, useContext, useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import initializeApp from "./components/auth/init.js";
import {themeChange} from "theme-change";
import {UserContext} from "./services/UserContextProvider.js";
import ThemeContext from "./contexts/ThemeContext.js";

const LearnerLayout = lazy(() => import("./features/learner/LearnerLayout.js"));
const LearnerDashboard = lazy(() => import("./pages/LearnerDashboard/index.js"));
const LearnerCourse = lazy(() => import("./pages/LearnerDashboard/components/LearnerCourse.js"));

const Courses = lazy(() => import("./components/courses.js"));

const HomePage = lazy(() => import("./pages/HomePage/HomePage.js"));

const Jobs = lazy(() => import("./components/jobs.js"));
const PageNotFound = lazy(() => import("./components/pageNotFound.js"));
const ForgotPassword = lazy(() => import("./components/user/ForgotPassword.js"));
const Register = lazy(() => import("./components/user/Register.js"));
const HomePageLayout = lazy(() => import("./pages/HomePage/HomePageLayout.js"));
const DashboardLayout = lazy(() => import("./features/dashboard/DashboardLayout.js"));
const Login = lazy(() => import('./components/user/Login.js'));

initializeApp()
// const token = checkAuth();

const App = () => {
    const {user, isAuthenticated} = useContext(UserContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "emerald");
    localStorage.setItem("theme", theme);

    useEffect(() => {
        themeChange(false)
    }, [])

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };
    return (
        <>
            <ThemeContext.Provider value={{theme, setTheme: handleThemeChange}}>
                <Router>
                    <Routes>
                        <Route path={'/login'} element={!isAuthenticated ? <Login/> : <Navigate to={'/dashboard'}/>}/>
                        <Route path="/forget-password" element={<ForgotPassword/>}/>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route element={<HomePageLayout/>}>
                            <Route path={'/courses'} element={<Courses/>}/>
                            <Route path={'/jobs'} element={<Jobs/>}/>
                        </Route>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/dashboard/*" element={<DashboardLayout/>}/>
                        <Route path={'/learner/*'} element={<LearnerLayout/>}/>

                        <Route path={'/*'} element={<PageNotFound/>}/>

                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
