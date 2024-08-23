// CourseDetail.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useLocation} from "react-router-dom";

const CourseDetail = () => {
    const location = useLocation();
    const courseData = location.state?.courseData;

    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`/api/courses/${courseData.id}`);
                const data = response.data;

                if (data && data.courses) {
                    setCourse(data.courses);
                } else {
                    setError('No course data found');
                }
            } catch (error) {
                setError(`Error fetching course: ${error.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourse();
    }, [courseData.id]);


    if (!courseData) {
        return <div>No course data found</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!course) {
        return <div>No course data available</div>;
    }

    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
        </div>
    );
};

export default CourseDetail;