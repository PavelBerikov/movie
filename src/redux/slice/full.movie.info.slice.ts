import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieInfo} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movieInfo: IMovieInfo;
    movieTitle: string;
    movieId: number
}
let initialState: IState = {
    movieInfo: null,
    movieTitle: null,
    movieId: null
};

const getMovieInfo = createAsyncThunk<IMovieInfo, number>(
    'fullMovieInfoSlice/getMovieInfo',
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
const slice = createSlice({
    name: 'fullMovieInfoSlice',
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
        builder.addCase(getMovieInfo.fulfilled, (state, action) => {
            state.movieInfo = action.payload
            console.log(action.payload)
        })
    }
});

const {reducer: fullMovieInfoReducer, actions} = slice;
const fullMovieInfoActions = {
    ...actions,
    getMovieInfo
}

export {
    fullMovieInfoActions, fullMovieInfoReducer
}