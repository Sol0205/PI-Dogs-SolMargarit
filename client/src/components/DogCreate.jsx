import React from 'react'
import { Link } from 'react-router-dom'

export default function DogCreate() {
    return (
        <div>
            <h1>Aca se crean los perros</h1>
            <Link to='/home'>
                Volver al home
            </Link>
            <br/>
            <Link to='/'>
                Ir a la LandingPage
            </Link>
        </div>
    )
}