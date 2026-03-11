import { NavHeader } from "./NavHeader"

export const Header = ({ isDark, setIsDark }) => {
    return (
        <header>
            <NavHeader isDark={isDark} setIsDark={setIsDark}/>
        </header>
    )
}