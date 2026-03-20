export const OthersMetricInfo = ({ icon, label, value, unit }) => {
    return (
        <div className="flex justify-between dark:text-gray-300 text-gray-700">
            <div className="flex gap-2">
                {icon}
                <span className="text-sm ">{label}</span>
            </div>

            <div className="font-semibold">
                <span>{value}</span>
                <span>{unit}</span>
            </div>
        </div>
    )
}