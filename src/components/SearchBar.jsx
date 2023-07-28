export default function SearchBar(props) {
   const buscarPersonaje = ()=>{
      const busca = document.querySelector('#buscar');
      //console.log(busca);
      props.onSearch(busca.value);
      busca.value = "";
   }
   return (
      <div>
         <input id='buscar' type='search'/>
         <button onClick={()=>{buscarPersonaje()}}>Agregar</button> 
      </div>
   );
}
 