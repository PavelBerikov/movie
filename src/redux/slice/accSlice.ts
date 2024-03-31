import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAvatar, IAccInfo} from "../../interfaces/accInfo.interface";
import {AxiosError} from "axios";
import {movieService} from "../../services";
interface IState {
    avatar: IAvatar;
    id: number;
    name: string;
    username: string;
    include_adult: boolean
}
let initialState: IState = {
    avatar: null,
    include_adult: null,
    username: null,
    name: null,
    id: null
};

const getInfo = createAsyncThunk<IAccInfo>(
    'accSlice/getInfo',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getAcc();
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const slice = createSlice({
    name: 'accSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getInfo.fulfilled, (state, action) => {
            const {avatar, username, name, include_adult, id} = action.payload;
            state.id = id
            state.avatar = avatar
            state.include_adult = include_adult
            state.name = name
            state.username = username
            console.log(action.payload)
        })
    }
});

const {reducer: accReducer, actions} = slice;
const accActions = {
    ...actions,
    getInfo
}

export {
    accActions, accReducer
}