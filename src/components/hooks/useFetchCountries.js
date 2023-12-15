import { useEffect, useState } from "react";

export default function useFetchCountries(param) {
    const [countries, setCountries] = useState(['loader']);
    const API_URL = `https://restcountries.com/v3.1/${param}`;

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })
            .catch(err => setCountries([]))
    }, [API_URL]);

    return [countries];
}
