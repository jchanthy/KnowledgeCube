import DashboardTopBar from './components/DashboardTopBar.js'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setPageTitle} from "../../components/headerSlice.js";
import UserStats from "./components/UserStats.js";

const Dashboard = () => {

    const dispatch = useDispatch()

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
    }

    useEffect(() => {
        dispatch(setPageTitle({title: 'Dashboard'}))
    }, [dispatch]);

    return (
        <>
            {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>
            <div className={'grid grid-cols-3 gap-4'}>

                <div className={'col-span-2'}>
                    {/** ---------------------- Page Stats Content ------------------------- */}
                    <UserStats/>
                </div>

            </div>
        </>
    )
}

export default Dashboard