import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../../services/authService.js";
import axios from "axios";


const LoginPage = () => {
    const {login} = useContext(UserContext);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };
    const handleSubmit = async (e) => {
        console.log(e);
        e.preventDefault();
        try {
            setLoading(true);

            // Create a userData object with email and password only
            const userData = {
                email: formData.email,
                password: formData.password,
            };

            // Make an HTTP POST request to your backend login endpoint
            const response = await axios.post('http://localhost:5000/users/login', userData);
            console.log('user:', response);
            if (response.status === 200) {
                login(response.data.user, response.data.token);
            }
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 401) {
                setError('Incorrect email or password.');
            } else {
                setError('Login failed. Please try again later.');
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
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name={'email'} id={'email'} placeholder="email"
                                   className="input input-bordered"
                                   value={formData.email} onChange={handleChange} required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" id={'password'} name={'password'} placeholder="password"
                                   className="input input-bordered"
                                   value={formData.password} onChange={handleChange} required/>
                            <label className="label">
                                <Link to={"/forget-password"} className="label-text-alt link link-hover">Forgot
                                    password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type={"submit"}>Login
                                {loading && <span className="loading loading-spinner loading-xs"></span>}
                            </button>
                        </div>
                        <div className='text-center mt-4'>Don't have an account yet? <Link to="/register"><span
                            className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="toast">
                <div className="alert alert-success">
                    <span>New message arrived.</span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage