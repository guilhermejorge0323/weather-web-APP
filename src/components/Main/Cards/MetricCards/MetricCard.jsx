import { Card } from "../Card"
import { ProgressBarMetric } from "./ProgressBarMetric";

export const MetricCard = ({ icon, label, value, type }) => {
    const getStatus = (val, metricType) => {
        if(metricType === "uv") {
            if (val <= 2) return ( <p className="text-sm font-semibold text-orange-500">Baixo</p> );
            if (val <= 5) return ( <p className="text-sm font-semibold text-orange-500">Moderado</p> );
            if (val <= 7) return ( <p className="text-sm font-semibold text-red-500">Alto</p> );
            return ( <p className="text-sm font-semibold text-red-500">Muito Alto</p>);
        }

        if(metricType === "air") {
            if (val <= 50) return ( <p className="text-sm font-semibold text-yellow-500">Boa</p> );
            if (val <= 100) return ( <p className="text-sm font-semibold text-yellow-500">Moderada</p> );
            if (val <= 150) return ( <p className="text-sm font-semibold text-yellow-600">Alerta</p> );
            if (val <= 200) return ( <p className="text-sm font-semibold text-red-500">Insalubre</p> );
            if (val <= 300) return ( <p className="text-sm font-semibold text-red-500">Muito insalubre</p> );
            if (val <= 500) return ( <p className="text-sm font-semibold text-red-500">Perigo</p> );
        }
    }

    const getBgIcon = () => {
        if (type === "uv") {
            return "dark:bg-orange-500/25 bg-orange-100"
        } else if (type === "air") {
            return "dark:bg-green-500/25 bg-green-100"
        }
    }

    return (
        <Card>
            <div className="max-h-[110px] min-h-[110px]">
                <div className="flex gap-4 mb-4">
                    <div className={`p-3  rounded-full ${getBgIcon()}`} style={{ width: "48px", height: "48px" }}>
                        {icon}
                    </div>
                    <div>
                        <p className="dark:text-gray-400 text-gray-600 text-sm">{label}</p>
                        <p className="dark:text-white text-gray-900 text-2xl font-bold">{value}</p>
                    </div>
                </div>

                <div>
                    {getStatus(value, type)}
                    <ProgressBarMetric value={value} type={type} />
                </div>
            </div>
        </Card>
    )
}