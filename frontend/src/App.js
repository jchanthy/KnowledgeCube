import "./App.css";
import ThemeContext from "./contexts/ThemeContext.js";
import {Suspense, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import checkAuth from "./components/auth/auth.js";
import initializeApp from "./components/auth/init.js";
import routes from "./routes/index.js";
import {themeChange} from "theme-change";


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
            <ThemeContext.Provider value={themeContextValue}>
                <Router>
                    <Routes>
                        {
                            routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Suspense fallback={<div>Loading ... </div>}>
                                            {route.component}
                                        </Suspense>
                                    }
                                />
                            ))
                        }
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
