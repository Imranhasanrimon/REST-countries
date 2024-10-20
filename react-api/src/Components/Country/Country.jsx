
const Country = ({ country }) => {
    // console.log(country.currencies);
    console.log(country.currencies ? Object.keys(country?.currencies)[0] : null);
    return (
        <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-20 h-12 rounded-lg" src={country.flags.png} alt="" />
                    <h1 className="text-xl text-white font-semibold mt-2">{country.name.common} <span>{country.independent ? <img className="inline w-6" src="https://img.icons8.com/?size=100&id=102561&format=png&color=000000"></img> : <img className="inline w-6" src="https://img.icons8.com/?size=100&id=63688&format=png&color=000000"></img>}</span></h1>
                    <h5>{country.capital}</h5>

                </div>
                <div>
                    {
                        country.coatOfArms.png ? <img className="w-16 h-12" src={country.coatOfArms.png} alt="" /> : <span className="border h-16 w-16 rounded-full inline-flex items-center justify-center">N/A</span>
                    }
                </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-2 mt-3 space-y-2">
                <p className="bg-gray-900 rounded-lg p-3">Continent: {country.region}</p>
                <p className="bg-gray-900 rounded-lg p-3">Population: {country.population}</p>
                <p className="bg-gray-900 rounded-lg p-3">Area: {country.area}</p>
                <p className="bg-gray-900 rounded-lg p-3">Curencies: {country.currencies ? Object.keys(country?.currencies)[0] : null} {country.currencies ? ` ${Object.keys(country?.currencies)[2] ? ', ' + Object.keys(country?.currencies)[2] : ''}` : null}</p>
                {/* <p className="bg-gray-900 rounded-lg p-3">Area: {country.languages)}</p> */}
                {

                }
            </div>

        </div>
    );
};

export default Country;

