import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

const FilterByCountPagination: FC = () => {
    const {prev, next} = useAppSelector(state => state.movies);
    const [query,setQuery] = useSearchParams();
    const prevPage = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') - 1}))
    };
    const nextPage = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}))
    };

    const first = parseInt(query.get('page'))
    const second = first + 1
    const third = first + 2
    const changeFirst = () => {
        setQuery(prev1 => ({...prev1, page: first}))
    };
    const changeSecond = () => {
        setQuery(prev1 => ({...prev1, page: second}))
    };
    const changeThird = () => {
        setQuery(prev1 => ({...prev1, page: third}))
    };
    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            {
                first > 5&&
                <span style={{cursor: 'pointer'}} onClick={() => setQuery({page: '1'})}>1...</span>
            }
            <span style={{cursor: 'pointer'}} onClick={changeFirst}>{first}</span>,
            <span style={{cursor: 'pointer'}} onClick={changeSecond}>{second}</span>,
            <span style={{cursor: 'pointer'}} onClick={changeThird}>{third}</span>
            <button disabled={!next} onClick={nextPage}>next</button>

        </div>
    );
};

export {FilterByCountPagination};