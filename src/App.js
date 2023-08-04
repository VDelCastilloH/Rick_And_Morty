import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

//!Componentes
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav";
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
//import React from 'react';
//import Card from './components/Card.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import characters from './data.js';

function App() {
   
   const [characters,setCharacters] = useState([]);
   const[access,setAccess] = useState(false);
   
   //!FORM
   const {pathname} = useLocation(); //muestra donde estoy parado
   //console.log(pathname);
   const navigate = useNavigate();

   const EMAIL = "viti@gmail.com"
   const PASSWORD = "Pass123"

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert('Usuario o contraseña incorrecta')
      }
   }

   useEffect(()=>{
      !access && navigate('/');
   },[access]);

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

   //La funcion onClose elimina un personaje por su id
   function onClose(id){
      setCharacters(characters.filter(char => char.id !== id))
   }
   
   return (
      <div className='App'>
         {(pathname !== '/' && <Nav onSearch = {onSearch}/>)}
         <Routes>
            <Route path='/' element= {<Form login = {login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose = {onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
