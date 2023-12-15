import { useContext } from 'react';
import SingleCountry from './SingleCountry';
import { CountriesContext } from './Body';

export default function Results() {
    const {countriesData} = useContext(CountriesContext);

    if (countriesData[0] === 'loader') return <span className='loader'></span>
    else if (!countriesData.length) return <p className='text-center dark:text-white mt-3'>We cannot find that country</p>
    
    return <div className='grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-6 dark:text-white'>
        {countriesData.map((country) => {
                return <SingleCountry data={country} key={country.name.common}/>
            })
        }
    </div>
}