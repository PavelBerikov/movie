import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError, AxiosResponse} from "axios";
import {movieService} from "../../services";
import {IRating} from "../../interfaces/rating.interface";
interface IState {

}
let initialState: IState ={

};

const add = createAsyncThunk<void, IRating>(
    'ratingSlice/add',
    async (rating,{rejectWithValue}) => {
        try {
            await movieService.addRating(rating)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const slice = createSlice({
    name: 'ratingSlice',
    initialState,
    reducers:{}
});
const {actions, reducer: ratingReducer} = slice;
const ratingActions = {
    ...actions,
    add
}
export {
    ratingActions, ratingReducer
}