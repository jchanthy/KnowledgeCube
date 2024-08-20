import {lazy} from "react";

const Courses = lazy(() => import("./components/Courses.js"));

const Course = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <Courses/>
            </div>

        </>
    )
}
export default Course;