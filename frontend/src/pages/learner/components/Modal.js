import React, {useState} from 'react';

const MyModal = ({title, children, labelBtn}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={openModal} className="btn btn-sm btn-primary">
                {labelBtn}
            </button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold">{title}</h3>
                        <div className="modal-body">{children}</div>
                        <div className="modal-action">
                            <button className="btn" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MyModal;