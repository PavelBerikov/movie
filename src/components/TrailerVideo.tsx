import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {youtubeActions} from "../redux";
import YouTube from "react-youtube";

const TrailerVideo = () => {
    const dispatch = useAppDispatch();
    const {response} = useAppSelector(state => state.youtube);
    console.log(response)
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
    const title = localStorage.getItem('title')
    useEffect(() => {
        dispatch(youtubeActions.getVideoId(title))
    })
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '80%',
            height: '80%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // затемнение
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <YouTube videoId={response&& response.items[0].id.videoId} opts={opts}/>
        </div>
    );
};

export {TrailerVideo};