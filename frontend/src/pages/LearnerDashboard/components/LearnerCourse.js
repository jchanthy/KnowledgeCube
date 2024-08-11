import {useSelector} from "react-redux";

const LearnerCourse = () => {
    const enrolledCourses = useSelector((state) => state.auth.user.enrolledCourses);
    const courses = useSelector((state) =>
        state.courses.filter((course) => enrolledCourses.includes(course.id))
    );
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Courses</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map((course) => (
                        <div key={course.id} className="card w-full flex flex-col sm:flex-row bg-base-100 shadow-xl">
                            <figure>
                                <img src={course.image} alt={course.title}/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.title}</h2>

                                <p>{course.description}</p>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">

                                        Start Learning

                                    </button>
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