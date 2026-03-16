
import { Card } from "../Card"
import { InfoMainCard } from "./InforMainCard"
import { SunriseDetails } from "./SunriseDetails"
import { TitleMainCard } from "./TittleMainCard"

export const MainCard = () => {
    return (
        <Card>
            <TitleMainCard />
            <InfoMainCard />
            <SunriseDetails />
        </Card>
    )
}