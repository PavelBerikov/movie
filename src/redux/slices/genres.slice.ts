import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenresData, IGenre} from "../../interfaces/genre.interface";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState{
    genres: IGenre[]
}

let initialState:IState = {
    genres: []
}

const getGenres = createAsyncThunk<IGenresData, void>(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
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
    name: 'genresSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            const {genres} = action.payload;
            state.genres = genres

        })
    }
});

const {reducer: genresReducer, actions} = slice;
const genresActions = {
    ...actions,
    getGenres
}

export {
    genresActions, genresReducer
}