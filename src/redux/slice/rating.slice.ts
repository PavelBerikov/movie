import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieRatingResponse, IMovieWithRating} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";
import {IAddRatingResponse, IRating} from "../../interfaces/rating.interface";
import {updateState} from "./genre.slice";

interface IState {
    page: number;
    next: number;
    prev: number;
    movies: IMovieWithRating[]
    ratingResponse: IAddRatingResponse
}
let initialState:IState = {
    movies: [],
    ratingResponse: null,
    prev: null,
    page: null,
    next: null

};
const addRating = createAsyncThunk<IAddRatingResponse, {addRating: IRating, id: number}>(
    'ratingSlice/addRating',
    async ({addRating, id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.addRating(addRating, id);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getRatedMovies = createAsyncThunk<IMovieRatingResponse>(
    'ratingSlice/getRatedMovies',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getRatingResult();
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const slice = createSlice({
    name: 'ratingSlice',
    initialState,
    reducers:{
        resetRatingResponse: (state) => {
            state.ratingResponse = null
        }
    },
    extraReducers: builder => {
        builder.addCase(getRatedMovies.fulfilled, (state, action) => {
            updateState(state, action)
        })
            .addCase(addRating.fulfilled, (state, action) => {
                state.ratingResponse = action.payload
            })
    }
});
const {reducer: ratingReducer, actions} = slice;
const ratingActions = {
    ...actions,
    getRatedMovies,
    addRating
}
export {
    ratingActions, ratingReducer
}