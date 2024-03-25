import React, {FC, useEffect, useState} from 'react';
import {ISetState} from "../../types";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {SearchForm} from "./SearchForm";
import {Results} from "./Results";
import {useSearchParams} from "react-router-dom";
import {searchActions} from "../../redux";
import {SearchPagination} from "./SearchPagination";

const SearchResult: FC = () => {
    const dispatch = useAppDispatch();
    const {results, keyWord} = useAppSelector(state => state.search);
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        dispatch(searchActions.getSearch({query: query.get('keyword'), page: query.get('page')}))
    }, [query])
    return (
        <div>

            {
                results.map(result => <Results result={result} key={result.id}/>)
            }
            <SearchPagination/>
        </div>
    );
};

export {SearchResult};