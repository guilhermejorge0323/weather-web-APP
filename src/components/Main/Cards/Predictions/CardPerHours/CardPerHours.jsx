import { Card } from "../../Card"
import { TitleCardPredictions } from "../TittleCardPredictions"
import { CardInfoHours } from "./CardInfoHours"

export const CardPerHours = () => {
    return (
        <Card>
            <TitleCardPredictions>Previsão por Hora</TitleCardPredictions>
            <div className="flex gap-4 overflow-x-auto pb-2">
                <CardInfoHours />
            </div>
        </Card>
    )
}