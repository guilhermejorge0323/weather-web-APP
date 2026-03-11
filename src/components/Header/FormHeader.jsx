import { Search } from "lucide-react"

export const FormHeader = () => {
    return (
        <div className="w-full">
            <form className="flex items-center dark:bg-slate-800 w-full max-w-md rounded-full m-auto relative shadow-xl  bg-white">
                    <input type="text" className="flex-1 bg-transparent dark:text-white w-full px-4 py-3  rounded-full" placeholder="Buscar a cidade..."/>
                    <button className="rounded-full bg-blue-600 p-2 absolute right-1.5">
                        <Search className="text-white"/>
                    </button>
            </form>
        </div>
    )
}