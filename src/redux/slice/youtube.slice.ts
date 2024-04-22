import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IYouTubeResponse} from "../../interfaces";
import {AxiosError} from "axios";
import {youtubeService} from "../../services";


interface IState {
    response: IYouTubeResponse
}
const initialState: IState = {
    response: null
};

const getVideoId = createAsyncThunk<IYouTubeResponse, string>(
    'youtubeSlice/getVideoId',
    async (title, {rejectWithValue}) => {
        try {
            const {data} = await youtubeService.search(title);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const slice = createSlice({
    name: 'youtubeSlice',
    initialState,
    reducers:{
        nullResponse: (state) => {
            state.response = null
        }
    },
    extraReducers: builder => {
        builder.addCase(getVideoId.fulfilled, (state, action) => {
            state.response = action.payload
        })
    }
});

const {reducer: youtubeReducer, actions} = slice;
const youtubeActions = {
    ...actions,
    getVideoId
}

export {
    youtubeActions, youtubeReducer
}