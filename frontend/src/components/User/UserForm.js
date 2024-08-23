import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const UserForm = ({userId, initialData = {}, onSubmit, onClose}) => {
    const [userData, setUserData] = useState(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }
    useEffect(() => {
        setUserData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const method = userId ? 'put' : 'post';
            const url = userId ? `/api/users/update/${userId}` : '/api/users/register';
            const response = await axios[method](url, userData);
            if (response.message === 'User updated successfully') {
                onSubmit(response.data);
            }
            back();
        } catch (error) {
            console.error('Error', userId ? 'updating' : 'creating', 'user:', error);
            setIsSubmitting(false);
        }
    };

    return (

        <div className={'card bg-base-100 shadow-xl p-4'}>
            <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold mb-4">{userId ? 'Update' : 'Create'} User</h2>
                <div className="form-control mb-4">
                    <label className="label">Name</label>
                    <input
                        className="input input-primary w-full"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter full name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control mb-4">
                    <label className="label">Email</label>
                    <input
                        className="input input-primary w-full"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                {!userId && (
                    <>
                        <div className="form-control mb-4">
                            <label className="label">Password</label>
                            <input
                                className="input input-primary w-full"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={userData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">Confirm Password</label>
                            <input
                                className="input input-primary w-full"
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={userData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}

                <div className={'flex gap-4'}>
                    <button className={'btn btn-primary btn-sm'} type="submit" disabled={isSubmitting}>
                        {userId ? 'Update User' : 'Create User'}
                    </button>
                    <button className={'btn btn-ghost btn-sm'} type="button" onClick={back}>
                        Cancel
                    </button>
                </div>

            </form>
        </div>

    );
};

export default UserForm;