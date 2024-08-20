import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const CourseCreate = () => {
    const [loading, setLoading] = useState(false);

    const fileInputRef = React.createRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: '',
        badge: '',
        image: null,
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFileChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFormData({...formData, image: reader.result});
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const formDataToSend = new FormData();

        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('tags', formData.tags);
        formDataToSend.append('badge', formData.badge);
        formDataToSend.append('image', formData.image);

        try {
            const response = await axios.post('/api/courses/create', formDataToSend);
            console.log(response.data);
            // Handle successful course creation
            navigate('/course-creation');
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={'card bg-base-100 shadow-xl p-10'}>
            <form className="form-control" onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold mb-4">Create a New Course</h2>
                <div className="form-control mb-4">
                    <label className="lablel">Title</label>
                    <input
                        className="input input-primary w-full"
                        id="title"
                        type="text"
                        name={'title'}
                        placeholder="Enter course title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4 form-control">
                    <label className="lablel">Image URL</label>
                    <input
                        className={'file-input file-input-bordered file-input-primary w-full max-w-xs'}
                        id="image"
                        type="file"
                        ref={fileInputRef}
                        name={'image'}
                        accept="image/*"
                        multiple={true}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="mb-4 form-control">
                    <label className="label">Description</label>
                    <textarea
                        className="input input-primary"
                        id="description"
                        placeholder="Enter course description"
                        value={formData.description}
                        name={'description'}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="mb-4 form-control">
                    <label className="label">Tags</label>
                    <input
                        className="input input-primary"
                        id="tags"
                        type="text"
                        name={'tags'}
                        placeholder="Enter tags (comma separated)"
                        value={formData.tags}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="label block text-gray-700 text-sm font-bold mb-2" htmlFor="badge">
                        Badge
                    </label>
                    <input
                        className="input input-primary shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="badge"
                        type="text"
                        name={'badge'}
                        placeholder="Enter badge"
                        value={formData.badge}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <button className="btn btn-primary" type="submit" onClick={handleSubmit} disabled={loading}>
                        Create Course
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CourseCreate;