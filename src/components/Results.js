import { useContext } from 'react';
import SingleCountry from './SingleCountry';
import { CountriesContext } from './Body';

export default function Results() {
    const {countriesData} = useContext(CountriesContext);


    if (!countriesData || !countriesData.length) {
        return <div className='text-center m-auto mt-3'><span className='loader'></span></div>
    }
    
    return <div className='grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 dark:text-white'>
        {countriesData.length &&
            countriesData.map((country) => {
                return <SingleCountry data={country} key={country.name.common}/>
            })
        }
    </div>
}