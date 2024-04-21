import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieInfo, IMoviesResponse} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";


interface IState {
    page: number;
    prev: number;
    next: number;
    results: IMovie[];
    total_page: number;
    keyWord: string
    movies: IMovieInfo[]
}
let initialState:IState = {
    page: null,
    prev: null,
    next: null,
    results: [],
    total_page: null,
    keyWord: null,
    movies: []
};

const createMovies = createAsyncThunk<IMovieInfo, string>(
    'searchSlice/createMovies',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieInfo(id);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getResult = createAsyncThunk<IMoviesResponse, {query: string, page:string}>(
    'searchSlice/getResult',
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(page, query);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        getKeyWord: (state, actions) => {
            state.keyWord = actions.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getResult.fulfilled, (state, action) => {
            const {page, results, total_pages} = action.payload;
            state.results = results
            state.page = page
            state.total_page = total_pages
            if (page === 1){
                state.prev = null
                state.next = page + 1
            }if (page === total_pages){
                state.next = null
                state.prev = page - 1
            }else {
                state.prev = page - 1
                state.next = page + 1
            }
        })
            .addCase(createMovies.fulfilled, (state, action) => {
                state.movies.push(action.payload)
            })
    }
});

const {reducer: searchReducer, actions} = slice;
const searchActions = {
    ...actions,
    getResult,
    createMovies
}

export {
    searchActions, searchReducer
}