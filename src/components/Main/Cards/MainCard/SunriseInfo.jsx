export const SunriseInfo = ({ icon, label, info }) => {
    return (
        <div className="flex items-center gap-3">
            {icon}
            <div>
                <p className="text-gray-400 text-sm">{label}</p>
                <p className="dark:text-white font-semibold">{info}</p>
            </div>
        </div>
    )
}