import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieRatingResponse, IMovieWithRating} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";
import {IAddRatingResponse, IRating} from "../../interfaces/rating.interface";

interface IState {
    ratedMovies: IMovieWithRating[]
    ratingResponse: IAddRatingResponse
}
let initialState:IState = {
    ratedMovies: [],
    ratingResponse: null
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
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getRatedMovies.fulfilled, (state, action) => {
            const {results, page} = action.payload;
            state.ratedMovies = results
            console.log(state.ratedMovies)
        })
            .addCase(addRating.fulfilled, (state, action) => {
                state.ratingResponse = action.payload
                console.log(state.ratingResponse)
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