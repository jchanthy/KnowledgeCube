import {lazy} from "react";


const routes = [

    {
        path: '/',
        component: lazy(() => import('../../../pages/LearnerDashboard/index.js')),
    },
    {
        path: '/profile',
        component: lazy(() => import('../../../features/settings/profilesettings/updateProfile/index.js')),
    },
    {
        path: '/my/courses',
        component: lazy(() => import('../../../pages/LearnerDashboard/components/LearnerCourse.js')),
    },
    {
        path: '/*',
        component: lazy(() => import('../../../components/pageNotFound.js')),
    }
]


export default routes;