import React, {useState} from 'react';
import axios from 'axios';

const CreateCourse = () => {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: '',
        tags: '',
        badge: '',
    });
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        const {name, type, value, checked} = e.target;

        setFormData((prevFormData) => {
            if (type === 'checkbox') {
                return {...prevFormData, [name]: checked};
            }

            return {...prevFormData, [name]: value};
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataCopy = {...formData};
        try {
            if (selectedFile) {
                const data = new FormData();
                data.append('file', selectedFile);
                data.append('upload_preset', 'ml_default');
                const imageResponse = await axios.post(
                    `/image/upload`,
                    data
                );
                formDataCopy.image = imageResponse.data.url;
            }
            const response = await axios.post('/api/courses/create', formDataCopy);
            console.log(response.data);
            // Handle successful course creation
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageChange = (file) => {
        setSelectedFile(file);
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
                        accept="image/*"
                        onChange={(e) => handleImageChange(e.target.files[0])}
                    />
                    {selectedFile && (
                        <p className="text-sm text-gray-600">
                            Selected file: {selectedFile.name}
                        </p>
                    )}
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
                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                        Create Course
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateCourse;