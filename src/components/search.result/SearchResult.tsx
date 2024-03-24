import React, {FC, useState} from 'react';
import {ISetState} from "../../types";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {SearchForm} from "./SearchForm";
import {Results} from "./Results";

const SearchResult: FC = () => {
    const [search, setSearch] = useState<ISetState<string>>(null);
    const dispatch = useAppDispatch();
    const {results} = useAppSelector(state => state.search);
    return (
        <div>
            <SearchForm/>
            {
                results.map(result => <Results result={result} key={result.id}/>)
            }
        </div>
    );
};

export {SearchResult};