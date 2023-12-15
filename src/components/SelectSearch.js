import { useContext } from "react";
import { CountriesContext } from "./Body";

export default function SelectSearch() {
    const {setCountriesParam} = useContext(CountriesContext);

    const handleOnChangeSelect = (e) => {
        e.target.value === 'default'
            ? setCountriesParam('all')
            : setCountriesParam(`region/${e.target.value}`);
    }

    return <select 
            className="dark:bg-gray-500 dark:text-white w-[70%] md:w-[unset] text-md shadow-lg rounded px-4 py-2 focus:outline focus:outline-gray-300"
            onChange={handleOnChangeSelect}
            >
        <option value='default'>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
    </select>
}