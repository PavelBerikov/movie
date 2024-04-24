import React from 'react';
import {useNavigate} from "react-router-dom";

const FullMenu = () => {
    const navigate = useNavigate();
    return (
        <div style={{margin: '10px', cursor: 'pointer', fontSize: '30px'}} onClick={() => navigate('/genres')}>
            Genres
        </div>
    );
};

export {FullMenu};