import { Card } from "../../Card"
import { TitleCardPredictions } from "../TittleCardPredictions"

export const CardPerHours = () => {
    return (
        <Card>
            <TitleCardPredictions>Previsão por Hora</TitleCardPredictions>
            <div className="flex gap-4 overflow-x-auto pb-2">
                
            </div>
        </Card>
    )
}