import { ActivityIcon, Sun } from "lucide-react"
import { MetricCard } from "./MetricCard"
import { OthersMetricCard } from "./OthersMetricCard"


export const MetricCards = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MetricCard icon={<Sun className=" text-orange-500 h-6 w-6"/>} label="Indicie UV" value={data.uvIndex} type="uv"/>

            <MetricCard icon={<ActivityIcon className="text-green-500 h-6 w-6"/>} label="Qualidade do Ar" value={data.airQuality} type="air"/>

            <OthersMetricCard data={data}/>
        </div>
    )
}