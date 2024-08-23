import React from 'react';
import {useNavigate} from "react-router-dom";
import CourseForm from "./CourseForm.js";

const CreateCourse = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    };

    return (
        <div>
            <CourseForm isEditing={false} back={back}/>
        </div>
    );
};

export default CreateCourse;