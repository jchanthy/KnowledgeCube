import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import CourseStats from "./CourseInfo.js";
import {setPageTitle} from "../../../components/headerSlice.js";
import {useNavigate} from "react-router-dom";


const Courses = () => {
    const {pageTitle} = useSelector((state) => state.header);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPageTitle({title: 'Courses'}))
    }, [dispatch]);
    const [courses, setCourses] = useState([]);

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
            <div className="card bg-base-100 shadow rounded-box p-4">
                <div className={'flex justify-between items-center'}>
                    <div className={'text-3xl font-bold'}>{pageTitle}</div>
                    <div className={''}>
                        <button className={'btn btn-sm btn-primary'}
                                onClick={() => navigate("/admin/dashboard/courses/create")}
                        >Create Course
                        </button>
                    </div>
                </div>
                {
                    courses.map((course) => (
                        <CourseStats key={course._id} {...course} course={course}/>
                    ))
                }
            </div>
        </>
    )

}

export default Courses;