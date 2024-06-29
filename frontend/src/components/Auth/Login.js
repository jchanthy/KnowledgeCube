// src/components/LoginForm.js
import React from 'react';

const LoginForm = () => {

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
                            onClick={() => {
                            }}>Login
                    </button>
                </form>
                <p className="text-center m-8 text-sm text-gray-600">Or login with</p>
                <div className="flex justify-center gap-4  text-center">
                    <div className="flex justify-center space-x-4">
                        <button type="button" onClick={() => {
                        }}
                                className="flex items-center px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
                            Google Login
                        </button>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button type="button" onClick={() => {
                        }}
                                className="flex items-center px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
                            Microsoft Login
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginForm;
