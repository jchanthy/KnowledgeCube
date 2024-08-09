import {useContext} from "react";
import {UserContext} from "../../../services/UserContextProvider.js";
import {PencilIcon} from "@heroicons/react/24/outline/index.js";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";

const LearnerProfile = () => {
    const {user} = useContext(UserContext);
    const userImage = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

    return (
        <>
            <div className="grid grid-cols-3  card card-side justify-start bg-base-100 shadow-md p-4">
                <div className="avatar flex flex-col items-center justify-center">
                    <div className="relative w-32 h-32 rounded-full border-primary border-4">
                        <img src={userImage} alt="profile user"
                             className="absolute inset-0 w-full h-full object-cover"/>
                    </div>
                </div>
                <div className={'flex flex-col items-start justify-center gap-4'}>
                    <span className={'card-title'}>
                       {user.name}
                        <button className={'btn btn-sm btn-outline'}>
                            <PencilIcon className={'w-3 h-3'}/>
                            Edit
                        </button>
                    </span>
                    <p>Web Developer</p>
                    <span className={'flex justify-center items-center gap-4'}>
                        <EnvelopeIcon className={'w-4 h-4'}/>
                        {user.email}
                    </span>
                    <button className={'btn btn-outline'}>Upload Photo</button>
                </div>

            </div>

            <div className={'card card-side bg-base-100 shadow-md mt-10'}>
                <div className="flex flex-col-2 justify-between p-4">
                    <div className={'flex-1'}>
                        <h2 className="card-title">About</h2>
                        <p>Click the button to watch on your app.</p>
                    </div>
                    <div className={'flex-0'}>
                        <button className={'btn btn-sm btn-outline flex-end'}>
                            <PencilIcon className={'w-3 h-3'}/>
                            Edit
                        </button>
                    </div>
                </div>
            </div>


            {/*Skill*/}
            <div className={'card card-side bg-base-100 shadow-md mt-10'}>
                <div className="flex flex-col-2 justify-between p-4">
                    <div className={'flex-1 card-content'}>
                        <h2 className="card-title">Skills</h2>
                        <div className={'flex gap-4'}>
                            <div className="badge badge-primary p-4 mt-6">{'html'.toUpperCase()}</div>
                            <div className="badge badge-primary p-4 mt-6">{'css'.toUpperCase()}</div>
                            <div className="badge badge-primary p-4 mt-6">{'javascript'.toUpperCase()}</div>
                        </div>
                    </div>
                    <div className={'flex-0'}>
                        <button className={'btn btn-sm btn-outline flex-end'}>
                            <PencilIcon className={'w-3 h-3'}/>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LearnerProfile;