//Express
const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

async function getCharById(req,res){
    const id = req.params.id;
   try {
    const response = await axios(`${URL}${id}`);
    const {name, gender, species, origin=origin.name, image, status} = response.data;
    const character = {id, status,name, gender, species, origin, image};
    //console.log(character)
    name ? res.status(200).json(character): res.status(404).json({message:'Not found'});
    } catch (error) {
        res.status(500).json({message : error})
    } 
}
module.exports = getCharById;

// function getCharById(req,res){
//     const id = req.params.id;
//     axios(`${URL}${id}`)
//     .then(({data})=>{
//         const {name, gender, species, origin=origin.name, image, status} = data;
//         const character = {name, gender, species, origin, image, status, id};
//         console.log(character)
//         name ? res.json(character): res.status(404).json({message:'Not found'});
//     })
//     .catch((error)=>{
//         res.status(500).json({message : error})
//     })
// }
// module.exports = getCharById;

// Web Server
// const axios = require("axios");

// function getCharById(res, id){
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data})=>{
//         const {name, gender, species, origin=origin.name, image, status} = data;
//         const character = {name, gender, species, origin, image, status, id};
//         //console.log(character);
//         res.writeHead(200,{"Content-Type": "Application/json"});
//         res.end(JSON.stringify(character));
//     })
//    .catch((error)=>{
//     res.writeHead(500,{"Content-Type":"text/plain"});
//     res.end(error.message)
//    })
// }

// module.exports = getCharById;
