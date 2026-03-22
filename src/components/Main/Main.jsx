import { CardPerHours } from "./Cards/Predictions/CardPerHours/CardPerHours"
import { MainCard } from "./Cards/MainCard/MainCard"
import { MetricCards } from "./Cards/MetricCards/MetricCards"
import { CardPerDay } from "./Cards/Predictions/CardPerDay/CardPerDay"

export const Main = ({ data }) => {

    return (
        <main>
            <MainCard data={data}/>
            <MetricCards />
            <CardPerHours />
            <CardPerDay />
        </main>
    )
}