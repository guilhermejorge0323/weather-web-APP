export const DetailsMainCard = ({ icon, label, value, unit, bgColor }) => {
    return (
        <div className={`p-4 ${bgColor} rounded-xl dark:bg-slate-700/50`}>
            <div className="flex gap-2 mb-2 items-center">
                {icon} <span className="dark:text-gray-300 text-sm">{label}</span>
            </div>
            <span className="dark:text-white font-bold text-xl">{value}{unit}</span>
        </div>
    )
}