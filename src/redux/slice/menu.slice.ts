import {createSlice} from "@reduxjs/toolkit";

interface IState{
    trigger: boolean
}
let initialState: IState = {
    trigger: false
};
const slice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers:{
        resetTrigger: (state) => {
            state.trigger = false
        },
        changeTrigger: (state) => {
            state.trigger = !state.trigger
            console.log(state.trigger)
        }
    }
});

const {reducer: menuReducer, actions} = slice;
const menuActions = {
    ...actions
}

export {
    menuActions, menuReducer
}