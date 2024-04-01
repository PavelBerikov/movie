
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slice";


const rootReducer = combineReducers({
    movies: moviesReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState, AppStore, AppDispatch
}

export {
    setupStore
}
