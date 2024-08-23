import React, {useRef, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const CourseInfo = ({onDelete, course}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const modalRef = useRef(null);
    const navigate = useNavigate();

    const courseId = course._id;
    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const handleEdit = () => {
        navigate(`/admin/dashboard/courses/edit/${courseId}`, {state: {courseData: course}});
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/api/courses/${course._id}`);
            if (response.status === 200) {
                onDelete();
                setIsModalOpen(false);
            } else {
                console.error('Error deleting course');
            }
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    return (
        <div className="stats bg-base-200 mb-2 mt-4 ">
            <div className="stat">
                <div className="stat-value">{course.title}</div>
                <div className="stat-title">{course.description}</div>
                <div className="stat-desc badge badge-accent">{course.tags}</div>
                <div className="stat-actions flex gap-2">
                    <button className={'btn btn-ghost btn-sm'} onClick={handleEdit}>
                        Edit
                    </button>
                    <button className="btn btn-sm btn-ghost" onClick={handleOpen}>
                        Delete
                    </button>
                </div>
                {isModalOpen && (
                    <dialog className="modal" ref={modalRef} open={isModalOpen}>
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Attention!</h3>
                            <p className="py-4">Are you sure to delete this course?</p>
                            <div className="modal-action gap-2">
                                <button className="btn btn-sm" onClick={handleClose}>
                                    Close
                                </button>
                                <button className="btn btn-accent btn-sm" onClick={handleDelete}>
                                    Okay
                                </button>
                            </div>
                        </div>
                    </dialog>
                )}
            </div>
        </div>
    );
};

export default CourseInfo;