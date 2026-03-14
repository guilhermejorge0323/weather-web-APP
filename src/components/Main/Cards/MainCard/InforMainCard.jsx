import { Cloud } from "lucide-react"
import { WeatherVariants } from "../WeatherVariants"

export const InfoMainCard = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 items-center">
                {WeatherVariants['Clear'].icon}
                <div className="">
                    <h2 className="text-7xl font-bold dark:text-white">24°</h2>
                    <p className="text-xl dark:text-gray-300 text-gray-700 mt-2">{WeatherVariants['Clear'].label}</p>
                    <p className="mt-1 dark:text-gray-400 text-gray-600 text-sm">Sensação térmica 26°</p>
                </div>
            </div>

            <div className="bg-amber-700">b</div>
        </div>
    )
}