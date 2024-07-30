import "./App.css";
import {lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import checkAuth from "./components/auth/auth.js";
import initializeApp from "./components/auth/init.js";
import {themeChange} from "theme-change";

const ListCourse = lazy(() => import("./components/courses/listCourse.js"));
const ForgotPassword = lazy(() => import("./components/user/ForgotPassword.js"));
const Register = lazy(() => import("./components/user/Register.js"));
const HomePageLayout = lazy(() => import("./pages/HomePage/HomePageLayout.js"));
const DashboardLayout = lazy(() => import("./components/dashboard/DashboardLayout.js"));
const Login = lazy(() => import('./components/user/Login.js'));

initializeApp()
const token = checkAuth();

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const themeContextValue = {theme, setTheme};
    console.log(theme);

    useEffect(() => {
        // 👆 daisy UI themes initialization
        themeChange(false)
    }, [])
    return (
        <>
            {/*<ThemeContext.Provider value={themeContextValue}>*/}
            <Router>
                <Routes>
                    <Route path="/login" element={
                        <Suspense fallback={<div> Loading...</div>}>
                            <Login/>
                        </Suspense>}
                    />
                    <Route path="/forget-password" element={

                        <Suspense fallback={<div> Loading...</div>}>
                            <ForgotPassword/>
                        </Suspense>}
                    />
                    <Route path="/register" element={
                        <Suspense fallback={<div> Loading...</div>}>
                            <Register/>
                        </Suspense>
                    }/>

                    <Route path="/dashboard/*" element={
                        <Suspense fallback={<div> Loading...</div>}>
                            <DashboardLayout/>
                        </Suspense>
                    }/>

                    <Route path="/courses" element={
                        <Suspense fallback={<div> Loading...</div>}>
                            <ListCourse/>
                        </Suspense>
                    }/>

                    <Route path="*" element={<Navigate to={token ? "/dashboard/welcome" : "/login"} replace/>}/>

                    <Route path={'/'} element={
                        <Suspense fallback={<div> Loading...</div>}>
                            <HomePageLayout/>
                        </Suspense>
                    }/>
                </Routes>
            </Router>
            {/*</ThemeContext.Provider>*/}
        </>
    );
};

export default App;
