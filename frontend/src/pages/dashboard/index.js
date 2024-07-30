import DashboardStats from './components/DashboardStats.js'
import AmountStats from './components/AmountStats.js'
import PageStats from './components/PageStats.js'

import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import UserChannels from './components/UserChannels.js'
import LineChart from './components/LineChart.js'
import BarChart from './components/BarChart.js'
import DashboardTopBar from './components/DashboardTopBar.js'
import DoughnutChart from './components/DoughnutChart.js'

const statsData = [
    {title: "New Users", value: "34.7k", icon: <UserGroupIcon className='w-8 h-8'/>, description: "↗︎ 2300 (22%)"},
    {title: "Total Sales", value: "$34,545", icon: <CreditCardIcon className='w-8 h-8'/>, description: "Current month"},
    {
        title: "Pending Leads",
        value: "450",
        icon: <CircleStackIcon className='w-8 h-8'/>,
        description: "50 in hot leads"
    },
    {title: "Active Users", value: "5.6k", icon: <UsersIcon className='w-8 h-8'/>, description: "↙ 300 (18%)"},
]


const Dashboard = () => {

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
    }

    return (
        <>
            {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>

            {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>


            {/** ---------------------- Different charts ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart/>
                <BarChart/>
            </div>

            {/** ---------------------- Different stats content 2 ------------------------- */}

            <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStats/>
                <PageStats/>
            </div>

            {/** ---------------------- User source channels table  ------------------------- */}

            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannels/>
                <DoughnutChart/>
            </div>
        </>
    )
}

export default Dashboard