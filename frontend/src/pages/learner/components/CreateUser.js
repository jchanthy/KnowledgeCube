import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const UserCreate = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await axios.post('/api/users/register', userData);
            console.log(response.data);

            // Handle successful user creation
            if (response.data) {
                navigate('/dashboard/users'); // Redirect to user list after creation
                setLoading(false);
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl p-10">
            <form className="form-control" onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold mb-4">Create a New User</h2>
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
                <div className="form-control">
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                        Create User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserCreate;