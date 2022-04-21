import React from "react";

type TopCarsType = {
    topCars: carType[]
}
type carType = {
    manufacturer: string
    model: string
}

export const TopCars = (props: TopCarsType) => {
    return (
        <tbody>
        {props.topCars.map((objectCarType, index) => {
            return (
                <tr key={index}>
                    <td>{objectCarType.manufacturer}</td>
                    <td>{objectCarType.model}</td>
                </tr>
            )
        })}
        </tbody>
    )
}