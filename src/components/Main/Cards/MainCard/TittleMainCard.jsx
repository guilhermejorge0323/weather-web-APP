
import { MapPin } from "lucide-react"

export const TitleMainCard = ({ data }) => {
    return (
        <div className="flex items-center gap-2 mb-6">
            <MapPin className="text-blue-400 w-[20px] h-[20px]"/>
            <h1 className="dark:text-white font-semibold text-xl md:text-2xl">{data.cityName}, {data.state}</h1>
        </div>
    )
}