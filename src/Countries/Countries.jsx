import  { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const[info,setInfo]=useState([])
    const[visitedCountry,setVisitedCountry]=useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setInfo(data));
    },[]);

    const handleVisitedCountry=(country)=>{
        console.log('add this to your visited country list')
        console.log(country)
    }
    return (
        <div>
            <h1 className="heading">Worlds {info.length}  Country Information</h1>
            <h3>Visited Country: </h3>
            <div className="content">
               {
                info.map(country=> <Country key={country.cca3} data={country} handleVisitedCountry={handleVisitedCountry} > </Country>)
               }
            </div>
        </div>
    );
};

export default Countries;