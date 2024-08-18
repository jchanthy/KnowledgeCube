import {useState} from 'react';
import {useForm} from 'react-hook-form';

const EditProfileDetail = () => {
    const {register, handleSubmit, errors} = useForm();
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        // Add other fields as needed
    });

    const onSubmit = async (data) => {
        // Update user information API call
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input type="text" {...register('name')} value={userInfo.name}/>
                {errors.name && <div>{errors.name.message}</div>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...register('email')} value={userInfo.email}/>
                {errors.email && <div>{errors.email.message}</div>}
            </div>
            {/* Add other fields as needed */}
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default EditProfileDetail;