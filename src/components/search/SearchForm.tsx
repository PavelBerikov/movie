import React from 'react';

const SearchForm = () => {
    return (
        <div style={{display: 'flex', marginRight: '10px'}}>
            <input type="text" placeholder={'search...'}/>
            <button>Go!</button>
        </div>
    );
};

export {SearchForm};