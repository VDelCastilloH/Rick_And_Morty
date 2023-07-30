import './App.css';
import Nav from "./components/Nav";
import { useState } from 'react';
import Cards from './components/Cards.jsx';
import axios from 'axios';
//import React from 'react';
//import Card from './components/Card.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import characters from './data.js';

function App() {
   
   const [characters,setCharacters] = useState([]);
   
   //La funcion onSearch extrae todos los personajes de la api
   function onSearch(id){
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((respuesta) => {
         if(!characters.find((char)=> char.id === respuesta.data.id)){
         if (respuesta.data.name) {
            setCharacters([...characters, respuesta.data]);
            } 
         } else {
            window.alert(`¡Ya existe un personaje con el ID ${id}!`);
         }
      })
      .catch((err) => window.alert(err));
   };

   //La funcion onClose eliminaa un personaje por su id
   function onClose(id){
      setCharacters(characters.filter(char => char.id !== id))
   }
   
   return (
      <div className='App'>
         <Nav onSearch = {onSearch}/>
         <Cards characters={characters} onClose = {onClose} />
      </div>
   );
}

export default App;
