import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAvatar, IUser} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState {
    photoURL: string
    avatar: IAvatar;
    id: number;
    name: string;
    username: string;
    include_adult: boolean
    userTrigger: boolean
}
let initialState: IState = {
    avatar: null,
    include_adult: null,
    username: null,
    name: null,
    id: null,
    photoURL: 'https://image.tmdb.org/t/p/w300',
    userTrigger: false
};
const getUser = createAsyncThunk<IUser>(
    'userSlice/getUser',
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
    name: 'userSlice',
    initialState,
    reducers:{
        changeTrigger: (state) => {
            state.userTrigger = !state.userTrigger
        },
        resetTrigger: (state) => {
            state.userTrigger = false
        },
        trueTrigger: (state) => {
            state.userTrigger = true
        }
    },
    extraReducers: builder => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            const {avatar, username, name, include_adult, id} = action.payload;
            state.id = id
            state.avatar = avatar
            state.include_adult = include_adult
            state.name = name
            state.username = username
        })
            .addCase(getUser.rejected, (state, action) => {
                console.log(action.payload)
            })
    }
});

const {reducer: userReducer, actions} = slice;
const userActions = {
    ...actions,
    getUser
}

export {
    userActions, userReducer
}