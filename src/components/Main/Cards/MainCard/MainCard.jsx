
import { Card } from "../Card"
import { InfoMainCard } from "./InforMainCard"
import { SunriseDetails } from "./SunriseDetails"
import { TitleMainCard } from "./TittleMainCard"

export const MainCard = ({ data }) => {
    return (
        <div className="mb-6">
            <Card>
                <TitleMainCard data={data}/>
                <InfoMainCard data={data}/>
                <SunriseDetails data={data}/>
            </Card>
        </div>
    )
}