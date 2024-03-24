import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieData} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState{
    page: number
    prev: number | null,
    next: number | null,
    movies: IMovie[],
    total_pages: number
}

const initialState:IState = {
    movies: [],
    next: null,
    page: null,
    prev: null,
    total_pages: null

};
/*const getPage = createAsyncThunk<IMovieData, void>(
    'discoverSlice/getPage',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies();
            return data
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)*/
const getMovies = createAsyncThunk<IMovieData, number>(
    'discoverSlice/getMovies',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(page);
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
            const {results, page, total_pages} = action.payload;
            state.total_pages = total_pages
            state.movies = results
            state.page = page
            if (page !== 1){
                state.prev = page - 1
                state.next = page + 1
            }else {
                state.prev = null
                state.next = page + 1
            }
            console.log(state.next)
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