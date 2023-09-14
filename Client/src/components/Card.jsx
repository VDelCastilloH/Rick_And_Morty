import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";

function Card(props) {
   
   const [isFav,setIsFav] = useState(false);
   useEffect(() => {
      console.log(props.myFavorites);
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

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
         <hr />
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={()=> props.onClose(props.id)}>❌</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name} | {props.id}</h2>
         </Link>
         <img src={props.image} alt='Imagen de personaje' /> 
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
      </div>
   );
}

function mapDispatchToProps (dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

function mapStateToProps (state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)