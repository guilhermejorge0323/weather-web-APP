import { CardPerHours } from "./Cards/Predictions/CardPerHours/CardPerHours"
import { MainCard } from "./Cards/MainCard/MainCard"
import { MetricCards } from "./Cards/MetricCards/MetricCards"

export const Main = () => {
    return (
        <main>
            <MainCard />
            <MetricCards />
            <CardPerHours />
        </main>
    )
}