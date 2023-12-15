export default function SingleCountry({ data }) {
    const {name, population, region, capital, flags} = data;

    return <div className="dark:border rounded overflow-hidden shadow-lg">
        <img className="h-[180px] md:h-[150px] w-full object-cover" src={flags?.png} alt={flags?.alt}/>
        <div className="p-4">
            <h3 className="font-bold mb-3">{name?.common}</h3>
            <p>Population: <span className="text-gray-500 dark:text-white">{population}</span></p>
            <p>Region: <span className="text-gray-500 dark:text-white">{region}</span></p>
            <p>Capital: <span className="text-gray-500 dark:text-white">{capital}</span></p>
        </div>
    </div>
}