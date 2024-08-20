import {lazy} from "react";

const CreateUser = lazy(() => import("../../pages/learner/components/CreateUser.js"));

const Learner = lazy(() => import("../../pages/learner/index.js"));
const Courses = lazy(() => import("../../pages/courses/index.js"));
const CourseCreation = lazy(() => import("../../components/Courses/course-create.js"));
const LoginPage = lazy(() => import("../../components/user/Login.js"));
const PageNotFound = lazy(() => import("../../components/pageNotFound.js"));
const RegisterForm = lazy(() => import("../../components/user/Register.js"));
const ProfileSettings = lazy(() => import("../../features/settings/profilesettings/updateProfile/index.js"));
const CourseUpdate = lazy(() => import("../../components/Courses/course-update.js"));
const Dashboard = lazy(() => import("../../pages/dashboard/index.js"));

const routes = [
    {
        path: "/",
        component: <Dashboard/>
    },

    {
        path: '/users',
        component: <Learner/>
    },

    {
        path: '/users/create',
        component: <CreateUser/>
    },

    {
        path: '/courses',
        component: <Courses/>
    },

    {
        path: '/contents',
        component: ''
    },

    {
        path: '/analytics',
        component: ''
    },

    {
        path: '/#',
        component: <PageNotFound/>
    }


]

export default routes;
