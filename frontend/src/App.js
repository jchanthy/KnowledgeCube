import "./App.css";
import ThemeSwitcher from "./components/ThemeSwither.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Sidebar from "./components/sidebar.js";
import ThemeContext from "./contexts/ThemeContext.js";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const themeContextValue = { theme, setTheme };
  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        <Header>
          <Sidebar></Sidebar>
          <ThemeSwitcher />
        </Header>
        <Outlet />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
