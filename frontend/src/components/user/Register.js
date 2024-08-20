import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
    const navigate = useNavigate();
    const inputRef = React.createRef();
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const userData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            };

            const response = await axios.post('/api/users/register', userData);
            setLoading(false);
            if (response.data.message === 'User registered successfully') {
                navigate('/login');
            } else if (response.data.message === 'Request failed with status code 400') {
                setError(response.data.message);
            }
        } catch (error) {
            setLoading(false);
            console.error('Register failed:', error);
            setError(`${error.response.data.message}`);
        }
    };

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div>
                            <Link to={'/'} className={'link link-success'}>{'Back to home page'}</Link>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="input input-primary input-bordered"
                                    value={formData.name}
                                    name="name"
                                    onChange={handleChange}
                                    ref={inputRef}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-primary input-bordered"
                                    value={formData.email}
                                    name="email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    value={formData.password}
                                    name="password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    Register
                                </button>
                            </div>
                            {error && <div className="text-red-500 text-center mt-4">{error}</div>}
                            <div className="text-center mt-4">
                                Already have an account?
                                <Link to="/login" className="link-primary link">
      <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
        Login
      </span>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;
