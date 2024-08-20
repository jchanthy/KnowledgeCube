import {useEffect, useState} from "react";
import {setPageTitle} from "../../../components/headerSlice.js";
import {useDispatch} from "react-redux";
import axios from "axios";
import CourseStats from "./CourseStats.js";

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({title: 'Courses'}))
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/courses');
                if (response.data) {
                    setCourses(response.data.courses);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="stat stats-vertical bg-base-100 shadow rounded-box">
                <div className={'text-3xl font-bold'}>Courses</div>
                {
                    courses.map((course, index) => {
                        return (
                            <CourseStats key={index} {...course}/>
                        )
                    })
                }
            </div>
        </>
    )

}

export default Courses;