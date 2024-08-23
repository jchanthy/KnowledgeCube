import UserForm from "../../../components/User/UserForm.js";
import {useNavigate} from "react-router-dom";

const CreateUser = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }
    const handleCreateUser = (newUser) => {
        // Handle the newly created user
        console.log('New user:', newUser);
    };

    return (
        <UserForm
            initialData={{}} // Empty initial data for creating a new user
            onSubmit={handleCreateUser}
            onClose={back}
        />
    );
};

export default CreateUser;