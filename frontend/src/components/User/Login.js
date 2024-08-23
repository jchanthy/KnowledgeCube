import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {UserContext} from "../../services/UserContextProvider.js";
import axios from "axios";

const LoginPage = () => {
    const {login} = useContext(UserContext);
    const navigate = useNavigate();
    const inputRef = React.createRef();
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const [formData, setFormData] = useState({
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
                email: formData.email,
                password: formData.password,
            };
            const response = await axios.post('/api/users/login', userData);

            setLoading(false)
            if (response.status === 200) {
                login(response.data.user, response.data.token);
            } else {
                console.error('Invalid response:', response);
                setLoading(false);
                setError('Invalid response from server');
            }
        } catch (error) {
            setLoading(false);
            console.error('Login failed:', error);
            setError(`${error.response.data.message}`);
        }
    };

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    value={formData.email}
                                    name="email"
                                    onChange={handleChange}
                                    ref={inputRef}
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
                            <div className={'form-control'}>
                                <Link to={'/forget-password'} className={'link link-danger'}>{'Forgot password?'}</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? <span className="loading loading-spinner"> loading...</span> : 'Login'}
                                </button>
                            </div>
                            {error && <div className="text-red-500 text-center mt-4">{error}</div>}
                            <div className="text-center mt-4">
                                Don't have an account?
                                <Link to="/register" className="link-primary link">
      <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
       Register
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

export default LoginPage;
