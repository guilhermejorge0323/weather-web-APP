import { Moon, Sunrise, Sunset } from "lucide-react"
import { SunriseInfo } from "./SunriseInfo"

export const SunriseDetails = () => {
    return (
        <div className="border-t border-slate-700 pt-6 grid md:grid-cols-3 grid-cols-2 gap-4">
            <SunriseInfo icon={<Sunrise className="text-orange-500 w-[28px] h-[28px]"/>} label="Nascer do Sol" info="18:30"/>
            <SunriseInfo icon={<Sunset className="text-pink-500 w-[28px] h-[28px]"/>} label="Por do sol" info="18:30"/>
            <SunriseInfo icon={<Moon className="text-indigo-500 w-[28px] h-[28px]"/>} label="Lua" info="Crescente"/>
        </div>
    )
}