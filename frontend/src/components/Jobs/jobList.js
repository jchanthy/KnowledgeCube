import React, {useEffect, useState} from 'react';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleOpenModal = (job) => {
        setSelectedJob(job);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        const fetchJobs = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('/api/jobs'); // Replace with your API endpoint
                if (response.status === 200) {
                    setIsLoading(false);
                    const jobs = response.data.jobs;
                    setJobs(jobs.slice().reverse()); // Reverse the order of the jobs array ? response.data.jobs : []);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-4">
            {jobs.length === 0 ? (
                <p>No jobs found.</p>
            ) : isLoading ? (
                <span className={'loading loading-spinner'}>Loading...</span>
            ) : (
                jobs.map((job, key) => (
                    <div key={key}
                         className="flex flex-row justify-between items-center p-4 border border-gray-200 rounded-lg">
                        <div className="flex-1">
                            <h2 className="text-lg font-bold">{job.title}</h2>
                            <p className="text-gray-600">{job.description}</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="btn btn-primary" onClick={() => handleOpenModal(job)}>View Details
                            </button>
                        </div>
                    </div>
                ))
            )}

            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-4 w-1/2">
                        <h2 className="text-lg font-bold">{selectedJob.title}</h2>
                        <p className="text-gray-600">{selectedJob.description}</p>
                        <p className="text-gray-600">Location: {selectedJob.location}</p>
                        <p className="text-gray-600">Type: {selectedJob.type}</p>
                        <div className={'flex gap-4 p-4'}>
                            <button className="btn btn-outline btn-sm" onClick={handleCloseModal}>Close</button>
                            <button className="btn btn-primary btn-sm" onClick={handleCloseModal}>Apply Job</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobList;