import {useEffect, useState} from "react";
import axios from "axios";
import Filter from "../../../components/filter.js";
import {Link} from "react-router-dom";

const LearnerCourse = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCourses = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('/api/courses');
            if (response.data) {
                setIsLoading(false);
                const data = response.data.courses;
                setCourses(data);
            }

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getCourses();
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
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
                    {courses.length > 0 ? (
                        isLoading ? (
                            <p className={'loading loading-spinner'}/>
                        ) : (
                            courses.map((course, key) => (
                                <div key={key}
                                     className="flex flex-cols-2 md:flex-row bg-base-100 shadow-xl rounded-box sm:w-full md:1/2 lg:w-1/2">
                                    <div className="w-full md:w-1/2">
                                        <img src={course.image} alt={course.title}
                                             className="object-cover object-center mask-square h-full w-64"/>
                                    </div>
                                    <div className="w-full md:w-1/2 p-4 lg:w-1/2">
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
                            ))
                        )
                    ) : <p>No courses found</p>}
                </div>
            </div>
        </>
    )
}
export default LearnerCourse;