import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDogs } from '../actions';
import Card from './Card';
import './styles/Home.css';


export default function Home(){
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)

    useEffect(() => {
        dispatch(getDogs())
    },[dispatch])

    function handleClick(evento){
        evento.preventDefault()
        dispatch(getDogs())
    }

    return (
        <div className="container_home">

            <Link to='/home/DogCreate' >
                Crear Perro
            </Link>

            <h1> Esta es el Home, acá van las cards, etc </h1>

            <button onClick={evento=>{handleClick(evento)}}>
                Volver a cargar todos los perros
            </button>

            <div>
                <select>
                    <option value= 'asc'>Ascendente</option>
                    <option value= 'desc'>Descendente</option>
                </select>
                <select>
                    <option value= 'allTemperaments'>Todos los temperamentos</option>
                    <option value= 'Playful'>Jugueton</option>
                    <option value= 'Composed'>Sereno</option>
                    <option value= 'Independent'>Independiente</option>
                    <option value= 'Dutiful'>Obediente</option>
                    <option value= 'Alert'>Alerta</option>
                    <option value= 'Loyal'>Leal</option>
                    <option value= 'Courageous'>Valiente</option>
                    <option value= 'Stubborn'>Terco</option>
                    <option value= 'Trainable'>Entrenable</option>
                    <option value= 'Protective'>Protector</option>
                </select>
                <select>
                    <option value= 'all/Api/Created'>Todos</option>
                    <option value= 'created'>Creados</option>
                    <option value= 'api'>Existentes</option>
                </select>
                
                {
                    allDogs?.map((el) => {
                        return (
                            <Link to={'/home/' + el.id} key={el.id}>
                                <Card name={el.name} image={el.image} weight={el.weight} height={el.height} />
                            </Link>
                        )
                    })
                }
            </div>
            <br/>
            <Link to='/'>
                Volver a la LandingPage
            </Link>
        </div>
    )
}