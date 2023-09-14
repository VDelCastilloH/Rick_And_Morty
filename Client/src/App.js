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
import Favorites from './components/Favorites';
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

   // const EMAIL = "viti@gmail.com"
   // const PASSWORD = "Pass123"

   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    } else {
   //       alert('Usuario o contraseña incorrecta')
   //    }
   // }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(`${URL}?email=${email}&password=${password}`);
         const { access } = response.data;
            setAccess(access);
            access ? navigate('/home') : alert ("Ddatos incorrectos");
      } catch(error) {
        console.log(error)          
      }
   }

   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(`${URL}?email=${email}&password=${password}`)
   //    .then(({ data }) => {
   //       const { access } = data;
   //       setAccess(access);
   //       access && navigate('/home');
   //    });
   // }

   useEffect(()=>{
      !access && navigate('/');
   },[access]);

   async function onSearch(id){
      //axios(`https://rickandmortyapi.com/api/character/${id}`)
      try {
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if(!characters.find((char)=> char.id === response.data.id)){
         if (response.data.name) {
            setCharacters([...characters, response.data]);
            } 
         } else {
            window.alert(`¡Ya existe un personaje con el ID ${id}!`);
         }
      } catch (error) {
         window.alert(error);
      }
   };

   //La funcion onSearch extrae todos los personajes de la api
   // function onSearch(id){
   //    //axios(`https://rickandmortyapi.com/api/character/${id}`)
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //    .then((respuesta) => {
   //       if(!characters.find((char)=> char.id === respuesta.data.id)){
   //       if (respuesta.data.name) {
   //          setCharacters([...characters, respuesta.data]);
   //          } 
   //       } else {
   //          window.alert(`¡Ya existe un personaje con el ID ${id}!`);
   //       }
   //    })
   //    .catch((err) => window.alert(err));
   // };

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
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
