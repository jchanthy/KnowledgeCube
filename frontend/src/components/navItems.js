/** Icons are imported separatly to reduce build time */
import {AcademicCapIcon, BriefcaseIcon, HomeIcon} from "@heroicons/react/24/solid/index.js";

const iconClasses = `h-5 w-5`
const submenuIconClasses = `h-5 w-5`

const routes = [

    {
        path: '/',
        icon: <HomeIcon className={iconClasses}/>,
        name: 'Home',
    },
    {
        path: '/courses', // url
        icon: <AcademicCapIcon className={iconClasses}/>, // icon component
        name: 'Courses', // name that appear in Sidebar
    },
    {
        path: '/jobs', // url
        icon: <BriefcaseIcon className={iconClasses}/>, // icon component
        name: 'Jobs', // name that appear in Sidebar
    },


]

export default routes


