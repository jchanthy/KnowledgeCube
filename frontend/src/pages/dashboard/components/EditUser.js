import UserForm from "../../../components/User/UserForm.js";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

const EditUser = () => {
    const location = useLocation();
    const userdata = location.state.userData || {};
    const navigate = useNavigate();


    const back = () => {
        navigate(-1);
    }
    const handleUpdateUser = async (updatedUser) => {
        try {
            const response = await axios.put(`/api/users/update/${userdata._id}`, updatedUser);
            if (response.data.message === 'User updated successfully') {
                back();
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <UserForm
            userId={userdata._id}
            initialData={userdata} // Pre-fill the form with existing user data
            onSubmit={handleUpdateUser}
            onClose={back}
        />
    );
};

export default EditUser;