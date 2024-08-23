import {lazy} from "react";

const UserProfile = lazy(() => import("../../components/profile/userProfile.js"));
const Support = lazy(() => import("../../pages/Support/index.js"));
const UpdateCourse = lazy(() => import(("../../components/Courses/UpdateCourse.js")));
const EditUser = lazy(() => import("../../pages/dashboard/components/EditUser.js"));
const LearnerProfile = lazy(() => import( "../../pages/LearnerDashboard/components/LearnerProfile.js"));

const CreateUser = lazy(() => import("../../pages/dashboard/components/CreateUser.js"));

const Learner = lazy(() => import("../../pages/dashboard/components/Learner.js"));
const Courses = lazy(() => import("../../pages/courses/index.js"));
const CourseCreation = lazy(() => import("../../components/Courses/CreateCourse.js"));
const LoginPage = lazy(() => import("../../components/User/Login.js"));
const PageNotFound = lazy(() => import("../../components/pageNotFound.js"));
const RegisterForm = lazy(() => import("../../components/User/Register.js"));
const ProfileSettings = lazy(() => import("../../features/settings/profilesettings/updateProfile/index.js"));
const CourseUpdate = lazy(() => import("../../components/Courses/UpdateCourse.js"));
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
        path: '/users/edit/:id',
        component: <EditUser/>
    },

    {
        path: '/courses',
        component: <Courses/>
    },
    {
        path: '/courses/create',
        component: <CourseCreation/>
    },
    {
        path: '/courses/edit/:id',
        component: <UpdateCourse/>
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
        path: '/profile',
        component: <LearnerProfile/>
    },
    {
        path: '/support',
        component: <Support/>
    },
    {
        path: '/profile',
        component: <UserProfile/>
    },

    {
        path: '/#',
        component: <PageNotFound/>
    }


]

export default routes;
