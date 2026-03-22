import { Sunrise, Sunset } from "lucide-react"
import { SunriseInfo } from "./SunriseInfo"

export const SunriseDetails = ({ data }) => {

    const formatTime = (timeStamp) => {
        if(!timeStamp) return "--:--";
        const date = new Date(timeStamp * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    const sunrise = formatTime(data?.sys?.sunrise);
    const sunset = formatTime(data?.sys?.sunset);

    return (
        <div className="border-t border-slate-700 pt-6 grid md:grid-cols-3 grid-cols-2 gap-4">
            <SunriseInfo icon={<Sunrise className="text-orange-500 w-[28px] h-[28px]"/>} label="Nascer do Sol" info={sunrise}/>
            <SunriseInfo icon={<Sunset className="text-pink-500 w-[28px] h-[28px]"/>} label="Por do sol" info={sunset}/>
        </div>
    )
}