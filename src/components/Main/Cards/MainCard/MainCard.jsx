
import { InfoMainCard } from "./InforMainCard"
import { TitleMainCard } from "./TittleMainCard"

export const MainCard = () => {
    return (
        <div className="dark:bg-slate-800/50 bg-white shadow-2xl p-6 md:p-8 rounded-3xl backdrop-blur-xl border border-slate-700/50 mb-6">
            <TitleMainCard />
            <InfoMainCard />
        </div>
    )
}