import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {searchActions} from "../../redux";
import {Movie} from "../Movie";

const SearchResults = () => {
    const {photoURL} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {results} = useAppSelector(state => state.search);
    const [query] = useSearchParams();
    useEffect(() => {
        dispatch(searchActions.getResult({query: query.get('keyword'), page: query.get('page')}))
    }, [query, dispatch])
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
            {
                results.map(result => <Movie movie={result} photoURL={photoURL} key={result.id}/>)
            }


        </div>
    );
};

export {SearchResults};