import { Link } from "react-router-dom";

export default function Card(props) {
   
   return (
      <div>
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
