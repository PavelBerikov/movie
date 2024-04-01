import {createSlice} from "@reduxjs/toolkit";

let initialState = {

};
const slice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{}
});

const {reducer: moviesReducer, actions} = slice;
const moviesActions = {
    ...actions
}

export {
    moviesActions, moviesReducer
}