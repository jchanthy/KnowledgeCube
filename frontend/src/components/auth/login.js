// src/components/LoginForm.js
import React from 'react';
import {Link} from "react-router-dom";

const LoginForm = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className={'flex justify-center m-4 card-title text-3xl font-bold'}>
                        Login now!
                    </div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className={'divider'}></div>
                    <div className={'flex flex-row content-center justify-center'}>
                        <Link to={'/google'}><img src="https://accounts.google.com/favicon.ico"
                                                  alt="Google"
                                                  className="w-6 h-6 mr-2"/>Google</Link>
                        <div className={'divider divider-horizontal'}></div>
                        <Link to={'/fa'}><img src="https://www.microsoft.com/favicon.ico" alt="Microsoft"
                                              className="w-6 h-6 mr-2"/>Microsoft</Link>
                    </div>
                    <div className={'divider'}></div>

                </div>
            </div>
        </div>
    )
        ;
};

export default LoginForm;
