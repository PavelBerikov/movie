import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMoviesResponse} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";
import {updateState} from "./genre.slice";

interface IState {
    photoURL: string
    next: number;
    prev: number;
    movies: IMovie[];
    page: number;

}

let initialState: IState = {
    photoURL: 'https://image.tmdb.org/t/p/w300',
    movies: [],
    next: null,
    prev: null,
    page: null,

};



const filterByCount = createAsyncThunk<IMoviesResponse, number>(
    'moviesSlice/filterByRating',
    async (page,{rejectWithValue}) => {
        try {
            const {data} = await movieService.sortByVoteCount(page);
            return data
        }catch (e) {
            const err = e as  AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const slice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(filterByCount.fulfilled, (state, action) => {
            updateState(state, action)
        })
    }
});

const {reducer: moviesReducer, actions} = slice;
const moviesActions = {
    ...actions,
    filterByCount
}

export {
    moviesActions, moviesReducer
}