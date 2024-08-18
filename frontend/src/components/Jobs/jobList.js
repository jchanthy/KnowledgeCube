import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from "../modal.js";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = (job) => {
        setSelectedJob(job);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/jobs'); // Replace with your API endpoint

                console.log(response.data.jobs);
                setJobs(response.data.jobs ? response.data.jobs : []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                jobs.map((job, key) => (
                    <div key={key} className="card bg-base-100 shadow-xl">
                        <div className={'card-body'}>
                            <div className={'card-title'}>{job.title}</div>
                            <div className={'card-body'}>{job.description}</div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => handleOpenModal(job)}>View Details
                                </button>
                            </div>

                            {/*    Modal */}
                            {isOpen && (
                                <Modal className={'modal'} isOpen={isOpen} onClose={handleCloseModal}>
                                    <div className="modal-content">
                                        <h2 className="modal-title">{selectedJob.title}</h2>
                                        <p className="modal-description">{selectedJob.description}</p>
                                    </div>
                                </Modal>
                            )}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default JobList;