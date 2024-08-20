import {useEffect, useState} from "react";
import axios from "axios";
import Filter from "../../../components/filter.js";
import {Link} from "react-router-dom";

const LearnerCourse = () => {
    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        try {
            const response = await axios.get('/api/courses');
            const data = response.data;
            setCourses(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getCourses();
    }, []);


    useEffect(() => {
    }, []);
    return (
        <>

            <div className="container mx-auto p-4">
                <div className={'flex justify-between items-center'}>
                    <div className={'flex-none mb-3'}>
                        <h1 className="text-3xl font-bold mb-4">Courses</h1>
                        <p className={'flex-0'}>Continue with your learning</p>
                    </div>
                    <Filter className={'input input-sm input-bordered'}
                            placeholder={'Search'}
                            onSearch={
                                (value) => {
                                    console.log(value);
                                }
                            }/>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courses.map((course, key) => (
                        <div key={key} className="flex flex-col md:flex-row bg-base-100 shadow-xl rounded-box">
                            <div className="w-full md:w-1/2">
                                <img src={course.image} alt={course.title} className="object-cover h-full"/>
                            </div>
                            <div className="w-full md:w-1/2 p-4">
                                <h2 className="card-title">{course.title}</h2>
                                <p>{course.description}</p>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/learner/my/courses/${course._id}`}>
                                        <button className="btn btn-primary">

                                            Start Learning

                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default LearnerCourse;