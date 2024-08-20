import HeartIcon from '@heroicons/react/24/outline/HeartIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import {useEffect, useState} from "react";
import axios from "axios";


function UserStats() {
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalCourses, setTotalCourses] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/users');
                if (response.data) {
                    setTotalUsers(response.data.total)
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/courses');
                console.log(response);
                if (response.data) {
                    setTotalCourses(response.data.total)
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])


    return (
        <div className="stats bg-base-100 shadow">

            <div className="stat">
                <div className="stat-figure invisible md:visible">
                    <HeartIcon className='w-8 h-8'/>
                </div>
                <div className="stat-title">Total Users</div>
                <div className="stat-value">{totalUsers}</div>
                <div className="stat-desc">total number of users</div>
            </div>

            <div className="stat">
                <div className="stat-figure invisible md:visible">
                    <BoltIcon className='w-8 h-8'/>
                </div>
                <div className="stat-title">Courses</div>
                <div className="stat-value">{totalCourses}</div>
                <div className="stat-desc">total number of courses</div>
            </div>
        </div>
    )
}

export default UserStats