import React from 'react';
import {StarIcon} from "@heroicons/react/24/outline/index.js";

const CourseCard = ({course}) => {
    const {title, description, imageUrl, price, rating, metadata} = course;

    // Calculate average rating (assuming all ratings have a value)
    const averageRating = rating ? rating.reduce((acc, curr) => acc + curr, 0) / rating.length : 0;
    return (

        <>
            <div className="card bg-base-100 gap-4 m-4 shadow-xl">
                <figure>

                    <img src={imageUrl} alt={title} className="course-card-image"/>

                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <span className="price">
            ${price.toFixed(2)}
          </span>
                    <span className="rating">
            <StarIcon className="h-5 w-5 text-yellow-500"/> {averageRating.toFixed(1)}
          </span>
                    <div className="card-actions justify-end">
                        <div className="">
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
                </div>
            </div>

        </>

    )
}


export default CourseCard;