import {useDispatch} from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard.js"
import {showNotification} from "../../../components/headerSlice.js";
import TextAreaInput from "../../../components/Input/TextAreaInput.js";
import ToogleInput from "../../../components/Input/ToogleInput.js";
import InputText from "../../../components/Input/InputText.js";
import {useState} from "react";

function ProfileSettings() {

    const dispatch = useDispatch()
    dispatch(showNotification({message: "Profile Updated", status: 1}))


    // Call API to update profile settings changes
    const [profileData, setProfileData] = useState({
        name: "",
        email: "",
        title: "",
        place: "",
        about: "",
        language: "",
        timezone: "",
        syncData: false,

    });


    const updateProfile = () => {
        // Update user data in MongoDB
        fetch('/api/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileData)
        })
            .then(response => {
                if (response.ok) {
                    dispatch(showNotification({message: "Profile Updated", status: 1}));
                } else {
                    dispatch(showNotification({message: "Profile Update Failed", status: 0}));
                }
            })
            .catch(error => console.error('Error updating profile:', error));
    };
    const updateFormValue = ({updateType, value}) => {
        setProfileData(prevState => ({
            ...prevState,
            [updateType]: value
        }));
    };

    return (
        <>

            <TitleCard title="Profile Settings" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Name" defaultValue="Alex" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Email Id" defaultValue="alex@dashwind.com"
                               updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Title" defaultValue="UI/UX Designer" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Place" defaultValue="California" updateFormValue={updateFormValue}/>
                    <TextAreaInput labelTitle="About" defaultValue="Doing what I love, part time traveller"
                                   updateFormValue={updateFormValue}/>
                </div>
                <div className="divider"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Timezone" defaultValue="IST" updateFormValue={updateFormValue}/>
                    <ToogleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true}
                                 updateFormValue={updateFormValue}/>
                </div>

                <div className="mt-16">
                    <button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button>
                </div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings