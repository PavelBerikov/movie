import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {youtubeActions} from "../redux";
import YouTube from "react-youtube";

const TrailerVideo = () => {
    const dispatch = useAppDispatch();
    const {response} = useAppSelector(state => state.youtube);
   /* useEffect(() => {
        dispatch(youtubeActions.getVideoId(query))
    }, [dispatch, query])*/
    const opts = {
        height: '550',
        width: '1100',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            fs: 0
        }
    }
    return (
        <div>
            <YouTube videoId={response&& response.items[0].id.videoId} opts={opts}/>
        </div>
    );
};

export {TrailerVideo};