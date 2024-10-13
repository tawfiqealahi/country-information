import './Country.css';

const Country = ({data}) => {
    const {name,flags,population,cca3} = data;
    return (
        <div className="box">
            <h2>Country Name: {name?.common}</h2>
            <h2>Country Code: {cca3}</h2>
            <h2>Population: {population} </h2>
            <img src={flags.png} alt="country image"  />

        </div>
    );
};

export default Country;