import {createSlice} from "@reduxjs/toolkit";

interface IState{
    menuTrigger: boolean
}
let initialState: IState = {
    menuTrigger: false
};
const slice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers:{
        resetTrigger: (state) => {
            state.menuTrigger = false
        },
        changeTrigger: (state) => {
            state.menuTrigger = !state.menuTrigger
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