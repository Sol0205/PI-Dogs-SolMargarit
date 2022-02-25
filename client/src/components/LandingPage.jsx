import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div>
            <h1>Esta es la LandingPage</h1>
            <Link to='/home'>
                Ingresar
            </Link>
        </div>
    )
}