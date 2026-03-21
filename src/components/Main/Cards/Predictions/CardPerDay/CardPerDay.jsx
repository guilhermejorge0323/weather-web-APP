import { Card } from "../../Card"
import { TitleCardPredictions } from "../TittleCardPredictions"
import { CardInfoDay } from "./CardInfoDay"

export const CardPerDay = () => {
    return (
        <div>
            <Card>
                <TitleCardPredictions>Previsão para 7 dias</TitleCardPredictions>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 min-w-0 overflow-hidden">
                    <CardInfoDay />
                    <CardInfoDay />
                    <CardInfoDay />
                    <CardInfoDay />
                    <CardInfoDay />
                    <CardInfoDay />
                    <CardInfoDay />
                </div>
            </Card>
        </div>
    )
}