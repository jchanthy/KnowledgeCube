import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
                const jobs = response.data.jobs;

                setJobs(jobs.slice().reverse()); // Reverse the order of the jobs array ? response.data.jobs : []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            {jobs.map((job, key) => (
                <div key={key}
                     className="flex flex-row justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                        <h2 className="text-lg font-bold">{job.title}</h2>
                        <p className="text-gray-600">{job.description}</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="btn btn-primary" onClick={() => handleOpenModal(job)}>View Details</button>
                    </div>
                </div>
            ))}

            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-4 w-1/2">
                        <h2 className="text-lg font-bold">{selectedJob.title}</h2>
                        <p className="text-gray-600">{selectedJob.description}</p>
                        <p className="text-gray-600">Location: {selectedJob.location}</p>
                        <p className="text-gray-600">Type: {selectedJob.type}</p>
                        <button className="btn btn-primary" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobList;