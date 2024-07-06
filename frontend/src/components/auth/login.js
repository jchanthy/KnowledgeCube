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
                    <div className="flex flex-wrap justify-center gap-2">
                        <a href="https://moodle.academy/auth/oauth2/login.php?id=1&amp;wantsurl=https%3A%2F%2Fmoodle.academy%2Fcourse%2Fview.php%3Fid%3D57&amp;sesskey=17NRsDcdoz"
                           className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                            <img src="https://accounts.google.com/favicon.ico" alt="Google" className="w-6 h-6 mr-2"/>
                            Google
                        </a>
                        <a href="https://moodle.academy/auth/oauth2/login.php?id=2&amp;wantsurl=https%3A%2F%2Fmoodle.academy%2Fcourse%2Fview.php%3Fid%3D57&amp;sesskey=17NRsDcdoz"
                           className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
                            <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-6 h-6 mr-2"/>
                            Microsoft
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LoginForm;
