
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {
    fullMovieInfoReducer,
    genreReducer,
    menuReducer,
    moviesReducer,
    ratingReducer,
    searchReducer,
    youtubeReducer
} from "./slice";
import {userReducer} from "./slice";


const rootReducer = combineReducers({
    movies: moviesReducer,
    user: userReducer,
    youtube: youtubeReducer,
    fullMovieInfo: fullMovieInfoReducer,
    search: searchReducer,
    menu: menuReducer,
    genre: genreReducer,
    rating: ratingReducer
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
