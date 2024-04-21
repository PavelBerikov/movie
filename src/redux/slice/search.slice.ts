import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ISearch} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";


interface IState {

}
let initialState = {

};

const getResult = createAsyncThunk<ISearch, {query: string, page:number}>(
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
    reducers:{}
});

const {reducer: searchReducer, actions} = slice;
const searchActions = {
    ...actions
}

export {
    searchActions, searchReducer
}