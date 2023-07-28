import Card from './Card';

export default function Cards(props) {
   //console.log(props);
   return (
      <div>
         {props.characters.map((personaje)=>{
            return <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={props.onClose}
         />
          })}
      </div>);
}
