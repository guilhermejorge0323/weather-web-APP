import { Cloud, Gauge, ThermometerSun } from "lucide-react"
import { Card } from "../Card"
import { OthersMetricInfo } from "./OthersMetricInfo"

export const OthersMetricCard = () => {
    return (
        <Card>
            <div className="max-h-[110px] min-h-[110px] h-full flex flex-col justify-between">
                <OthersMetricInfo icon={<Gauge className="text-indigo-500 w-4.5 h-4.5"/>} label={'Pressão'} value={'1013 '} unit={'hPa'}/>
                <OthersMetricInfo icon={<ThermometerSun className="text-red-500 w-4.5 h-4.5"/>} label={'Ponto de Orvalho'} value={'17'} unit={'°'}/>
                <OthersMetricInfo icon={<Cloud className="text-gray-500 w-4.5 h-4.5"/>} label={'Cobertura de Nuvens'} value={'45'} unit={'%'}/>
            </div>
        </Card>
    )
}