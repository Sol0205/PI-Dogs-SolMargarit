import React from "react";
import { Link } from "react-router-dom";
// importo los hooks que voy a usar de React
import { useEffect, useState } from "react";
// importo los hooks de react-redux (lo instalo como 'npm i react-redux')
import { useDispatch, useSelector } from "react-redux";
// importo las actions que me interesa usar en este componente
import {
  getDogs,
  filterDogsByTemperaments,
  filterCreated,
  orderByName,
  orderByKg,
} from "../actions";
//import los componentes que voy a usar
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import "./styles/Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("asc"); //[orden, ...]
  const [ordenKG, setOrdenByKG] = useState(""); //[ordenKG, ...]
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1); //mi pagina actual que va a arrancar en 1
  const [dogsPorPage] = useState(8); //[..., setDogsPorPage]   //mis perros por pagina que van a arrancar siendo 8
  const indexOfLastDog = currentPage * dogsPorPage; //tengo el indice del ultimo perro que es, mi pagina por los perros por pagina //8
  const indexOfFirstDog = indexOfLastDog - dogsPorPage; //tengo el indice de mi primer perro que va a ser, el indice del ultimo perro menos la cantidad de perros por pagina //0
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog); //slice = agarra el arreglo, toma una porcion de lo que yo le estoy pasando por paramentro

  const paginado = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(evento) {
    evento.preventDefault();
    dispatch(getDogs());
  }

  function handleFilterTemperaments(event) {
    dispatch(filterDogsByTemperaments(event.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleSortByKG(e) {
    e.preventDefault();
    dispatch(orderByKg(e.target.value));
    setCurrentPage(1);
    setOrdenByKG(e.target.value);
  }

  return (
    <div className="container_home">
      <div className="container_nav">
        <Link to="/">Volver a la LandingPage</Link>
        <Link to="/home/DogCreate">Crear Perro</Link>
      </div>
      <div className="container_filters_and_cards">
        <div className="container_filters">
          <SearchBar />

          <button
            onClick={(evento) => {
              handleClick(evento);
            }}
          >
            Volver a cargar todos los perros
          </button>

          <select value={orden} onChange={(e) => handleSort(e)}>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>

          <select value={ordenKG} onChange={(e) => handleSortByKG(e)}>
            <option value=""> nada </option>
            <option value="minKG"> - KG </option>
            <option value="maxKG"> + KG </option>
          </select>

          <select onChange={(event) => handleFilterTemperaments(event)}>
            <option value="allTemperaments">Todos los temperamentos</option>
            <option value="Playful">Jugueton</option>
            <option value="Composed">Sereno</option>
            <option value="Independent">Independiente</option>
            <option value="Dutiful">Obediente</option>
            <option value="Alert">Alerta</option>
            <option value="Loyal">Leal</option>
            <option value="Courageous">Valiente</option>
            <option value="Stubborn">Terco</option>
            <option value="Trainable">Entrenable</option>
            <option value="Protective">Protector</option>
          </select>

          <select onChange={(e) => handleFilterCreated(e)}>
            <option value="all">Todos</option>
            <option value="created">Creados</option>
            <option value="api">Existentes</option>
          </select>
        </div>

        <div className="container_cards">
          {currentDogs?.map((el) => {
            return <Card dog={el} key={el.id} />;
          })}
          <div className="container_paginado">
            <Paginado
              dogsPorPage={dogsPorPage}
              allDogs={allDogs.length}
              paginado={paginado}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
