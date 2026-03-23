import { Cloud, Gauge, ThermometerSun } from "lucide-react"
import { Card } from "../Card"
import { OthersMetricInfo } from "./OthersMetricInfo"

export const OthersMetricCard = ({ data }) => {

    //Calculo ponto de orvalho
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const dewPoint = Math.round(temp - (100 - humidity) / 5);

    return (
        <Card>
            <div className="max-h-[110px] min-h-[110px] h-full flex flex-col justify-between">
                <OthersMetricInfo icon={<Gauge className="text-indigo-500 w-4.5 h-4.5"/>} label={'Pressão'} value={data.main.pressure} unit={' hPa'}/>
                <OthersMetricInfo icon={<ThermometerSun className="text-red-500 w-4.5 h-4.5"/>} label={'Ponto de Orvalho'} value={dewPoint} unit={'°'}/>
                <OthersMetricInfo icon={<Cloud className="text-gray-500 w-4.5 h-4.5"/>} label={'Cobertura de Nuvens'} value={data.clouds.all} unit={'%'}/>
            </div>
        </Card>
    )
}