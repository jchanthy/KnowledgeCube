import React, {useState} from 'react';
import axios from 'axios';

const EnrollCourse = () => {
    const [userId, setUserId] = useState('');
    const [courseId, setCourseId] = useState('');
    const [enrollmentStatus, setEnrollmentStatus] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/enroll-course', {
                userId,
                courseId,
            });
            if (response.data.success) {
                setEnrollmentStatus('Enrollment successful!');
            } else {
                setEnrollmentStatus('Enrollment failed.');
            }
        } catch (error) {
            setEnrollmentStatus('Error: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className={'form-control'}>
                User ID:
                <input type="text" className={'input input-primary input-bordered w-full'} value={userId}
                       onChange={(event) => setUserId(event.target.value)}/>
            </label>
            <br/>
            <label className={'form-control'}>
                Course ID:
                <input type="text" className={'input input-primary input-bordered w-full'} value={courseId}
                       onChange={(event) => setCourseId(event.target.value)}/>
            </label>
            <br/>
            <button type="submit" className={'btn btn-primary'}>Enroll</button>
            {enrollmentStatus && <p>{enrollmentStatus}</p>}
        </form>
    );
};

export default EnrollCourse;