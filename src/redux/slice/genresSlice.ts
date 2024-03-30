import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieData} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState{
    genres: number[]
    movies: IMovie[]
    page: number
    prev: number
    next: number
}

let initialState:IState = {
    genres: [],
    movies: [],
    next: null,
    page: null,
    prev: null
};
const getFilterMovies = createAsyncThunk<IMovieData, {page: string, with_genres: string}>(
    'genresSlice/getFilterMovies',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getFilterMovies(page, with_genres);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const slice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{
        createQuery: (state, actions) => {
            if (!state.genres.includes(actions.payload)){
                state.genres.push(actions.payload)
            }else {
                const id = state.genres.indexOf(actions.payload);
                state.genres.splice(id, 1)
            }

        }
    },
    extraReducers: builder => {
        builder.addCase(getFilterMovies.fulfilled, (state, action) => {
            const {page, results} = action.payload;
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

const {reducer: genresReducer, actions} = slice;
const genresActions = {
    ...actions,
    getFilterMovies
}
export {
    genresActions, genresReducer
}