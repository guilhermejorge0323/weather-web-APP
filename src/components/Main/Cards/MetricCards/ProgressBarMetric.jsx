export const ProgressBarMetric = ({ value, type }) => {
    const maxValues = {
        uv: 10,
        air: 500
    }

    const maxValue = maxValues[type];

    const percent = Math.min((value / maxValue) * 100, 100);

    const getColor = ()  => {
        if (type === 'uv') {
            return 'bg-orange-500'
        }else if (type === 'air') {
            return 'bg-yellow-500'
        }
    }

    return (
        <div className="w-full rounded-full h-2 mt-2 bg-gray-600/30">
            <div className={`h-2 rounded-full transition-all ease-out duration-700 ${getColor()}`} style={{ width: `${percent}%` }}></div>
        </div>
    )
}