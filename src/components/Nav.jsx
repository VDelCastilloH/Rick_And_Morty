import React from "react";
import SearchBar from "./SearchBar";

function Nav(props){
    
    //La funcion random genera un id aleatorio para renderizar un nuevo personaje
    function ramdon() {
        const numAle = Math.floor(Math.random() * 826) + 1
         props.onSearch(numAle);    
    }

    return (
        <div>   
            <SearchBar onSearch = {props.onSearch}/>
            <button onClick={ramdon}>Ramdon</button>
        </div>
    ); 
}

export default Nav;