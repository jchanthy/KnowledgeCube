import {lazy} from "react";


const Dashboard = lazy(() => import('../pages/protected/Dashboard.js'));
const Welcome = lazy(() => import('../pages/protected/Welcome.js'))
const Page404 = lazy(() => import('../pages/protected/404.js'))

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/welcome',
        component: Welcome
    },
    {
        path: '404',
        component: Page404
    }

]


export default routes;
