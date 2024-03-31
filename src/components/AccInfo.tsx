import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {accActions} from "../redux";

const AccInfo = () => {
    const {include_adult, name, avatar, username, id} = useAppSelector(state => state.acc);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(accActions.getInfo())
    }, [dispatch])

    return (
        <div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{JSON.stringify(include_adult)}</div>
            <div>{id}</div>
            <img src={`https://image.tmdb.org/t/p/w500/g0bTeCIK772GIJN6oI3YNzlJCyB.jpg`}/>
        </div>
    );
};

export {AccInfo};