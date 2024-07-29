import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import UserContextProvider from "./services/UserContextProvider.js";
import {Provider} from "react-redux";
import store from "./components/auth/store.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <UserContextProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </UserContextProvider>

    // {/*</React.StrictMode>*/}
);
