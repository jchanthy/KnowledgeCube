import {configureStore} from "@reduxjs/toolkit";
import {headerSlice} from "../../common/headerSlice.js";

const combinedReducer = {
    header: headerSlice,

}

export default configureStore({
    reducer: combinedReducer
})