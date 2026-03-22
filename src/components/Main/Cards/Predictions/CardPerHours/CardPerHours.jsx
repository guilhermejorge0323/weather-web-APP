import { Card } from "../../Card"
import { TitleCardPredictions } from "../TittleCardPredictions"
import { CardInfoHours } from "./CardInfoHours"
import { WeatherVariants } from "../../WeatherVariants"

export const CardPerHours = () => {

    const weatherIcon = WeatherVariants('32px', '32px');
    const hourlyDataMock = [
        { dt: 1, dt_txt: "03:00", main: { temp: 24 }, weather: [{ main: "Clear" }] },
        { dt: 2, dt_txt: "06:00", main: { temp: 22 }, weather: [{ main: "Rain" }] },
        { dt: 3, dt_txt: "09:00", main: { temp: 26 }, weather: [{ main: "Clouds" }] },
        { dt: 4, dt_txt: "12:00", main: { temp: 28 }, weather: [{ main: "Clear" }] },
        { dt: 5, dt_txt: "15:00", main: { temp: 27 }, weather: [{ main: "Clear" }] },
        { dt: 6, dt_txt: "18:00", main: { temp: 23 }, weather: [{ main: "Clouds" }] },
    ];

    return (
        <div className="mb-6">
            <Card>
                <TitleCardPredictions>Previsão por Hora</TitleCardPredictions>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {hourlyDataMock.map((item) => {
                        return <CardInfoHours key={item.dt} hours={item.dt_txt} icon={weatherIcon[`${item.weather[0].main}`].icon} temp={item.main.temp}/>
                    })}
                </div>
            </Card>
        </div>
    )
}