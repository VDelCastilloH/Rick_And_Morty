import React from "react";
import { connect, useDispatch } from "react-redux";
import { orderCards,filterCards } from "../redux/actions";
import Card from "./Card";

function Favorites(props){
    const [aux, setAux] = React.useState(false);
    const optionGender = ["All","Male","Female","Genderless","unknown"]
    const dispatch = useDispatch();
    
    const handlerFilter =(event) => {
        dispatch(filterCards(event.target.value))
    }

    const handlerOrder = (event) =>{
        dispatch(orderCards(event.target.value))
        setAux(!aux);
    }

    return(
        <div>
            <select onChange={handlerOrder}>
                <option value="Ascendente"> ASCENDENTE </option>
                <option value="Descendente"> DESCENDENTE </option>
            </select>
            <select onChange={handlerFilter}>
                {optionGender.map(genero => 
                    <option key={genero} value={genero}>{genero}</option>
                )}
            </select>
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
            </div>
        </div>
    )
}
 
function mapStateToProps (state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)