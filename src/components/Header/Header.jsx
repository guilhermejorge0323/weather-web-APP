import { FormHeader } from "./FormHeader"
import { NavHeader } from "./NavHeader"

export const Header = ({ isDark, setIsDark, onSearch }) => {
    return (
        <header className="mb-8">
            <NavHeader isDark={isDark} setIsDark={setIsDark} />
            <FormHeader onSearch={onSearch} />
        </header>
    )
}