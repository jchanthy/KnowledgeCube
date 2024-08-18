import React, {useState} from 'react';
import axios from 'axios';

const CreateJob = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        salary: '',
        category: '',
        company: '',
        contact: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/jobs', formData);
            console.log(response.data);
            // Handle successful job creation
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="card w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Create a Job</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Job Title" className="input input-bordered"
                                   value={formData.title} onChange={handleChange}/>
                        </div>
                        {/* Other form fields for description, location, salary, etc. */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="descripton" placeholder="Job Description" className="input input-bordered"
                                      value={formData.description} onChange={handleChange}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Job Title" className="input input-bordered"
                                   value={formData.location} onChange={handleChange}/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateJob;