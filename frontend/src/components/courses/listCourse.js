import Header from "../header.js";
import {NavLink} from "react-router-dom";

const ListCourse = () => {
    const course = [
        {
            id: 1,
            title: "Course 1",
            description: "Description 1",
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        },
        {
            id: 2,
            title: "Course 2",
            description: "Description 2",
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        },
        {
            id: 3,
            title: "Course 3",
            description: "Description 3",
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        },
        {
            id: 4,
            title: "Course 4",
            description: "Description 4",
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        },
    ];
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Browse our Courses</h1>
                        <p className="py-6">
                            Keep your skills up-to-date with access to hundreds of the latest
                            courses across Data Science, Machine Learning, DevOps, Cyber
                            Security, Full Stack Development, and People and Process
                            Certifications.
                        </p>
                        <button className="btn btn-primary">
                            <NavLink to={'/courses'}>Explore Courses</NavLink>
                        </button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 content-center px-8">
                {course.map((course) => (
                    <div className="card card-normal bg-base-100 w-auto shadow-xl">
                        <figure>
                            <img src={course.image} alt={course.alt}/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.title}</h2>
                            <p>{course.description}</p>
                            <div className="card-actions justify-end">
                                <a className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListCourse;
