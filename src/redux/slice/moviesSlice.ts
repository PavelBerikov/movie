import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMoviesResponse} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState {
    photoURL: string
    next: number;
    prev: number;
    movies: IMovie[]
}

let initialState: IState = {
    photoURL: 'https://image.tmdb.org/t/p/w300',
    movies: [],
    next: null,
    prev: null
};

const filterByCount = createAsyncThunk<IMoviesResponse>(
    'moviesSlice/filterByRating',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await movieService.sortByVoteCount();
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
            const {results} = action.payload;
            state.movies = results
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