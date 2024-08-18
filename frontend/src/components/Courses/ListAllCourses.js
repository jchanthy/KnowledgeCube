import {useEffect, useState} from "react";
import axios from "axios";
import CourseCard from "./CourseCard.js";


const ListAllCourses = () => {
    const [courses, setCourses] = useState([]); // Initialize with empty array

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/courses');

            const data = await response.data;

            console.log(data);
            setCourses(data); // Assuming API response structure

        };
        fetchData();
    }, []); // Fetch data on component mount


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className={'card w-full flex flex-col sm:flex-row bg-base-100'}>
                    {courses && courses.length > 0 ? (
                        <div className={'flex flex-col gap-4'}>
                            {courses.map((course) => (
                                <CourseCard course={course}/>
                            ))}
                        </div>
                    ) : (
                        <p>No courses available.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ListAllCourses;