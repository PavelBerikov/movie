
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {genresReducer} from "./slices/genres.slice";


const rootReducer = combineReducers({
    genres: genresReducer
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
