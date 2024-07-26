import React, {useState} from 'react'
import {Link} from "react-router-dom";


const RegisterForm = ({handleRegister}) => {
    const [name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault()
        handleRegister(name, email, password);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type={'hidden'} name={'_csrf'}/>
                            <input type="text" placeholder="Full Name" className="input input-bordered"
                                   onChange={(e) => setUsername(e.target.value)} required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                   onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                   onChange={(e) => setPassword(e.target.value)} required/>

                        </div>
                        <div className="form-control mt-6">
                            <button type={"submit"} className="btn btn-primary" onSubmit={handleSubmit}>Register
                            </button>

                        </div>

                        <div className='text-center mt-4'>Already have an account? <Link to="/login"><span
                            className="inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm