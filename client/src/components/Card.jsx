import React from "react";
import { Link } from "react-router-dom"
import "./styles/Card.css";

export default function Card({ dog: { image, name, weight, temperament, id} }) {
  return (
    <div className="container-card">
        <img src={image.url} alt="img not found" width="250px" height="200px" />
        <h3 className="title">{name}</h3>
        <p className="info-card">Peso: {weight.metric} Kg</p>
        <p className="info-card">Temperamentos: {temperament}</p>
        <Link className="wrapper-card" to={"/home/" + id}>Ver mas</Link>
    </div>
  );
}