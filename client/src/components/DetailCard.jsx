import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/index";
import './styles/DetailCard.css'

export default function DetailCard() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const myDog = useSelector((state) => state.detail);
  console.log("myDog: ", myDog);
  return (
    <div className="container_all_detail">
      <div className="container_nav">
        <Link to="/home">Volver al home</Link>
      </div>

      <div className="container_image_and_info">
        <div className="container_image">
          <img
            src={myDog.image}
            alt="img not found"
            width="350px"
            height="300px"
          />
        </div>

        <div className="container_info">
          {Object.keys(myDog).length !== 0 ? (
            <div>
              <h3>{myDog.name}</h3>
              <p>Temperamentos: {myDog.temperament}</p>
              <p>Peso: {myDog.weight.metric} Kg</p>
              <p>Altura: {myDog.height.metric}</p>
              <p>Años de vida: {myDog.life_span}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
