import  { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const[info,setInfo]=useState([])
    const[visitedCountry,setVisitedCountry]=useState([]);
    const[visitedFlag,setVisitedFlag]=useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setInfo(data));
    },[]);

    const handleVisitedCountry=(country)=>{
        const newVisitedCountries=[...visitedCountry,country];
        setVisitedCountry(newVisitedCountries);
    }

    const handleFlag=(flag)=>{
        const newVisitedFlag = [...visitedFlag,flag]
        setVisitedFlag(newVisitedFlag)
    }
    return (
        <div>
            <h1 className="heading">Worlds {info.length}  Country Information</h1>
            <h3>Visited Country: {visitedCountry.length} </h3>
            {
                visitedCountry.map(country=><li key={country.cca3}>{country.name.common}</li>)
            }

           { /* display country flag*/}
           <div>
            <div className='flag-container'>
                {visitedFlag.map(flag=> <img src={flag} alt="flag"  />)}
            </div>
           </div>

            <div className="content">
               {
                info.map(country=> <Country key={country.cca3} data={country} 
                handleVisitedCountry={handleVisitedCountry} 
                handleFlag= {handleFlag}
                 > </Country>)
               }
            </div>
        </div>
    );
};

export default Countries;