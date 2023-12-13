export default function SingleCountry({data}) {
    return <div className="dark:border rounded overflow-hidden">
        <img className="max-h-[150px] md:max-h-[85px] w-full object-cover" src={data.flags?.png} alt={data.flags?.alt}/>
        <div className="p-4">
            <h3 className="font-bold mb-3">{data.name?.common}</h3>
            <p>Population: <span className="text-gray-500 dark:text-white">{data.population}</span></p>
            <p>Region: <span className="text-gray-500 dark:text-white">{data.region}</span></p>
            <p>Capital: <span className="text-gray-500 dark:text-white">{data.capital}</span></p>
        </div>
    </div>
}