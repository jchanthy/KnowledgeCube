import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import ProfileSettings from "../../components/profile/profileSetting.js";

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({title: "Settings"}))
    }, [])


    return (
        <ProfileSettings/>
    )
}

export default InternalPage