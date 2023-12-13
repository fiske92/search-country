import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import Container from "./UI/Container";

export default function Header({darkMode, setDarkMode}) {
    const themeModeText = darkMode ? 'Light Mode' : 'Dark Mode';
    const themeModeIcon = darkMode ? <IoSunnyOutline /> : <IoMoonOutline />

    return <Container>
        <header className="flex justify-between items-center dark:text-white">
            <h1 className="font-bold text-md md:text-xl">Where in the world?</h1>
            <div className="flex items-center cursor-pointer select-none" onClick={() => setDarkMode(!darkMode)}>
                {themeModeIcon}
                <span className="ml-2 text-sm font-semibold">{themeModeText}</span>
            </div>
        </header>
    </Container>
}