import {configureStore} from "@reduxjs/toolkit";
import headerSlice from "../components/headerSlice.js";

const combinedReducer = {
    header: headerSlice,

}

export default configureStore({
    reducer: combinedReducer
})