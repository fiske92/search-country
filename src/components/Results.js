import SingleCountry from './SingleCountry';
import { useCountriesContext } from './contexts/CountriesContext';

export default function Results() {
    const {countriesData} = useCountriesContext();

    console.log(countriesData);
    return

    return <div className='grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 dark:text-white'>
        {countriesData.countriesData.map((country, index) => {
            return <SingleCountry data={country} key={index} />
        })}
    </div>
}