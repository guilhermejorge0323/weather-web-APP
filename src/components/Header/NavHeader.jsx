import { Moon, Sun } from "lucide-react"

export const NavHeader = ({ isDark, setIsDark }) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold dark:text-white text-black md:text-4xl">Previsão do Tempo</h1>
            <button
                className="dark:bg-yellow-400 dark:hover:bg-yellow-500 bg-slate-800 hover:bg-slate-900 rounded-full p-3 transition-all duration-300"
                onClick={() => setIsDark(!isDark)}
            >
                {isDark ? (
                    <Sun className="dark:text-slate-900 w-6"/>
                ) : (
                    <Moon className="text-yellow-400 w-6"/>
                )}
            </button>
        </div>
    )
}