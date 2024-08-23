import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        try {
            const response = await axios.post('/api/forget-password', {email});
            if (response.data.success) {
                setSuccess('Password reset email sent successfully!');
                setError(null);
            } else {
                setError(response.data.error);
                setSuccess(null);
            }
        } catch (error) {
            setError('Error sending password reset email');
            setSuccess(null);
        }
    };

    return (
        <div className="form-control max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                    <label className="label">
                        Email
                    </label>
                    <input
                        className="input input-primary shadow w-full"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
                {success && (
                    <div
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                        <span className="block sm:inline">{success}</span>
                    </div>
                )}

                <div className={'flex justify-between items-center'}>
                    <button
                        className="btn btn-primary shadow-xl"
                        type="submit"
                    >
                        Send Password Reset Email
                    </button>

                    <Link to={'/'} className={'link link-success gap-4'}>{'Back to home page'}</Link>

                </div>
            </form>
        </div>
    );
};

export default ResetPassword;