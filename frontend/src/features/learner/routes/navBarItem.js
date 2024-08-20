import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon.js";
import {AcademicCapIcon, CalendarIcon} from "@heroicons/react/24/outline/index.js";


const iconClasses = `h-6 w-6`;
const routes = [
    {
        path: '/learner/dashboard',
        icon: <Squares2X2Icon className={iconClasses}/>,
        name: 'Home',
    },
    {
        path: '/learner/my/courses',
        icon: <AcademicCapIcon className={iconClasses}/>,
        name: 'Courses',
    },
    {
        path: '/learner/sessions',
        icon: <CalendarIcon className={iconClasses}/>,
        name: 'Calendar',
    },


]


export default routes;