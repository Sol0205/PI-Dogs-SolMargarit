import React from 'react'
import './styles/Paginado.css'

export default function Paginado({dogsPorPage, allDogs, paginado}){
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(allDogs/dogsPorPage); i++){
        pageNumbers.push(i+1)
    }
    return (
        <nav className="content">
            <ul className="paginacion">
                { pageNumbers &&
                pageNumbers.map(number => (
                    <div className="active" key={number}>
                        <button className="botones-paginado" onClick= {() => paginado(number)}>{number}</button>
                    </div>
                ))}
            </ul>
        </nav>
    )
}