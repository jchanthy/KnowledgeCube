import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../../services/UserContextProvider.js";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import axios from "axios";

const LoginPage = () => {
    const {login} = useContext(UserContext);
    const navigate = useNavigate();

    const validateSchema = yup.object().shape({
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validateSchema),
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const response = await axios.post('/api/login', data);

            if (response.status === 200) {
                login(response.data.user, response.data.token);
                setLoading(false);
                // Use history API for cleaner navigation (optional)
                navigate('/dashboard'); // Replace with your history object if using a library like react-router-dom
            } else {
                // Handle unexpected status codes
                console.error('Unexpected response:', response);
                setError('Login failed. An unexpected error occurred.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setLoading(false); // Ensure loading state is reset even on error
            if (error.response) {
                if (error.response.status === 401) {
                    setError('Incorrect email or password.');
                } else {
                    setError('Login failed. Please try again later.');
                }
            } else {
                // Handle network errors
                setError('Network error. Please check your connection and try again.');
            }
        }
    };


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div>
                        <Link to={'/'} className={'link link-success'}>{'Visit our website'}</Link>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register('password')}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            <label className="label">
                                <Link to="/forget-password" className="label-text-alt link link-hover">Forgot
                                    password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">
                                {loading ? <span className="loading loading-spinner loading-xs"/> : 'Login'}
                            </button>
                        </div>
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                        <div className='text-center mt-4'>
                            Don't have an account yet? <Link to="/register" className={'link-primary link'}>
                                <span
                                    className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                                    Register
                                </span>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
