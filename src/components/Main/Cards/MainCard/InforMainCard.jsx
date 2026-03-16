import { Cloud, Droplets, Eye, Umbrella, Wind } from "lucide-react"
import { WeatherVariants } from "../WeatherVariants"
import { DetailsMainCard } from "./DetailsMainCard"

export const InfoMainCard = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex gap-6 items-center">
                {WeatherVariants['Clear'].icon}
                <div className="">
                    <h2 className="text-7xl font-bold dark:text-white">24°</h2>
                    <p className="text-xl dark:text-gray-300 text-gray-700 mt-2">{WeatherVariants['Clear'].label}</p>
                    <p className="mt-1 dark:text-gray-400 text-gray-600 text-sm">Sensação térmica 26°</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <DetailsMainCard icon={<Droplets className="text-blue-500"/>} label={'Umidade'} value={50} unit={'%'} bgColor={`bg-blue-50/80`}/>
                <DetailsMainCard icon={<Wind className="text-cyan-600"/>} label={'Vento'} value={50} unit={' Km/h'} bgColor={`bg-cyan-50/80`}/>
                <DetailsMainCard icon={<Umbrella className="text-blue-600"/>} label={'chuva'} value={50} unit={'%'} bgColor={`bg-indigo-50/80`}/>
                <DetailsMainCard icon={<Eye className="text-purple-600"/>} label={'Visibilidade'} value={50} unit={' Km'} bgColor={`bg-purple-50/80`}/>
            </div>
        </div>
    )
}