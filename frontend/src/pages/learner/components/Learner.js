import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Learner = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/users');
                if (response.data !== undefined) {
                    setUsers(response.data.users);
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);


    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`/api/users/${userId}`);
            if (response.status === 200) {
                console.log('User deleted successfully');
            } else {
                console.error('Error deleting user');
            }
        } catch (error) {
            console.error(error);
        }
    };

    // write a function to delete user
    const handleDeleteUser = (userId) => {
        if (userId !== undefined) {
            deleteUser(userId).then(() => {
                const fetchData = async () => {
                    try {
                        const response = await axios.get('/api/users');
                        if (response.data !== undefined) {
                            setUsers(response.data.users);
                            console.log(response.data);
                        }
                    } catch (error) {
                        console.log(error);
                    }
                };
                fetchData();
            })
        }
    };
    return (
        <div className="stat stats-vertical bg-base-100 shadow rounded-box">
            <div className={'flex justify-between items-center'}>
                <div className={'text-3xl font-bold'}>Learner</div>
                <button className={'btn btn-sm btn-primary'} onClick={() => navigate('/dashboard/users/create')}>Create
                    User
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case">Name</th>
                        <th className="normal-case">Email</th>
                        <th className="normal-case">Role</th>
                        <th className="normal-case">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <th>{k + 1}</th>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.role}</td>
                                    <td className={'flex gap-2 items-center'}>
                                        <button className={'btn btn-sm'}>Edit</button>
                                        <button type={'submit'} className={'btn btn-sm btn-accent'}
                                                onClick={() => handleDeleteUser(u._id)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Learner;