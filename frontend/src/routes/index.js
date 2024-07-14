import App from "../App.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/home.js";
import ListCourse from "../components/courses/listCourse.js";
import Login from "../components/auth/login.js";
import Dashboard from "../pages/admin.js";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    path: "home",
                    element: <Home/>
                },
                {
                    path: "courses",
                    element: <ListCourse/>
                },
                {
                    path: "login",
                    element: <Login/>
                },
                {

                    path: 'dashboard',
                    element: <Dashboard/>,
                    children: [
                        {
                            path: 'profile',
                            element: ''
                        },
                        {
                            path: 'settings',
                            element: ''
                        }
                    ]
                }
            ],
        },
    ]);
    return <RouterProvider router={router}/>;
};
export default Routes;
