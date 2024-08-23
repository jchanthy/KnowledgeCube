import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import DeleteUser from "../../../components/User/DeleteUser.js";
import {setPageTitle} from "../../../components/headerSlice.js";
import {useDispatch, useSelector} from "react-redux";

const Learner = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const {pageTitle} = useSelector((state) => state.header);
    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            const response = await axios.get("/api/users");
            if (response.data && response.data.users) {
                setUsers(response.data.users);
            } else {
                console.error("Error: Unexpected API response structure");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            // Implement error handling for the user (e.g., display an error message)
        }
    };

    useEffect(() => {
        fetchData();
        dispatch(setPageTitle({title: 'Learner'}))
    }, []);

    return (
        <div className="stat stats-vertical bg-base-100 shadow rounded-box">
            <div className="flex justify-between items-center">
                <div className="text-3xl font-bold mb-4">{pageTitle}</div>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => navigate("/admin/dashboard/users/create")}
                >
                    Create User
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
                    {users.length > 0 ? (
                        users.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <th>{k + 1}</th>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.role}</td>
                                    <td className="flex gap-2 items-center">
                                        <Link className={'btn btn-ghost btn-sm'}
                                              to={`/admin/dashboard/users/edit/${u._id}`}
                                              state={{userData: u}}>
                                            Edit
                                        </Link>
                                        <DeleteUser userId={u._id}/>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr className={'skeleton w-full'}>
                            <th className={'skeleton  w-full'}></th>
                            <td className={'skeleton w-full'}></td>
                            <td className={'skeleton w-full'}></td>
                            <td className={'skeleton w-full'}></td>
                            <td className="flex gap-2 items-center skeleton">
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Learner;