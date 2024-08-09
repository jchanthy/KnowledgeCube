import {Link, useLocation} from "react-router-dom";
import LearnerNavBar from "./NavBar.js";
import UserProfile from "../../components/profile/userProfile.js";
import {Bars3Icon} from "@heroicons/react/24/solid/index.js";
import React from "react";

const LearnerHeader = () => {
    useLocation();
    return (
        <>
            <div className={'navbar w-full top-0 z-20 sticky shadow-md  bg-base-100'}>
                <div className={'flex flex-1 md:gap-1 lg:gap-2'}>
                    <label htmlFor={'my-lerner-drawer'} className={'btn btn-ghost lg:hidden btn-circle'}>
                        <input type="checkbox" className={'hidden'}/>
                        <Bars3Icon className={'w-6 h-6'}/>

                    </label>
                    <Link to={'/'} className={'flex gap-2'}>
                        <h2 className={'font-bold'}>KnowledgeCube</h2>
                    </Link>
                    <LearnerNavBar/>
                </div>
                <div className={'flex-0'}>
                    <UserProfile/>
                </div>
            </div>
        </>
    )

}

export default LearnerHeader;