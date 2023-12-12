import { IoIosSearch } from "react-icons/io";
import { useCountriesContext } from "./contexts/CountriesContext";
import { useState, useEffect } from "react";

export default function InputTextSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const countriesContext = useCountriesContext();

    useEffect(() => {
        const debounce = setTimeout(() => {
            countriesContext.setCountriesParam(searchTerm)
        }, 1000);
        return () => clearTimeout(debounce);
    }, [searchTerm, countriesContext]);
    
    const onChangeHandle = e => {
        setSearchTerm(`name/${e.target.value}`);
    };

    return <div className="relative w-full md:w-[50%] mb-8 md:mb-0">
        <input value={searchTerm} onChange={onChangeHandle} type="text" className="dark:bg-gray-500 dark:text-white dark:placeholder:text-white dark:border-white text-md focus:outline focus:outline-gray-300 shadow-lg rounded pl-10 py-2 pr-2 w-full" placeholder="Search for a country..." />
        <IoIosSearch size={15} className="absolute left-3 top-[50%] translate-y-[-50%] dark:fill-white" />
    </div>
}