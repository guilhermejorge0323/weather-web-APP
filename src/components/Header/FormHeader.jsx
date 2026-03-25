import { Search } from "lucide-react"
import { useState } from "react";

export const FormHeader = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSearch(inputValue);
            setInputValue
        }
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex items-center dark:bg-slate-800 w-full max-w-md rounded-full m-auto relative shadow-xl  bg-white">
                    <input
                        type="text"
                        className="flex-1 bg-transparent dark:text-white w-full px-4 py-3  rounded-full"
                        placeholder="Buscar a cidade..."
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="rounded-full bg-blue-600 p-2 absolute right-1.5">
                        <Search className="text-white"/>
                    </button>
            </form>
        </div>
    )
}