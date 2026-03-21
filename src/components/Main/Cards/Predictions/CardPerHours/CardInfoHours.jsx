import { CardInfo } from "../CardInfo"

export const CardInfoHours = ({hours, icon, temp}) =>  {
    return (
        <>
        <CardInfo height={'140px'} width={'100px'}>
            <div className="flex flex-col gap-3 justify-center text-center font-semibold">
                <span>{hours}</span>
                <div className="flex justify-center">{icon}</div>
                <span className="text-lg">{temp}°</span>
            </div>
        </CardInfo>
        </>
    )
}