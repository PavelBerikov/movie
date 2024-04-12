import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieInfo} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movieInfo: IMovieInfo;
}
let initialState: IState = {
    movieInfo: null,
};

const getMovieInfo = createAsyncThunk<IMovieInfo, string>(
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
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getMovieInfo.fulfilled, (state, action) => {
            state.movieInfo = action.payload
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