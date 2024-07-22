import "./App.css";
import ThemeContext from "./contexts/ThemeContext.js";
import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/Login.js";
import Register from "./components/user/Register.js";
import ForgotPassword from "./components/user/ForgotPassword.js";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const themeContextValue = {theme, setTheme};
    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                {/*<Header>*/}
                {/*    <Sidebar/>*/}
                {/*    <Logo/>*/}
                {/*    <ThemeSwitcher/>*/}
                {/*    <Search/>*/}
                {/*    <UserProfile/>*/}
                {/*    <Notifications/>*/}
                {/*</Header>*/}
                {/*<Outlet/>*/}
                {/*<Footer/>*/}
                <Router>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/register'} element={<Register/>}/>
                        <Route path={'/forget-password'} element={<ForgotPassword/>}/>
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
