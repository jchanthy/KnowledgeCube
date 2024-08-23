/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import {AcademicCapIcon, BookOpenIcon, PresentationChartLineIcon} from "@heroicons/react/24/outline/index.js";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

    {
        path: '/admin/dashboard',
        icon: <Squares2X2Icon className={iconClasses}/>,
        name: 'Dashboard',
    },
    {
        path: '/admin/dashboard/users',
        icon: <UsersIcon className={`${iconClasses} inline`}/>, // icon component
        name: 'Users',
    },

    {
        path: '/admin/dashboard/courses', //no url needed as this has submenu
        icon: <AcademicCapIcon className={`${iconClasses} inline`}/>, // icon component
        name: 'Courses', // name that appear in Sidebar
    },
    {
        path: '/admin/dashboard/contents', //no url needed as this has submenu
        icon: <BookOpenIcon className={`${iconClasses} inline`}/>, // icon component
        name: 'Contents', // name that appear in Sidebar
    },

    {
        path: '/dashboard/analytics', //no url needed as this has submenu
        icon: <PresentationChartLineIcon className={`${iconClasses} inline`}/>, // icon component
        name: 'Analytics', // name that appear in Sidebar
    },


]

export default routes

