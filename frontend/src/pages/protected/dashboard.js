import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setPageTitle} from "../../common/headerSlice.js";
import Dashboard from "../../components/dashboard/index.js";

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({title: "Dashboard"}))
    }, [])


    return (
        <Dashboard/>
    )
}

export default InternalPage