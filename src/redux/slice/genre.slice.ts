import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IGenresData} from "../../interfaces/genres.interface";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState {
    genres: IGenre[]
}
let initialState: IState = {
    genres: []
};
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
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres
        })
    }
});
const {reducer: genreReducer, actions} = slice;
const genreActions = {
    ...actions,
    getGenres
}

export {
    genreActions, genreReducer
}