import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import UserContextProvider from "./services/UserContextProvider.js";
import {Provider} from "react-redux";
import store from "./components/auth/store.js"
import SuspenseContent from "./pages/SuspenseContent.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <UserContextProvider>
        <Suspense fallback={<SuspenseContent/>}>
            <Provider store={store}>
                <App/>
            </Provider>
        </Suspense>
    </UserContextProvider>

    // {/*</React.StrictMode>*/}
);
