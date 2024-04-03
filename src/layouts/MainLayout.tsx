import React from 'react';
import {HomePage} from "../pages/HomePage";


const MainLayout = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <HomePage/>
        </div>
    );
};

export {MainLayout};