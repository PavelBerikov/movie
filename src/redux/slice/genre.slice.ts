import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IGenresData} from "../../interfaces/genres.interface";
import {AxiosError} from "axios";
import {movieService} from "../../services";
import {IMovie, IMoviesResponse} from "../../interfaces";

interface IState {
    trigger: boolean;
    genres: IGenre[];
    genresId: number[];
    movies: IMovie[];
    page: number;
    prev: number;
    next: number;
}
let initialState: IState = {
    genres: [],
    genresId: [],
    movies: [],
    page: null,
    next: null,
    prev: null,
    trigger: false
};
export const updateState = (state: any, action: any) => {
    const { results, page } = action.payload;
    state.movies = results;
    state.page = page;
    state.prev = page !== 1 ? page - 1 : null;
    state.next = page + 1;
};
const getFilterMovies = createAsyncThunk<IMoviesResponse, {page: string, with_genres: string}>(
    'genresSlice/getFilterMovies',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchByGenre(page, with_genres);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getGenres = createAsyncThunk<IGenresData>(
    'genreSlice/getGenres',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{
        createQuery: (state, actions) => {
            if (!state.genresId.includes(actions.payload)){
                state.genresId.push(actions.payload)
            }else {
                const id = state.genresId.indexOf(actions.payload);
                state.genresId.splice(id, 1)
            }

        },
        changeTrigger: (state) => {
            state.trigger = !state.trigger
        },
        clearTrigger: (state) => {
            state.trigger = false
        },
        clearGenresId: (state) => {
            state.genresId = []
        }
    },
    extraReducers: builder => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres
            console.log(typeof action.payload.genres[0].id)
        })
            .addCase(getFilterMovies.fulfilled, (state, action) => {
                updateState(state, action)

            })
    }
});
const {reducer: genreReducer, actions} = slice;
const genreActions = {
    ...actions,
    getGenres,
    getFilterMovies
}

export {
    genreActions, genreReducer
}