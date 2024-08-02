import React, {useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'; // For form validation
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'; // For validation schema
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../../../services/UserContextProvider.js";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateUser = () => {
    const {user, token, updateUser} = useContext(UserContext);
    const navigate = useNavigate();

    const validateSchema = yup.object().shape({
        name: yup.string().min(3, 'Name should be at least 3 characters').required('Name is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        role: yup.string().required('Role is required'),
    });

    const {
        register,
        setValue,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(validateSchema),
    });

    const [loading, setLoading] = useState(false);
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState(user?.role || '');
    const [error, setError] = useState('');


    useEffect(() => {
        const getRole = async () => {
            try {
                const response = await axios.get('/api/roles');
                setRoles(response.data);
            } catch (error) {
                console.error('Error fetching roles:', error);
                setError(error);
            }
        };

        if (user) {
            setValue('name', user.name);
            setValue('email', user.email);
            setValue('role', selectedRole);
        }
        getRole();
    }, [user, setValue]);


    const handleProfileUpdate = async (value) => {
        try {
            setLoading(true);
            const updatedUserData = {
                name: value.name,
                email: value.email,
                role: value.role,
                password: value.password,
            };

            const response = await axios.put(`/api/users/update/${user._id}`, updatedUserData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success(response?.data?.message);
            // Update the user data in local storage
            updateUser({
                _id: user._id,
                name: value.name,
                email: value.email,
                role: value.role,
            });

            setLoading(false);
        } catch (err) {
            setLoading(false);
            if (err?.response?.data?.message === 'unAuthorized') {
                navigate('/');
            } else if (err?.response?.data?.message) {
                toast.error(err?.response?.data?.message);
            } else {
                toast.error('An error occurred!');
            }
        }
    };

    const roleOptions = roles?.map(role => (
        <option key={role._id} value={role._id}>{role.name}</option>
    ));


    return (
        <>
            <div className=" bg-base-200 w-full">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">

                    <form className="card-body" onSubmit={handleSubmit(handleProfileUpdate)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                id={"name"}
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
                                id={"email"}
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
                                <span className="label-text">Select Role</span>
                            </label>
                            <select className={"select select-primary w-full"}
                                    id="role"
                                    name={"role"}
                                    {...register('role')}
                                    value={selectedRole}
                                    onChange={e => setSelectedRole(e.target.value)}>
                                {roleOptions}
                            </select>
                            {errors.role && <p className="text-red-500">{errors.role.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                id={"password"}
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
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default UpdateUser;
