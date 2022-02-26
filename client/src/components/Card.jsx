import React from 'react'
import './styles/Card.css'

export default function Card({ name, weight, height, image}) {
    return (
        <div className="container-card">
            <img src={image.url} alt="img not found" width="200px" height="250px" />
            <h3 className="title">{name}</h3>
            <p className="info-card">Peso: {weight.imperial} Kg</p>
            <p className="info-card">Altura: {height.imperial} Cm</p>
            <a href="d etall">Leer Màs</a>
        </div>
    )
}