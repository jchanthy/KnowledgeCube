import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CourseDetail = ({match}) => {
    const [course, setCourse] = useState({});

    useEffect(() => {
        try {
            const response = axios.get(`/api/courses/${match.params.id}`);
            setCourse(response.data);
        } catch (error) {
            console.error('Error fetching course:', error);
        }

    }, [match.params.id]);

    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <p>Duration: {course.duration} hours</p>
            <p>Price: ${course.price}</p>
        </div>
    );
};

export default CourseDetail;