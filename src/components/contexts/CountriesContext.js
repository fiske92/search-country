import { createContext, useContext } from "react";

export const CountriesContext = createContext();

export const useCountriesContext = () => {
    return useContext(CountriesContext);
}