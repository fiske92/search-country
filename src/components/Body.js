import { createContext, useState } from "react";
import Container from "./UI/Container";
import Search from "./Search";
import Results from "./Results";
import useFetchCountries from "./hooks/useFetchCountries";

export const CountriesContext = createContext();

export default function Body() {
    const [countriesParam, setCountriesParam] = useState('all')
    const [countriesData] = useFetchCountries(countriesParam);

    return <main className="border-t">
        <Container>
            <CountriesContext.Provider value={{
                setCountriesParam,
                countriesData
            }}>
                <Search />
                <Results /> 
            </CountriesContext.Provider>
        </Container>
    </main>
}