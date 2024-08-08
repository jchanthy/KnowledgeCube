import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon.js";
import {AcademicCapIcon, CalendarIcon} from "@heroicons/react/24/solid/index.js";


const iconClasses = `h-6 w-6`;
const routes = [
    {
        path: '/dashboard',
        icon: <Squares2X2Icon className={iconClasses}/>,
        name: 'Dashboard',
    },
    {
        path: '/my/courses',
        icon: <AcademicCapIcon className={iconClasses}/>,
        name: 'Courses',
    },
    {
        path: '/sessions',
        icon: <CalendarIcon className={iconClasses}/>,
        name: 'Dashboard',
    },


]


export default routes;