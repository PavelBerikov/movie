import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../hooks";

const SearchPagination = () => {
    const [, setQuery] = useSearchParams();
    const {total_page} = useAppSelector(state => state.search);
    const prevPage = () => {
        setQuery(prev1 => ({...prev1, keyword: prev1.get('keyword') ,page: +prev1.get('page') -1}))
    };
    const nextPage = () => {
        setQuery(prev1 => ({...prev1,keyword: prev1.get('keyword') , page: +prev1.get('page') +1}))
    };
    return (
        <div>
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
            {total_page &&
                <span>total page - {total_page}</span>
            }
        </div>
    );
};

export {SearchPagination};