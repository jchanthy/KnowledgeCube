import React, {useRef, useState} from 'react';
import {PencilIcon} from "@heroicons/react/24/outline/index.js";

const Modal = ({title, children, onSave, onCancel}) => {


    const modalRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        if (modalRef.current) {
            modalRef.current.close();
        }
        onCancel && onCancel(); // Call optional onCancel callback
    };
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        // Perform form validation and data processing here
        // If validation passes, call onSave callback
        onSave && onSave();
        handleClose();
    };

    return (
        <>
            <div className={'flex-0'}>
                <button className={'btn btn-sm btn-outline flex-end'} onClick={handleOpen}>
                    <PencilIcon className={'w-3 h-3'}/>
                    Edit
                </button>
            </div>
            <dialog ref={modalRef} className="modal" open={isOpen}>
                <div className="modal-box flex-0 justify-between">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>✕
                    </button>
                    <div className={'divider w-full'}/>
                    <form method="dialog" onSubmit={handleSubmit}>
                        {children}
                        <div className={'divider w-vhs'}/>
                        <div className="modal-action">
                            <button type="submit" className="btn">Save</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default Modal;
