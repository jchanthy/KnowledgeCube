import Layout from "../pages/HomePage/HomePageLayout.js";
import ListCourse from "../components/courses/listCourse.js";
import LoginPage from "../pages/LoginPage.js";
import PageNotFound from "../pages/pageNotFound.js";
import RegisterForm from "../components/user/Register.js";
import ForgotPassword from "../components/user/ForgotPassword.js";
import Dashboard from "../pages/dashboard/index.js";

const routes = [
    {
        path: "/dashboard",
        component: (<Dashboard/>)
    },
    {
        path: '/courses',
        component: (<ListCourse/>)
    },

    {
        path: '/login',
        component: (<LoginPage/>)
    },

    {
        path: '/register',
        component: (<RegisterForm/>)
    },

    {
        path: '/forget-password',
        component: (<ForgotPassword/>)
    },

    {
        path: '/',
        component: (<Layout/>)
    },

    {
        path: '/*',
        component: (<PageNotFound/>)
    }


]


export default routes;
