import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {FilterOfGenres} from "./FilterOfGenres";

const GenresSelectorPage = () => {
    const navigate = useNavigate();
    const [array, setArray] = useState<number[]>([]);
    console.log(array)
    return (
        <div>
            <div style={{cursor: 'pointer'}}
                onClick={() => {
                if (!array.includes(28)){
                    setArray([...array, 28])
                }else {
                    const id = array.indexOf(28);
                    array.splice(id)
                    console.log(array)
                }
            }}>Action</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => {
                     if (!array.includes(12)){
                         setArray([...array, 12])
                     }else {
                         const id = array.indexOf(12);
                         array.splice(id)
                         console.log(array)
                     }
                 }}>Adventure</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => {
                     if (!array.includes(16)){
                         setArray([...array, 16])
                     }else {
                         const id = array.indexOf(16);
                         array.splice(id)
                         console.log(array)
                     }
                 }}>Animation</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => {
                     if (!array.includes(35)){
                         setArray([...array, 35])
                     }else {
                         const id = array.indexOf(35);
                         array.splice(id)
                         console.log(array)
                     }
                 }}>Comedy</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => {
                     if (!array.includes(80)){
                         setArray([...array, 80])
                     }else {
                         const id = array.indexOf(80);
                         array.splice(id)
                         console.log(array)
                     }
                 }}>Crime</div>
            <button onClick={() => navigate('/genres')}>Search</button>
            <FilterOfGenres array={array}/>


        </div>
    );
};

export {GenresSelectorPage};