import {lazy} from "react";

const LearningPage = lazy(() => import("../../../pages/LearnerDashboard/components/LearningPage.js"));

const Support = lazy(() => import("../../../pages/Support/index.js"));
const Courses = lazy(() => import('../../../pages/LearnerDashboard/components/LearnerCourse.js'));
const PageNotFound = lazy(() => import('../../../components/pageNotFound.js'));
const Dashboard = lazy(() => import('../../../pages/learner/index.js'));
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
        path: '/learner/courses/:course_id',
        component: <LearningPage/>
    },
    {
        path: '/help',
        component: <Support/>
    },
    {
        path: '/*',
        component: <PageNotFound/>
    }
]


export default routes;