import {configureStore} from "@reduxjs/toolkit";
import headerSlice from "../headerSlice.js";

const combinedReducer = {
    header: headerSlice,
}

export default configureStore({
    reducer: combinedReducer
})