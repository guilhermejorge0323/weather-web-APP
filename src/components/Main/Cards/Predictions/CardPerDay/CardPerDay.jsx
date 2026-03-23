import { Sun } from "lucide-react"
import { Card } from "../../Card"
import { TitleCardPredictions } from "../TittleCardPredictions"
import { CardInfoDay } from "./CardInfoDay"
import { WeatherVariants } from "../../WeatherVariants";

export const CardPerDay = ({ data }) => {
    if(!data || !data.daily) return null;
    const weatherIcon = WeatherVariants('40px', '40px');

    //Formatar dia
    const formartDayName = (timeStamp) => {
      const date = new Date(timeStamp * 1000);
      return new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(date).replace('.','');
    }

    return (
        <div>
            <Card>
                <TitleCardPredictions>Previsão para 5 dias</TitleCardPredictions>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-w-0 overflow-hidden">
                    {data.daily.slice(0,5).map((item, index) => {
                        const dayName = index === 0 ? 'Hoje' : formartDayName(item.dt);

                        return <CardInfoDay key={item.dt} day={dayName.charAt(0).toUpperCase() + dayName.slice(1)} icon={weatherIcon[`${item.weather[0].main}`].icon} maxTemp={Math.round(item.main.temp_max)} minTemp={Math.round(item.main.temp_min)} humidity={Math.round(item.pop * 100)}/>
                    })}
                </div>
            </Card>
        </div>
    )
}