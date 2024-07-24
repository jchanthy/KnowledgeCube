import DashboardTopBar from "./components/DashboardTopBar.js";
import {useDispatch} from "react-redux";
import LeftSidebar from "./leftSidebar.js";

const Dashboard = () => {

    const dispatch = useDispatch()


    return (
        <>

            <DashboardTopBar/>
            <LeftSidebar/>
        </>
    )
}
export default Dashboard;