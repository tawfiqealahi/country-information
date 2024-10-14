import { useState } from 'react';
import './Country.css';

const Country = ({data}) => {
    const {name,flags,population,cca3,area} = data;

    const[visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(true);
    }

    return (
        <div className="box">
            <h2>Country Name: {name?.common}</h2>
            <h2>Country Code: {cca3}</h2>
            <h2>Area: {area}</h2>
            <h2>Population: {population} </h2>
            <button onClick={handleVisited} >visited</button>
            {
                visited ? 'i have aleeady visited' : 'i want to check out this place'
            } 
            <img src={flags.png} alt="country image"  />


        </div>
    );
};

export default Country;