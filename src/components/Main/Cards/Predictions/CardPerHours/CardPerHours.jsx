import { Card } from "../../Card"
import { TitleCardPredictions } from "../TittleCardPredictions"
import { CardInfoHours } from "./CardInfoHours"
import { WeatherVariants } from "../../WeatherVariants"

export const CardPerHours = ({ data }) => {

    if(!data || !data.hourly) return null;

    const weatherIcon = WeatherVariants('32px', '32px');

    return (
        <div className="mb-6">
            <Card>
                <TitleCardPredictions>Previsão por Hora</TitleCardPredictions>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {data.hourly.map((item) => {
                        const hoursFormated = item.dt_txt.split(' ')[1].substring(0,5);
                        return <CardInfoHours key={item.dt} hours={hoursFormated} icon={weatherIcon[`${item.weather[0].main}`].icon} temp={Math.round(item.main.temp)}/>
                    })}
                </div>
            </Card>
        </div>
    )
}