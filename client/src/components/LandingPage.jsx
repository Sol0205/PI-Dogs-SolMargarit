import React from "react"
import { Link } from "react-router-dom"
import "./styles/LandingPage.css"

export default function LandingPage() {
  return (
    <div className="container_landing">
        <h1 className="titulos">Welcome to the Dogs App</h1>
        <span className="wrapper-link">
          <Link className="link" to="/home">
            Ingresar
          </Link>
        </span>
    </div>
  )
}