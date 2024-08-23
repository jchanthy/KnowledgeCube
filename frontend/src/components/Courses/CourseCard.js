import React from 'react';
import {CurrencyDollarIcon, StarIcon} from "@heroicons/react/24/outline/index.js";
import {Link} from "react-router-dom";

const CourseCard = ({course}) => {
    const {title, description, image, rating, metadata, price} = course;

    // Calculate average rating (assuming all ratings have a value)
    const averageRating = rating ? rating.reduce((acc, curr) => acc + curr, 0) / rating.length : 0;
    return (

        <>
            <div className="card card-compact bg-base-100  shadow-xl">
                <figure>

                    <img src={image} alt={title}/>

                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">

                            {price === 0 ? 'FREE' : 'PAID'}
                        </div>
                    </h2>
                    <p>{description}</p>

                    <span className="rating">
            <StarIcon className="h-5 w-5 text-yellow-500"/> {averageRating.toFixed(1)}
          </span>
                    <span className={'flex'}> <CurrencyDollarIcon
                        className="h-5 w-5 text-yellow-500"/>{course.price}</span>
                    <div className="flex justify-end">

                        {/* Loop through tags and display them */}
                        {metadata && metadata.tags && (
                            <div className="">
                                {metadata.tags.map((tag, key) => (
                                    <li className={'badge badge-primary gap-4 p-4 m-2'}
                                        key={key}>
                                        {tag.toString().toUpperCase()}
                                    </li>
                                ))}
                            </div>
                        )}

                    </div>
                </div>
                <div className={'divider'}/>
                <div className={'flex card-action justify-end p-4'}>
                    <button className={'btn btn-primary p-0 m-0'}>
                        <Link to={'/courses/enroll:' + course._id} state={{courseData: course}}>
                            Enroll Now
                        </Link>
                    </button>
                </div>
            </div>

        </>

    )
}


export default CourseCard;