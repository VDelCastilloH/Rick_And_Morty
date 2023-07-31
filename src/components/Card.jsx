import { Link, useParams } from "react-router-dom";

export default function Card(props) {
   
   const {id} = useParams(); 

   return (
      <div>
         <button onClick={()=> props.onClose(props.id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='Imagen de Rick' /> 
      </div>
   );
}
