import React, {useEffect, useState} from 'react';
import axios from 'axios';

const JobDetail = ({jobId}) => {
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(`/api/jobs/${jobId}`);
                setJob(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchJob();
    }, [jobId]);

    const handleApply = () => {
        // Implement application logic, e.g., sending an email
        console.log('Applying for job:', jobId);
    };

    return (
        <div className="card w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{job?.title}</h2>
                <p>{job?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleApply}>Apply</button>
                </div>
            </div>
            <div className="card-body">
                {/* Display requirements here */}
                <h3 className="card-title">Requirements</h3>
                {/* ... */}
            </div>
        </div>
    );
};

export default JobDetail;