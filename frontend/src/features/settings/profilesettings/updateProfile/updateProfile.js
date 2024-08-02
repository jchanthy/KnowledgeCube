import React, {useState} from 'react';
import {useForm} from 'react-hook-form'; // For form validation
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'; // For validation schema
import axios from 'axios';

const UpdateUserForm = () => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters'),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file))
        } else {
            setImage(image);
        }
    };

    const uploadImageProfile = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            const response = await axios.post('/api/usersi', formData);
            console.log(response.data);
            // You can handle the response data here
        } catch (error) {
            console.error(error);
            // Handle the error here
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('image', image);

            const response = await axios.put('/api/users/update', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data); // Handle successful update
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }

        if (image) {
            await uploadImageProfile();
        }
    };


    return (
        <>
            <div className=" bg-base-200 w-full">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">

                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className={'flex items-center justify-between '}>
                            <div className="avatar w-32">
                                <div className="w- rounded-full">
                                    <img className={'profile image'}
                                         src={image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                         alt={'image'}/>
                                </div>
                            </div>
                            <input
                                type="file" onChange={handleImageChange}
                                accept={"image/*"}
                                className="file-input file-input-bordered rounded  file-input-primary w-full max-w-xs"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                name="name"
                                placeholder="Full Name"
                                className="input input-bordered"
                                {...register('name')}
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register('email')}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password (Leave blank to keep the same)</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register('password')}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">
                                {loading ? <span className="loading loading-spinner loading-xs"/> : 'Update'}
                            </button>
                        </div>
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateUserForm;
