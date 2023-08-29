import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Nav(props){
    
    //La funcion random genera un id aleatorio para renderizar un nuevo personaje
    function ramdon() {
        const numAle = Math.floor(Math.random() * 826) + 1
        props.onSearch(numAle);    
    }
    
    return (
        <div>
            <Link to='/home'> <button>Home</button> </Link>
            <Link to="/favorites"> <button> ❤️ </button> </Link>
            <Link to='/about'> <button>About</button> </Link>  
            <SearchBar onSearch = {props.onSearch}/>
            <button onClick={ramdon}>Ramdon</button>
        </div>
    ); 
}

export default Nav;