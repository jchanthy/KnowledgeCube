import {lazy} from "react";

const CourseCreation = lazy(() => import("../components/CourseCreation.js"));
const LoginPage = lazy(() => import("../components/user/Login.js"));
const PageNotFound = lazy(() => import("../components/pageNotFound.js"));
const RegisterForm = lazy(() => import("../components/user/Register.js"));
const ProfileSettings = lazy(() => import("../features/settings/profilesettings/updateProfile/index.js"));

const Dashboard = lazy(() => import("../pages/dashboard/index.js"));

const routes = [
    {
        path: "/",
        component: <Dashboard/>
    },

    {
        path: '/login',
        component: <LoginPage/>
    },

    {
        path: '/register',
        component: <RegisterForm/>
    },

    {
        path: '/settings/profile',
        component: <ProfileSettings/>
    },

    {
        path: '/course-creation',
        component: <CourseCreation/>
    },

    {
        path: '/#',
        component: <PageNotFound/>
    }


]


export default routes;
