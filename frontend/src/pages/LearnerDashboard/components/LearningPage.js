import React from 'react';

const LearningPage = ({courseData}) => {
    const {title, courseName, lesson, module, progress} = courseData;

    return (
        <div className="card w-full bg-base-100 shadow-xl mt-5 p-4">
            <h2>{title}</h2>
            <p>Course: {courseName}</p>
            <p>Lesson: {lesson}</p>
            <p>Module: {module}</p>
            <p>Progress: {progress}%</p>
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{width: `${progress}%`}}
                >
                    {progress}
                </div>
            </div>
        </div>
    );
};

export default LearningPage;