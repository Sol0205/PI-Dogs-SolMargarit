import React from "react";
import "./styles/Card.css";

export default function Card({ image, name, weight, temperament }) {
  return (
    <div className="container-card">
      <img src={image.url} alt="img not found" width="200px" height="250px" />
      <h3 className="title">{name}</h3>
      <p className="info-card">Peso: {weight.metric} Kg</p>
      <p className="info-card">Temperamentos: {temperament}</p>
    </div>
  );
}