import  { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
    const[info,setInfo]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setInfo(data));
    },[]);
    return (
        <div>
            <h1>Worlds {info.length}  Country Information</h1>
            <div>
               {
                info.map(country=> <Country key={country.cca3} data={country} > </Country>)
               }
            </div>
        </div>
    );
};

export default Countries;