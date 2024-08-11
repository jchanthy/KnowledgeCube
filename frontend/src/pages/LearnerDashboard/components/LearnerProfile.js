import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../services/UserContextProvider.js";
import {CameraIcon, PencilIcon} from "@heroicons/react/24/outline/index.js";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import ModalForm from "../../../components/modalForm.js";
import SkillSelector from "../../../components/SkillSelector.js";

const LearnerProfile = () => {
    const {user} = useContext(UserContext);
    const [username, setUsername] = useState(user.name);
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const userImage = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';
    const openModal = () => document.getElementById('my_modal_1').showModal();
    const closeModal = () => document.getElementById('my_modal_1').close();

    const openEditAboutModal = () => document.getElementById('edit_about_modal').showModal();

    const [isOpen, setIsOpen] = useState(false);
    const handleUpdate = (e) => {
        e.preventDefault();
        // Update user logic here
        console.log('Update user:', username, photo);
        closeModal();
    };


    useEffect(() => {

    }, []);


    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoPreview(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <>
            <div className="grid grid-cols-3  card card-side justify-start bg-base-100 shadow-md p-4">
                <div className="avatar flex flex-col items-center justify-center">
                    <div className="relative w-32 h-32 rounded-full border-primary border-4">
                        <img src={photoPreview} alt="profile user"
                             className="absolute inset-0 w-full h-full object-cover"/>
                    </div>
                </div>
                <div className={'flex flex-col items-start justify-center gap-4'}>
                    <span className={'card-title'}>
                       {user.name}
                        <button onClick={openModal} className={'btn btn-outline btn-sm'}>
                           <PencilIcon className={'w-4 h-4'}/>
                            Edit</button>
                    </span>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Edit Profile</h3>

                            <div className="flex-col w-full">
                                <form method="dialog" onSubmit={handleUpdate}>
                                    <div className={'form-control items-center justify-center'}>
                                        <div className="avatar">
                                            <div
                                                className="relative w-36 h-36 rounded-full overflow-hidden">
                                                {photoPreview ? (
                                                    <img src={photoPreview || userImage} alt="Preview"
                                                         className="w-full h-full "/>
                                                ) : (
                                                    <div
                                                        className="w-full h-full bg-gray-300 flex justify-center items-center">
                                                        <CameraIcon className={'w-8 h-8 opacity-30'}/>
                                                    </div>
                                                )}
                                                <input type="file" accept="image/*" className="absolute top-0 left-0
                                                w-full h-full opacity-0 cursor-pointer"
                                                       onChange={handlePhotoChange}/>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={'form-control'}>
                                        <label className="label">
                                            <span className="label-text">Username</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className="input input-bordered"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />

                                        <label className={'label'}>
                                            <span className={'label-text'}>Email</span>

                                        </label>
                                        <input className={'input input-bordered'} value={user.email} disabled/>

                                    </div>
                                    <div className={'modal-action'}>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Update
                                        </button>
                                        <button
                                            type="button"
                                            className="btn"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    <p>Web Developer</p>
                    <span className={'flex justify-center items-center gap-4'}>
                        <EnvelopeIcon className={'w-4 h-4'}/>
                        {user.email}
                    </span>
                    <button className={'btn btn-outline'}>Upload Photo</button>
                </div>
            </div>

            {/*About*/}
            <div className={'card card-side bg-base-100 shadow-md mt-10'}>
                <div className="flex flex-col-2 justify-between p-4">
                    <div className={'flex-1'}>
                        <h2 className="card-title">About Me</h2>
                        <p>You can write about your years of experience, industry, or skills. People also talk about
                            their achievements or previous job experiences.
                        </p>


                        <textarea className={'textarea textarea-primary w-full mt-4'} placeholder="">


                        </textarea>
                    </div>
                    <div className={'flex-0'}>
                        <button className={'btn btn-sm btn-outline flex-end'} onClick={openEditAboutModal}>
                            <PencilIcon className={'w-3 h-3'}/>
                            Edit
                        </button>

                        <dialog id="edit_about_modal" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <h3 className="font-bold text-lg">Edit About</h3>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
                                    </button>

                                    <div className={'divider'}/>
                                    <p>

                                        You can write about your years of experience, industry, or skills. People also
                                        talk about their achievements or previous job experiences.
                                    </p>
                                    <textarea id={'my-textarea'} className="textarea textarea-primary w-full"
                                              placeholder="About">


                                    </textarea>
                                    <span className={'text-xs items-end'}>
                                        Characters left: <span id={'chars-count'}/> / <span id={'char-left'}/>
                                    </span>

                                </form>


                                <div className={'divider'}/>

                                <div className={'flex justify-end'}>
                                    <button className={'w-40 btn btn-primary'}>Save</button>
                                </div>


                            </div>
                        </dialog>
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
                        {
                            <ModalForm title={'Edit Skills'} open={isOpen} onClose={handleCloseModal}>
                                <SkillSelector
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                            </ModalForm>

                        }
                    </div>


                </div>
            </div>
        </>
    )
}

export default LearnerProfile;