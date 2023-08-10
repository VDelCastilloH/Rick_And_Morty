import { Link } from "react-router-dom";
import { useState } from "react";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";

function Card(props) {
   
   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   }

   return (
      <div>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={()=> props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='Imagen de personaje' /> 
      </div>
   );
}

export function mapDispatchToProps (dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

export default connect (null, mapDispatchToProps)(Card)