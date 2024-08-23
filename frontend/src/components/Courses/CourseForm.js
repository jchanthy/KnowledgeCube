import React, {useState} from 'react';
import axios from 'axios';

const CourseForm = ({isEditing, course, back}) => {
    const [imageBase64, setImageBase64] = useState(null);
    const [formData, setFormData] = useState({
        title: isEditing ? course.title : '',
        description: isEditing ? course.description : '',
        tags: isEditing ? (course.tags ? course.tags.map(tag => tag.name).join(',') : '') : '',
        badge: isEditing ? course.badge : '',
        image: isEditing ? course.image : null,
    });
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({...formData, image: file});
        const reader = new FileReader();
        reader.onload = () => {
            setImageBase64(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (e) => {
        if (isEditing) {
            if (e.target.name === 'title') {
                setFormData({...formData, title: e.target.value});
            } else if (e.target.name === 'description') {
                setFormData({...formData, description: e.target.value});
            } else if (e.target.name === 'tags') {
                const tags = e.target.value.split(',').map(tag => tag.trim());
                setFormData({...formData, tags});
            } else if (e.target.name === 'badge') {
                setFormData({...formData, badge: e.target.value});
            }
        } else {
            if (e.target.name === 'tags') {
                const tags = e.target.value.split(',').map(tag => tag.trim());
                setFormData({...formData, tags});
            } else {
                setFormData({...formData, [e.target.name]: e.target.value});
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const formDataToSend = new FormData();

        if (isEditing) {
            if (formData.title) {
                formDataToSend.append('title', formData.title);
            }
            if (formData.description) {
                formDataToSend.append('description', formData.description);
            }
            if (formData.tags) {
                formDataToSend.append('tags', formData.tags.join(','));
            }
            if (formData.badge) {
                formDataToSend.append('badge', formData.badge);
            }
            if (imageBase64) {
                formDataToSend.append('image', imageBase64);
            }
        } else {
            formDataToSend.append('title', formData.title);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('tags', formData.tags.join(','));
            formDataToSend.append('badge', formData.badge);
            formDataToSend.append('image', imageBase64);
        }

        try {
            const method = isEditing ? 'put' : 'post';
            const url = isEditing ? `/api/courses/edit/${course._id}` : '/api/courses/create';
            const response = await axios[method](url, formDataToSend);
            if (response.data) {
                setLoading(false);
                back();
            } else {
                console.error('Error creating course');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={'card bg-base-100 shadow-xl p-10'}>
            <form className="form-control" onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold mb-4">{isEditing ? 'Edit Course' : 'Create a New Course'}</h2>
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
                <div className="form-control mb-4">
                    <label className="lablel">Description</label>
                    <textarea
                        className="input input-primary"
                        id="description"
                        placeholder="Enter course description"
                        value={formData.description}
                        name={'description'}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control mb-4">
                    <label className="lablel">Tags</label>
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
                <div className="form-control mb-4">
                    <label className="lablel">Badge</label>
                    <input
                        className="input      input-primary"
                        id="badge"
                        type="text"
                        name={'badge'}
                        placeholder="Enter badge"
                        value={formData.badge}
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
                <div className="form-control mt-6">
                    <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CourseForm;