import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

function Favorites(props){
return(
    <div>
        {props.myFavorites?.map((char)=>(<Card 
        key={char.id}
        id={char.id}
        name={char.name}
        status={char.status}
        species={char.species} 
        image={char.image}
        // onClose={char.onClose}
        />))}
    </div>)
}
 
function mapStateToProps (state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)