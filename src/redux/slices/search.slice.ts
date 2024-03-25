import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IResults, ISearch} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";
interface IParams{
    query: string;
    page: number
}
interface IState {
    page: number;
    prev: number;
    next: number;
    results: IResults[];
    total_page: number;
    keyWord: string

}
const initialState: IState = {
    page: null,
    prev: null,
    next: null,
    results: [],
    total_page: null,
    keyWord: null
};
const getSearch = createAsyncThunk<ISearch, {query: string, page:string| number}>(
    'searchSlice/getSearch',
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(query, page);
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
    reducers:{
        getKeyWord: (state, actions) => {
            state.keyWord = actions.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getSearch.fulfilled, (state, action) => {
            const {page, results, total_pages} = action.payload;
            state.results = results
            state.page = page
            state.total_page = total_pages
            if (page === 1){
                state.prev = null
                state.next = page + 1
            }if (page === total_pages){
                state.next = null
                state.prev = page - 1
            }else {
                state.prev = page - 1
                state.next = page + 1
            }

        })
    }
});

const {actions, reducer: searchReducer} = slice;
const searchActions = {
    ...actions,
    getSearch
}

export {
    searchActions, searchReducer
}