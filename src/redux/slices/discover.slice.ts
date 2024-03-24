import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieData} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState{
    page: number
    prev: number | null,
    next: number | null,
    movies: IMovie[],
}

const initialState:IState = {
    movies: [],
    next: null,
    page: null,
    prev: null
};

const getMovies = createAsyncThunk<IMovieData, void>(
    'discoverSlice/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies();
            return data
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'discoverSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            const {results, page} = action.payload;
            console.log(action.payload)
            state.movies = results
            state.page = page
            if (page !== 1){
                state.prev = page - 1
                state.next = page + 1
            }else {
                state.prev = null
            }
        })
    }
});

const {actions, reducer: discoverReducer} = slice;
const discoverActions = {
    ...actions,
    getMovies
}

export {
    discoverActions, discoverReducer
}