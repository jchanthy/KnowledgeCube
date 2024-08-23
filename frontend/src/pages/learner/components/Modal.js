import {useRef, useState} from "react";

const Modal = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const modalRef = useRef(null);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <button className={'btn btn-outline'} onClick={openModal}>
                Edit
            </button>
            {isOpen
                && (
                    <dialog ref={modalRef} className="modal" open={isOpen}>
                        <div className="modal-box">
                            <div className="modal-body">{children}</div>
                        </div>
                    </dialog>
                )}
        </>
    );
};

export default Modal;