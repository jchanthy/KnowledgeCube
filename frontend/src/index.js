import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import {Provider} from "react-redux";
import store from "./components/auth/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Suspense fallback={<Suspense/>}>
        <Provider store={store}>
            <App/>
        </Provider>
    </Suspense>

    // </React.StrictMode>
);
