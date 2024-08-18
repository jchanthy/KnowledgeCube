import "./App.css";
import {lazy, useContext, useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {themeChange} from "theme-change";
import {UserContext} from "./services/UserContextProvider.js";
import ThemeContext from "./contexts/ThemeContext.js";
import initializeApp from "./services/auth/init.js";

const ChangePassword = lazy(() => import("./components/user/ChangePassword.js"));

const AdminLogin = lazy(() => import("./components/Admin/AdminLogin.js"));

const LearnerLayout = lazy(() => import("./features/learner/LearnerLayout.js"));
const Courses = lazy(() => import("./components/Courses/courses.js"));

const HomePage = lazy(() => import("./pages/HomePage/HomePage.js"));

const Jobs = lazy(() => import("./pages/Jobs/index.js"));
const PageNotFound = lazy(() => import("./components/pageNotFound.js"));
const ForgotPassword = lazy(() => import("./components/user/ForgotPassword.js"));
const Register = lazy(() => import("./components/user/Register.js"));
const HomePageLayout = lazy(() => import("./pages/HomePage/HomePageLayout.js"));
const DashboardLayout = lazy(() => import("./features/dashboard/DashboardLayout.js"));
const Login = lazy(() => import('./components/user/Login.js'));

initializeApp()
const App = () => {
    const {isAuthenticated} = useContext(UserContext);
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
                        <Route path={'/login'} element={!isAuthenticated ? <Login/> : <Navigate to={'/learner'}/>}/>
                        <Route path="/forget-password" element={<ForgotPassword/>}/>
                        <Route path={'/reset-password'} element={<ChangePassword/>}/>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route element={<HomePageLayout/>}>
                            <Route path={'/courses'} element={<Courses/>}/>
                            <Route path={'/jobs'} element={<Jobs/>}/>
                        </Route>
                        <Route path={'/admin/login'}
                               element={!isAuthenticated ? <AdminLogin/> : <Navigate to={'/admin/dashboard'}/>}/>
                        <Route path={'/admin/*'}
                               element={isAuthenticated ? <Navigate to={'/dashboard'}/> : <AdminLogin/>}/>
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
