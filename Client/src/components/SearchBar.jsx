import {useState} from "react";

export default function SearchBar(props) {
   
   const [id,setId] = useState("");

   //La funcion handleChange captura lo ingresado en el input y lo asigna al estado id
   function handleChange (event){
      setId(event.target.value);
   } 

   //La funcion handleSearch llama a ejecutar otra funcion que incorpora un nuevo personaje
   function handleSearch (id) {
      props.onSearch(id);
      setId('');
   }   
   
   return (
      <div>
         <input id='buscar' type='search' onChange={handleChange} value={id}/>
         <button onClick={()=>handleSearch(id)}>Agregar</button> 
      </div>
   );
}
 