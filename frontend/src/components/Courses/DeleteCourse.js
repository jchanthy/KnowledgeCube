import React, {useRef, useState} from 'react';
import axios from "axios";

const DeleteCourse = ({courseId}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalRef = useRef(null);

    const handleOpen = () => {
        setIsModalOpen(true);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };
    const handleClose = () => {
        setIsModalOpen(false);
        if (modalRef.current) {
            modalRef.current.close();
        }
    }
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/api/courses/${courseId}`);
            if (response.status === 200) {
                setIsModalOpen(false)
                window.location.reload();
            } else {
                console.error('Error deleting user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <button className="btn btn-sm btn-accent" onClick={handleOpen}>
                Delete
            </button>
            {isModalOpen && (
                <dialog ref={modalRef} open={isModalOpen}>
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">Are you sure you want to delete this course?</h3>
                        <p className="py-4">This action cannot be undone.</p>
                        <div className="modal-action">
                            <button className="btn btn-outline btn-sm " onClick={handleClose}>
                                Cancel
                            </button>
                            <button className="btn btn-accent btn-sm" onClick={handleDelete}>
                                Okay
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default DeleteCourse;