import React from 'react'

export default function Card({ name, weight, height, image}) {
    return (
        <div>
            <h3>{name}</h3>
            {/* <h4>{weight}</h4> */}
            {/* <h5>{height}</h5> */}
            <img src={image} alt="img not found" width="200px" height="250px" />
        </div>
    )
}