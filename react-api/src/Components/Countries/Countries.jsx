import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 p-5">
            {
                countries.map((country, i) => <Country country={country} key={i}></Country>)
            }
        </div>
    );
};

export default Countries;