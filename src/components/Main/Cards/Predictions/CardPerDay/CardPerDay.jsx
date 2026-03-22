import { Sun } from "lucide-react"
import { Card } from "../../Card"
import { TitleCardPredictions } from "../TittleCardPredictions"
import { CardInfoDay } from "./CardInfoDay"
import { WeatherVariants } from "../../WeatherVariants";

const weatherIcon = WeatherVariants('40px', '40px');
const dailyForecastMock = [
  {
    dt: 1711022400,
    day: "Seg",
    temp: { max: 26, min: 18 },
    weather: [{ main: "Clear" }],
    pop: 0.10 // 10% de probabilidade de chuva
  },
  {
    dt: 1711108800,
    day: "Ter",
    temp: { max: 24, min: 19 },
    weather: [{ main: "Rain" }],
    pop: 0.85
  },
  {
    dt: 1711195200,
    day: "Qua",
    temp: { max: 22, min: 17 },
    weather: [{ main: "Clouds" }],
    pop: 0.40
  },
  {
    dt: 1711281600,
    day: "Qui",
    temp: { max: 28, min: 20 },
    weather: [{ main: "Clear" }],
    pop: 0.05
  },
  {
    dt: 1711368000,
    day: "Sex",
    temp: { max: 27, min: 19 },
    weather: [{ main: "Clear" }],
    pop: 0.0
  },
  {
    dt: 1711454400,
    day: "Sáb",
    temp: { max: 25, min: 18 },
    weather: [{ main: "Clouds" }],
    pop: 0.20
  },
  {
    dt: 1711540800,
    day: "Dom",
    temp: { max: 23, min: 17 },
    weather: [{ main: "Rain" }],
    pop: 0.90
  },
];


export const CardPerDay = () => {
    return (
        <div>
            <Card>
                <TitleCardPredictions>Previsão para 7 dias</TitleCardPredictions>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 min-w-0 overflow-hidden">
                    {dailyForecastMock.map((item, index) => {
                        return <CardInfoDay key={index} day={item.day} icon={weatherIcon[`${item.weather[0].main}`].icon} maxTemp={item.temp.max} minTemp={item.temp.min} humidity={item.pop * 100}/>
                    })}
                </div>
            </Card>
        </div>
    )
}