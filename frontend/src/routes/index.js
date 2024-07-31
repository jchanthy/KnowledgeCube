import {lazy} from "react";

const LoginPage = lazy(() => import("../pages/LoginPage.js"));
const PageNotFound = lazy(() => import("../pages/pageNotFound.js"));
const RegisterForm = lazy(() => import("../components/user/Register.js"));
const ForgotPassword = lazy(() => import("../components/user/ForgotPassword.js"));
const ProfileSettings = lazy(() => import("../features/settings/profilesettings/index.js"));

const Dashboard = lazy(() => import("../pages/dashboard/index.js"));

const routes = [
    {
        path: "/",
        component: Dashboard
    },
    {
        path: '/login',
        component: (LoginPage)
    },

    {
        path: '/register',
        component: (RegisterForm)
    },

    {
        path: '/forget-password',
        component: (ForgotPassword)
    },

    {
        path: '/profile',
        component: (ProfileSettings)
    },

    {
        path: '/*',
        component: (PageNotFound)
    }


]


export default routes;
