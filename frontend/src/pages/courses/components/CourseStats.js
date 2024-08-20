import React from 'react';

const CourseInfo = ({title, description, tags}) => {
    return (
        <div className="stats  gap-2">
            <div className="stat">
                <div className="stat-value">{title}</div>
                <div className="stat-title">{description}</div>
                <div className="stat-desc badge badge-accent">{tags}</div>
                <div className="stat-actions flex gap-2">
                    <button className="btn btn-sm">View</button>
                    <button className="btn btn-sm btn-accent">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;