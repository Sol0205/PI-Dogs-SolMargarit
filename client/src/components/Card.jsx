import React from 'react'

export default function Card({ name, weight, height, image}) {
    return (
        <div className="">
            <p className="">{name}</p>
            <p>Peso: {weight.imperial}</p>
            <p>Altura: {height.imperial}</p>
            <img src={image.url} alt="img not found" width="200px" height="250px" />
        </div>
    )
}