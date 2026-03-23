import { Droplets, Eye, Umbrella, Wind } from "lucide-react"
import { WeatherVariants } from "../WeatherVariants"
import { DetailsMainCard } from "./DetailsMainCard"

export const InfoMainCard = ({ data }) => {

    const variant = data?.weather[0]?.main || 'Clear';
    const weatherIcon = WeatherVariants('100px', '100px');

    return (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex gap-6 items-center">
                {weatherIcon[variant]?.icon}
                <div className="">
                    <h2 className="text-7xl font-bold dark:text-white">{Math.round(data.main.temp)}°</h2>
                    <p className="text-xl dark:text-gray-300 text-gray-700 mt-2">{weatherIcon[variant]?.label}</p>
                    <p className="mt-1 dark:text-gray-400 text-gray-600 text-sm">Sensação térmica {Math.round(data.main.feels_like)}°</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <DetailsMainCard icon={<Droplets className="text-blue-500"/>} label={'Umidade'} value={data.main.humidity} unit={'%'} bgColor={`bg-blue-50/80`}/>
                <DetailsMainCard icon={<Wind className="text-cyan-600"/>} label={'Vento'} value={(data.wind.speed * 3.6).toFixed(0)} unit={' Km/h'} bgColor={`bg-cyan-50/80`}/>
                <DetailsMainCard icon={<Umbrella className="text-blue-600"/>} label={'chuva'} value={data.pop ? Math.round(data.pop * 100) : 0} unit={'%'} bgColor={`bg-indigo-50/80`}/>
                <DetailsMainCard icon={<Eye className="text-purple-600"/>} label={'Visibilidade'} value={(data.visibility / 1000).toFixed(0)} unit={' Km'} bgColor={`bg-purple-50/80`}/>
            </div>
        </div>
    )
}