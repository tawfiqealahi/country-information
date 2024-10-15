import { useState } from 'react';
import './Country.css';

const Country = ({data, handleVisitedCountry, handleFlag}) => {
    const {name,flags,population,cca3,area} = data;

    const[visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(!visited);
    }
   

    return (
        <div className={`box ${visited&& "visitedCountry"}`}>
            <h2 style={{color: visited? 'purple': 'black'}} >Country Name: {name?.common}</h2>
            <h2>Country Code: {cca3}</h2>
            <h2>Area: {area}</h2>
            <h2>Population: {population} </h2>
           <button onClick={()=>{handleVisitedCountry(data)}}>Mark Visited</button> <br />
           <button onClick={()=>{handleFlag(data.flags.png)}}>add Visited Flag</button> <br />
            <button className='button' onClick={handleVisited} >{visited?'Visited':'Going'}</button> 
            {
                visited ? ' i have aleeady visited' : 'i want to check out this place'
            } 
            <img src={flags.png} alt="country image"  />


        </div>
    );
};

export default Country;