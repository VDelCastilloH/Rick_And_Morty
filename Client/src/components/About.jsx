import React from "react";
import VT from "../img/VT.jpeg";

function About(){
    return(
        <div>
            <img className="imagenAutor" src={VT} alt="Imagen Victor Del Castillo"/>
            <h1>About: Proyecto Integrador de Henry Web14PTB Victor Del Castillo</h1>
        </div>
    );
}

export default About;