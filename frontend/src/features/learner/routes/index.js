import {lazy} from "react";

const Courses = lazy(() => import('../../../pages/LearnerDashboard/components/LearnerCourse.js'));
const PageNotFound = lazy(() => import('../../../components/pageNotFound.js'));
const Dashboard = lazy(() => import('../../../pages/dashboard/index.js'));
const LearnerProfile = lazy(() => import('../../../pages/LearnerDashboard/components/LearnerProfile.js'));
const routes = [

    {
        path: '/',
        component: <Dashboard/>
    },

    {
        path: '/dashboard',
        component: <Dashboard/>
    },
    {
        path: '/profile',
        component: <LearnerProfile/>
    },
    {
        path: '/my/courses',
        component: <Courses/>
    },
    {
        path: '/*',
        component: <PageNotFound/>
    }
]


export default routes;