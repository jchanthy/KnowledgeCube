import React, {useEffect} from 'react';
import {setPageTitle} from "../../components/headerSlice.js";
import {useDispatch} from "react-redux";

const CourseCreation = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({title: 'Course Creation'}))
    }, [dispatch]);

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                </div>
            </div>
        </>
    );
}

export default CourseCreation;
