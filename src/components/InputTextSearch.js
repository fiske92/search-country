import { useContext, useState, useEffect } from "react";
import { CountriesContext } from './Body';
import { IoIosSearch } from "react-icons/io";

export default function InputTextSearch() {
    const {setCountriesParam} = useContext(CountriesContext);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
          setCountriesParam(searchTerm ? `name/${searchTerm}` : 'all');
        }, 500);
    
        return () => clearTimeout(debounceTimer);
      }, [searchTerm, setCountriesParam]);

    return <div className="relative w-full md:w-[50%] mb-8 md:mb-0">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="dark:bg-gray-500 dark:text-white dark:placeholder:text-white dark:border-white text-md focus:outline focus:outline-gray-300 shadow-lg rounded pl-10 py-2 pr-2 w-full" placeholder="Search for a country..." />
        <IoIosSearch size={15} className="absolute left-3 top-[50%] translate-y-[-50%] dark:fill-white" />
    </div>
}