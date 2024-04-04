
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slice";
import {userReducer} from "./slice/user.slice";


const rootReducer = combineReducers({
    movies: moviesReducer,
    user: userReducer
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
