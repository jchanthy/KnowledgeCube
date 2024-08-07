import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon.js";
import UserIcon from "@heroicons/react/24/solid/UserIcon";


const iconClasses = `h-6 w-6`;
const routes = [

    {
        path: '/dashboard',
        icon: <Squares2X2Icon className={iconClasses}/>,
        name: 'Home',
    },

    {
        path: '/learner/profile',
        icon: <UserIcon className={iconClasses}/>,
        name: 'Profile',
    },

];


export default routes;