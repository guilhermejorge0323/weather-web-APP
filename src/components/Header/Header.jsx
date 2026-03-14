import { FormHeader } from "./FormHeader"
import { NavHeader } from "./NavHeader"

export const Header = ({ isDark, setIsDark }) => {
    return (
        <header className="mb-8">
            <NavHeader isDark={isDark} setIsDark={setIsDark} />
            <FormHeader />
        </header>
    )
}