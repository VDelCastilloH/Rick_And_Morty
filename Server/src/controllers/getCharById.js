const axios = require("axios");

function getCharById(res, id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=>{
        const {name, gender, species, origin=origin.name, image, status} = data;
        const character = {name, gender, species, origin, image, status, id};
        //console.log(character);
        res.writeHead(200,{"Content-Type": "Application/json"});
        res.end(JSON.stringify(character));
    })
   .catch((error)=>{
    res.writeHead(500,{"Content-Type":"text/plain"});
    res.end(error.message)
   })
}

module.exports = getCharById;
