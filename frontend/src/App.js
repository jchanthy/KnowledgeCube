import "./App.css";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Sidebar from "./components/sidebar.js";
import ThemeContext from "./contexts/ThemeContext.js";
import {useState} from "react";
import {Outlet} from "react-router-dom";
import Search from "./components/search.js";
import UserProfile from "./components/profile/userProfile.js";
import Notifications from "./components/notifications.js";
import Logo from "./components/logo.js";
import ThemeSwitcher from "./components/ThemeSwither.js";
import Home from "./pages/home.js";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const themeContextValue = {theme, setTheme};
    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                <Header>
                    <Sidebar/>
                    <Logo/>
                    <ThemeSwitcher/>
                    <Search/>
                    <UserProfile/>
                    <Notifications/>
                </Header>
                <Outlet/>
                <Footer/>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
