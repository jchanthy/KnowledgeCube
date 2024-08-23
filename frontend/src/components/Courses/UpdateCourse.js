import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UpdateCourse = ({courseId}) => {

    console.log(courseId);

    const [courseData, setCourseData] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await axios.get(`/api/courses/${courseId}`);
                if (response.data) {
                    console.log(response.data);
                    setCourseData(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCourseData();
    }, [courseId]);

    const handleChange = (e) => {
        setCourseData({...courseData, [e.target.name]: e.target.value});
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();

        if (!courseData || !courseData.title || !courseData.description || !courseData.tags || !courseData.badge) {
            console.log('Missing required fields.');
            return;
        }
        formData.append('title', courseData.title);
        formData.append('description', courseData.description);
        formData.append('tags', JSON.stringify(courseData.tags)); // Convert tags array to string
        formData.append('badge', courseData.badge);
        if (imageFile && imageFile.size > 0) {
            formData.append('image', imageFile);
        }

        try {
            const response = await axios.put(`/api/courses/${courseId}`, formData);

            console.log(response.data);
            // Handle successful course update
            setCourseData(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={'card bg-base-100 shadow-xl p-10'}>
            <form className="form-control" onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold mb-4">Update Course</h2>
                <div className="form-control mb-4">
                    <label className="label">Title</label>
                    <input
                        className="input input-primary w-full"
                        id="title"
                        type="text"
                        name={'title'}
                        placeholder="Enter course title"
                        value={courseData ? courseData.title : ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4 form-control">
                    <label className="label">Image URL</label>
                    <input
                        className={'file-input file-input-bordered file-input-primary w-full max-w-xs'}
                        id="image"
                        type="file"
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
                        value={courseData ? courseData.description : ''}
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
                        value={courseData ? courseData.tags : ''}
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
                        value={courseData ? courseData.badge : ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <button className="btn btn-primary" type="submit" onClick={handleSubmit} disabled={loading}>
                        Update Course
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCourse;