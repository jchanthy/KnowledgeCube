import App from "../App.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            children: [{index: true}],
        },
    ]);
    return <RouterProvider router={router}/>;
};
export default Routes;
