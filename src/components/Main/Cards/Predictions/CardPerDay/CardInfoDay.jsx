import { Droplets } from "lucide-react"
import { CardInfo } from "../CardInfo"

export const CardInfoDay = ({ day, icon, maxTemp, minTemp, humidity }) => {
    return (
        <CardInfo width={"100%"} height={"192px"}>
            <div className="flex flex-col bg h-full">
                <span className="text-center font-semibold mb-3">{day}</span>
                <div className="flex justify-center mb-3">
                    {icon}
                </div>
                <div className="flex flex-col items-center mb-2">
                    <span className="text-lg font-semibold">{maxTemp}°</span>
                    <span className="text-sm ">{minTemp}°</span>
                </div>
                <div className="flex justify-center gap-1 items-center">
                    <Droplets className="text-blue-500" style={{ width: "14px", height: "14px" }}/>
                    <span className="text-xs dark:text-gray-400 text-gray-600">{humidity}%</span>
                </div>
            </div>
        </CardInfo>
    )
}