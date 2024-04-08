import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMoviesResponse} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState {
    photoURL: string
    next: number;
    prev: number;
    movies: IMovie[];
    page: number;
    movieTitle: string;
    movieId: number
}

let initialState: IState = {
    photoURL: 'https://image.tmdb.org/t/p/w300',
    movies: [],
    next: null,
    prev: null,
    page: null,
    movieTitle: null,
    movieId: null
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
    reducers:{
        setTitle:(state, action) => {
            state.movieTitle = action.payload
        },
        setId: (state, action) => {
            state.movieId = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(filterByCount.fulfilled, (state, action) => {
            const {results, page} = action.payload;
            state.movies = results
            state.page = page
            if (page !== 1){
                state.prev = page - 1
                state.next = page + 1
            }else {
                state.prev = null
                state.next = page + 1
            }
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