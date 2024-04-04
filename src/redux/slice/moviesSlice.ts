import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMoviesResponse} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState {
    next: number;
    prev: number;
    movies: IMovie[]
}

let initialState: IState = {
    movies: null,
    next: null,
    prev: null
};

const filterByRating = createAsyncThunk<IMoviesResponse, number>(
    'moviesSlice/filterByRating',
    async (page,{rejectWithValue}) => {
        try {
            const {data} = await movieService.sortByVoteCount(page);
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
        builder.addCase(filterByRating.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.movies = results
        })
    }
});

const {reducer: moviesReducer, actions} = slice;
const moviesActions = {
    ...actions,
    filterByRating
}

export {
    moviesActions, moviesReducer
}