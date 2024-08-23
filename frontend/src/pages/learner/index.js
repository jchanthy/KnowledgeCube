import {useEffect, useState} from "react";
import axios from "axios";

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('/api/courses');
                if (response.data) {
                    setIsLoading(false);
                    const data = response.data.total;
                    setCourses(data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchCourses();
    }, []);
    return (
        <>
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <span className="text-3xl font-bold">Learner Dashboard</span>
            </div>

            <div className={'p-4 grid grid-cols-8 sm:grid-cols-2 gap-4'}>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Course</div>
                        <div className="stat-value">{isLoading ?
                            <p className={'loading loading-spinner'}/> : courses}</div>
                        <div className="stat-desc">total courses</div>
                    </div>
                </div>


                <div className="stats shadow w-1/2  items-center">
                    <div className="stat items-center justify-center">
                        <label className="flex stat-title mb-4">Learning Progress</label>
                        <div className="radial-progress text-primary justify-center" style={{"--value": 100}}
                             role="progressbar">
                            100%
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Course;