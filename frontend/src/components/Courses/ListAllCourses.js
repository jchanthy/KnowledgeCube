import {lazy, useEffect, useState} from "react";
import axios from "axios";

const CourseCard = lazy(() => import("./CourseCard.js"));


const ListAllCourses = () => {
    const [courses, setCourses] = useState([]); // Initialize with empty array
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await axios.get('/api/courses');
            if (response.status === 200) {
                const data = await response.data;
                setIsLoading(false);
                setCourses(data); // Assuming API response structure
            }
        };
        fetchData();
    }, []); // Fetch data on component mount


    return (
        <>
            <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={'card w-full flex flex-col sm:flex-row bg-base-100'}>
                    {courses.length > 0 ? (
                        <div className={'flex flex-col gap-4'}>
                            {courses.map((course) => (
                                <CourseCard course={course}/>
                            ))}
                        </div>
                    ) : (
                        <p>{isLoading ? 'Loading...' : 'No courses available.'}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ListAllCourses;