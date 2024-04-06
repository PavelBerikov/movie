import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {youtubeActions} from "../redux";
import YouTube from "react-youtube";

const TrailerVideo = () => {
    const dispatch = useAppDispatch();
    const {movieTitle} = useAppSelector(state => state.movies);
    const {response} = useAppSelector(state => state.youtube);
    const query = `${movieTitle} official trailer`
    useEffect(() => {
        dispatch(youtubeActions.getVideoId(query))
    }, [dispatch, query])
    if (response){
        console.log(response.items[0].id.videoId)
    }
    const opts = {
        height: '480',
        width: '720',
        playerVars: {
            autoplay: 1,
        }
    }
    return (
        <div>
            <YouTube videoId={response&& response.items[0].id.videoId} opts={opts}/>
        </div>
    );
};

export {TrailerVideo};