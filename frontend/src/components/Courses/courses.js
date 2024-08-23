import {Link} from "react-router-dom";
import {lazy, useEffect, useState} from "react";
import axios from "axios";

const CourseCard = lazy(() => import("./CourseCard.js"));

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    useEffect(() => {
        const fetchCourses = async () => {
            setIsLoading(true);
            setCourses([]);
            try {
                const response = await axios.get('/api/courses');
                if (response.data) {
                    setIsLoading(false);
                    setCourses(response.data.courses);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchCourses();
    }, []);

    return (
        <>
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Explore Our Courses</h1>
                        <p className="py-6">
                            Find the perfect course for your learning journey.
                        </p>
                    </div>
                </div>
            </div>
            <div className={'divider'}/>
            <p className={'text-3xl font-bold p-4'}>Courses</p>
            <div
                className={'grid lg:grid-cols-4 md:grid-cols-3 place-items-center justify-between sm:grid-cols-2 xs:grid-cols-1 items-center p-4  mb-5 gap-4'}>
                {
                    courses.length > 0 ? (
                        courses.map((course) => (
                            <Link key={course._id} to={`/courses/${course._id}`} state={{courseData: course}}>
                                <CourseCard course={course}/>
                            </Link>
                        ))
                    ) : (
                        isLoading ? <span className={'loading loading-spinner items-center'}>Loading...</span> :
                            <p>No courses found</p>
                    )
                }
            </div>

        </>
    );
};

export default Courses;