import InputTextSearch from "./InputTextSearch";
import SelectSearch from "./SelectSearch";

export default function Search() {
    return <div className="flex flex-col md:flex-row justify-between py-3 md:py-6">
        <InputTextSearch />
        <SelectSearch />
    </div>
}
