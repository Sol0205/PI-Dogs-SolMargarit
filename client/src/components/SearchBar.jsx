import React from "react"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchNameDogs } from '../actions'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')     //setName = escoger un nombre

  function saveInputChanges(e){     //saveInputChanges = Guardar cambios de entrada
    e.preventDefault()
    setName(e.target.value)
  }

  function handleShipping(e){
    e.preventDefault()
    dispatch(searchNameDogs(name))
  }     //saveInputChanges = Manejar el envio

  return (
    <div>
      <input
        type="text"
        placeholder = 'Buscar...'
        onChange={(e) => saveInputChanges(e)}
      />
      <button type="submit" onClick={(e) => handleShipping(e)}>Buscar</button>
    </div>
  )
}
