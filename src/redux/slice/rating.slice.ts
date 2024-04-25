import {createSlice} from "@reduxjs/toolkit";

let initialState = {

};
const slice = createSlice({
    name: 'ratingSlice',
    initialState,
    reducers:{}
});
const {reducer: ratingReducer, actions} = slice;
const ratingSLice = {
    ...actions
}
export {
    ratingSLice, ratingReducer
}