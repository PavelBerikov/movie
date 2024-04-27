import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ratingActions} from "../../redux";

const MyRatedMovies: FC = () => {
    const {movies} = useAppSelector(state => state.rating);
    const dispatch = useAppDispatch();
    if (movies){
        console.log(movies)
    }
    useEffect(() => {
        dispatch(ratingActions.getRatedMovies())
    }, [dispatch])
    return (
        <div>
            MyRatedMovies
        </div>
    );
};

export {MyRatedMovies};