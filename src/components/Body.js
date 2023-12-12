import Container from "./UI/Container";
import Search from "./Search";
import Results from "./Results";
import { CountriesContext } from "./contexts/CountriesContext";
import { useState } from "react";
import useFetchCountries from "./hooks/useFetchCountries";

export default function Body() {
    const [countriesParam, setCountriesParam] = useState('all')
    const countriesData = useFetchCountries(countriesParam);

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